import React, { useState, useEffect, useRef } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Chat from "../Views/Chat/Chat";
import KinopoiskApi from '../../Api/KinopoiskApi';
import {HubConnectionBuilder} from '@microsoft/signalr';

const ChatContainer = props => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [connection])

    const toggleChat = () => {
        setOpened(!opened);
    }

    const handleChange = e => setMessage(e.target.value);

    const sendMessage = async (e) => {
        const conn = connection.connection;
        const newMessage = {
            sender: '',
            message,
        }
        if(message !== '' && conn._connectionStarted){
            props.name !== '' ? newMessage.sender = props.name : newMessage.sender = conn.connectionId;

            messages.push(newMessage);
            setMessages([...messages]);

            await connection.send("SendMessage", newMessage);

            const messagesBlock = document.querySelector("#messages");
            messagesBlock.scrollTop = messagesBlock.scrollHeight;
        }

        setMessage('');
        e.target.value = '';
    }

    const chatProps = {
        opened,
        message,
        messages,
        toggleChat,
        handleChange,
        sendMessage,
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