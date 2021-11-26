import React, {useState, useEffect} from "react";
import AdminPage from '../Views/AdminPage/AdminPage';
import {HubConnectionBuilder} from '@microsoft/signalr';
import KinopoiskApi from "../../Api/KinopoiskApi";
import { connect } from "react-redux";
import { cleanCurrentChat, setChats, setCurrentChat, updateChatMessages } from "../../Actions";
import PropTypes from 'prop-types';

const AdminPageContainer = ({updateMessages, name, currentChat, chats, setChats, setCurrentChat, cleanCurrentChat}) => {
    const [connection, setConnection] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl(KinopoiskApi.getHubConnectionString())
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, [])

    useEffect(() => {
        if (connection){
            connection.start()
                .then(() => {
                    connection.send('ConnectAsAdmin', {token: KinopoiskApi.getToken()});

                    connection.send('GetAdminInformation');

                    connection.on('ReceiveMessages', messages => {
                        updateMessages(messages);
                    })

                    connection.on('ReceiveAdminInformation', info => {
                        const updatedChats = [];
                        info.forEach(chat => updatedChats.push(chat));

                        if (info.length === 0){
                            cleanCurrentChat();
                        }

                        setChats(updatedChats);
                    })

                    connection.on('UpdateAdminInformation', () => {
                        connection.send('GetAdminInformation');
                    })
                })
                .catch(e => {
                    console.log('Connection failed: ', e);
                })
        }
    }, [connection])

    const handleChange = e => {
        setMessage(e.target.value);
    }

    const handleKeyUp = e => {
        if (e.code === "Enter"){
            sendMessage();
        }
    }

    const sendMessage = async () => {
        const conn = connection.connection;
        const newMessage = {
            sender: name,
            receiver: currentChat.sender,
            message,
        }

        if(message !== '' && conn._connectionStarted){
            await connection.send('SendMessageToUser', newMessage);

            const updatedCurrentChat = currentChat;
            updatedCurrentChat.messages.push(newMessage);

            setCurrentChat(updatedCurrentChat);

            const messagesBlock = document.querySelector("#adminMessages");
            messagesBlock.scrollTop = messagesBlock.scrollHeight;
        }

        document.querySelector('input[name="message"]').value = '';
        setMessage('');
    }

    const pickChat = (sender) => {
        chats.forEach(chat => {
            if (chat.sender === sender){
                setCurrentChat(chat);
            }
        })
    }

    const pageProps = {
        sendMessage,
        pickChat,
        handleChange,
        handleKeyUp,
        message,
        chats: chats,
        currentChat: currentChat,
    }

    return (<AdminPage {...pageProps} />)
}

const mapStateToProps = state => {
    return {
        name: state.userState.name,
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
    name: PropTypes.string,
    chats: PropTypes.arrayOf(PropTypes.object),
    currentChat: PropTypes.object,
    setChats: PropTypes.func,
    setCurrentChat: PropTypes.func,
    cleanCurrentChat: PropTypes.func,
    updateMessages: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer);
