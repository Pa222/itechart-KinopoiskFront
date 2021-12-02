import React, {useState, useEffect} from "react";
import AdminPage from '../Views/AdminPage/AdminPage';
import {HubConnectionBuilder} from '@microsoft/signalr';
import KinopoiskApi from "../../Api/KinopoiskApi";
import { connect } from "react-redux";
import { cleanCurrentChat, setChats, setCurrentChat, updateChatMessages } from "../../Actions";
import PropTypes from 'prop-types';
import { InfoMessages } from "../../Enums/Enums";
import { ConnectionHubMethods } from "../../Enums/Enums";

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
                    connection.send(ConnectionHubMethods.ConnectAsAdmin, {token: KinopoiskApi.getToken()});

                    connection.send(ConnectionHubMethods.GetAdminInformation);

                    connection.on(ConnectionHubMethods.ReceiveMessages, messages => {
                        updateMessages(messages);
                    })

                    connection.on(ConnectionHubMethods.ReceiveAdminInformation, info => {
                        const updatedChats = [];
                        info.forEach(chat => updatedChats.push(chat));

                        if (info.length === 0){
                            cleanCurrentChat();
                        }

                        setChats(updatedChats);
                    })

                    connection.on(ConnectionHubMethods.UpdateAdminInformation, () => {
                        connection.send(ConnectionHubMethods.GetAdminInformation);
                    })
                })
                .catch(e => {
                    console.log(InfoMessages.ConnectionFail, e);
                })
        }
    }, [connection])

    const handleChange = e => {
        setMessage(e.target.value);
    }

    const sendMessage = async () => {
        const conn = connection.connection;
        const newMessage = {
            sender: name,
            receiver: currentChat.sender,
            message,
        }

        if(message !== '' && conn._connectionStarted){
            await connection.send(ConnectionHubMethods.SendMessageToUser, newMessage);

            const updatedCurrentChat = currentChat;
            updatedCurrentChat.messages.push(newMessage);

            setCurrentChat(updatedCurrentChat);
        }

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
        message,
        chats,
        currentChat,
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
    name: PropTypes.string.isRequired,
    chats: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentChat: PropTypes.object.isRequired,
    setChats: PropTypes.func.isRequired,
    setCurrentChat: PropTypes.func.isRequired,
    cleanCurrentChat: PropTypes.func.isRequired,
    updateMessages: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer);
