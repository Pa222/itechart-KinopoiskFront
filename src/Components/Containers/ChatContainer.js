import React, { useState, useEffect, useRef } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Chat from "../Views/Chat/Chat";
import KinopoiskApi from '../../Api/KinopoiskApi';
import {HubConnectionBuilder} from '@microsoft/signalr';
import { InfoMessages } from "../../Enums/Enums";
import { ConnectionHubMethods } from "../../Enums/Enums";

const ChatContainer = ({name}) => {
    const [connection, setConnection] = useState(null);
    const [opened, setOpened] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const chatContainer = useRef(null);
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
                    connection.on(ConnectionHubMethods.ReceiveMessage, message => {
                        const updatedMessages = [...latestChat.current];
                        updatedMessages.push(message);

                        setMessages(updatedMessages);

                        chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
                    });
                })
                .catch(e => {
                    console.log(InfoMessages.ConnectionFail, e);
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

    const sendMessage = async () => {
        const conn = connection.connection;
        const newMessage = {
            sender: name || conn.connectionId,
            message,
        }
        if(message && conn._connectionStarted){
            setMessages([...messages, newMessage]);
         
            chatContainer.current.scrollTop = chatContainer.current.scrollHeight;

            await connection.send(ConnectionHubMethods.SendMessageToAdmin, newMessage);
        }

        setMessage('');
    }

    const chatProps = {
        opened,
        message,
        messages,
        chatContainer,
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
    name: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, null)(ChatContainer);
