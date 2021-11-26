import React, {useState, useEffect} from "react";
import AdminPage from '../Views/AdminPage/AdminPage';
import {HubConnectionBuilder} from '@microsoft/signalr';
import KinopoiskApi from "../../Api/KinopoiskApi";
import { connect } from "react-redux";
import { cleanCurrentChat, setChats, setCurrentChat, updateChatMessages } from "../../Actions";
import PropTypes from 'prop-types';
import { CONNECT_AS_ADMIN, GET_ADMIN_INFORMATION, RECEIVE_ADMIN_INFORMATION, RECEIVE_MESSAGES, SEND_MESSAGE_TO_USER, UPDATE_ADMIN_INFORMATION } from "../../Enums/ConnectionHubMethods";
import { CONNECTION_FAIL } from "../../Enums/StringConsts";

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
                    connection.send(CONNECT_AS_ADMIN, {token: KinopoiskApi.getToken()});

                    connection.send(GET_ADMIN_INFORMATION);

                    connection.on(RECEIVE_MESSAGES, messages => {
                        updateMessages(messages);
                    })

                    connection.on(RECEIVE_ADMIN_INFORMATION, info => {
                        const updatedChats = [];
                        info.forEach(chat => updatedChats.push(chat));

                        if (info.length === 0){
                            cleanCurrentChat();
                        }

                        setChats(updatedChats);
                    })

                    connection.on(UPDATE_ADMIN_INFORMATION, () => {
                        connection.send(GET_ADMIN_INFORMATION);
                    })
                })
                .catch(e => {
                    console.log(CONNECTION_FAIL, e);
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
            await connection.send(SEND_MESSAGE_TO_USER, newMessage);

            const updatedCurrentChat = currentChat;
            updatedCurrentChat.messages.push(newMessage);

            setCurrentChat(updatedCurrentChat);

            const messagesBlock = document.querySelector("#adminMessages");
            messagesBlock.scrollTop = messagesBlock.scrollHeight;
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
