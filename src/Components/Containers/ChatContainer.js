import React, { useState, useEffect, useRef } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Chat from "../Views/Chat/Chat";
import KinopoiskApi from '../../Api/KinopoiskApi';
import {HubConnectionBuilder} from '@microsoft/signalr';

const ChatContainer = ({name}) => {
    const [connection, setConnection] = useState(null);
    const [opened, setOpened] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const latestChat = useRef(null)

    latestChat.current = messages;

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
                    connection.on('ReceiveMessage', message => {
                        const updatedMessages = [...latestChat.current];
                        updatedMessages.push(message);

                        setMessages(updatedMessages);

                        const messagesBlock = document.querySelector("#messages");
                        messagesBlock.scrollTop = messagesBlock.scrollHeight;
                    });
                })
                .catch(e => {
                    console.log('Connection failed: ', e);
                })
        }
        return () => {
            if(connection){
                connection.stop();
            }
        }
    }, [connection])

    const toggleChat = () => {
        setOpened(!opened);
    }

    const handleChange = e => setMessage(e.target.value);

    const handleKeyUp = e => {
        if (e.code === "Enter"){
            sendMessage();
        }
    }

    const sendMessage = async () => {
        const conn = connection.connection;
        const newMessage = {
            sender: '',
            message,
        }
        if(message !== '' && conn._connectionStarted){
            name !== '' ? newMessage.sender = name : newMessage.sender = conn.connectionId;

            messages.push(newMessage);
            setMessages([...messages]);

            await connection.send("SendMessageToAdmin", newMessage);

            const messagesBlock = document.querySelector("#messages");
            messagesBlock.scrollTop = messagesBlock.scrollHeight;
        }

        setMessage('');
    }

    const chatProps = {
        opened,
        message,
        messages,
        toggleChat,
        handleChange,
        sendMessage,
        handleKeyUp,
    }

    return (
            <Chat {...chatProps}/> 
    );
}

const mapStateToProps = state => {
    return {
        name: state.userState.name,
    }
}

ChatContainer.propTypes = {
    name: PropTypes.string,
}

export default connect(mapStateToProps, null)(ChatContainer);
