import React, {useState, useEffect} from "react";
import AdminPage from '../Views/AdminPage/AdminPage';
import {HubConnectionBuilder} from '@microsoft/signalr';
import KinopoiskApi from "../../Api/KinopoiskApi";
import { connect } from "react-redux";
import { cleanCurrentChat, setChats, setCurrentChat, updateChatMessages } from "../../Actions";
import PropTypes from 'prop-types';

const AdminPageContainer = props => {
    const [connection, setConnection] = useState(null);

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl(KinopoiskApi.getHubConnectionString())
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (connection){
            connection.start()
                .then(() => {
                    connection.send('ConnectAsAdmin', {token: KinopoiskApi.getToken()});

                    connection.send('GetAdminInformation');

                    connection.on('ReceiveMessages', messages => {
                        props.updateMessages(messages);
                    })

                    connection.on('ReceiveAdminInformation', info => {
                        const updatedChats = [];
                        info.forEach(chat => {updatedChats.push(chat)});

                        props.setChats(updatedChats);
                    })

                    connection.on('UpdateAdminInformation', () => {
                        connection.send('GetAdminInformation');
                    })
                })
                .catch(e => {
                    console.log('Connection failed: ', e);
                })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [connection])

    const sendMessage = async () => {
        if (connection.connection._connectionStarted){
            try{
                await KinopoiskApi.sendMessage({receiverId: 1, senderId: connection.connection.connectionId, message: "Test"});
            } catch(e){
                console.log(e);
            }
        } else{
            alert('Нет подключения к серверу');
        }
    }

    const pickChat = (sender) => {
        props.chats.forEach(chat => {
            if (chat.sender === sender){
                props.setCurrentChat(chat);
                setCurrentChat(chat);
            }
        })
    }

    const pageProps = {
        sendMessage,
        pickChat,
        chats: props.chats,
        currentChat: props.currentChat,
    }

    return (<AdminPage {...pageProps} />)
}

const mapStateToProps = state => {
    return {
        chats: state.adminChatsState.chats,
        currentChat: state.adminChatsState.currentChat,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setChats: chats => dispatch(setChats(chats)),
        setCurrentChat: chat => dispatch(setCurrentChat(chat)),
        cleanCurrentChat: () => dispatch(cleanCurrentChat()),
        updateMessages: (messages) => dispatch(updateChatMessages(messages)),
    }
}

AdminPageContainer.propTypes = {
    chats: PropTypes.arrayOf(PropTypes.object),
    currentChat: PropTypes.object,
    setChats: PropTypes.func,
    setCurrentChat: PropTypes.func,
    cleanCurrentChat: PropTypes.func,
    updateMessages: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer);