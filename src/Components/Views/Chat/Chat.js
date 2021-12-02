import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./styles";
import Message from "./Message/Message";
import { chatPicture, sendButton } from "../../../Constants/Pictures";

const Chat = props => {
    const classes = useStyles();
    const {opened, message, messages, toggleChat, handleChange,sendMessage, chatContainer} = props;

    return (
        <div className={classes.container}>
            {
                opened &&
                <div className={classes.container__chat}>
                    <div className={classes.chat__header}>
                        <p className={classes.chat__headerText}>Чат с администрацией</p>
                    </div>
                    <div ref={chatContainer} className={classes.chat__messagesContainer}>
                        {
                            messages.length > 0 &&
                            messages.map(message => <Message key={Date.now() * Math.random()} {...message}/>)
                        }
                    </div>
                    <div className={classes.chat__inputContainer}>
                        <input 
                            className={classes.chat__input}
                            type="text"
                            name="message" 
                            value={message}
                            onChange={handleChange}
                            autoComplete="off"
                            placeholder="Введите сообщение"
                            maxLength="255"
                        />
                        <div className={classes.chat__sendImgContainer}>
                            <img
                                className={classes.chat__sendImg}
                                src={sendButton}
                                alt="Send"
                                onClick={sendMessage}
                            />
                        </div>
                    </div>
                </div>
            }
            <div className={classes.container__imgContainer}>
                <img 
                    className={classes.container__image} 
                    src={chatPicture}
                    alt="Chat" 
                    onClick={toggleChat}
                />
            </div>
        </div>
    );
}

Chat.propTypes = {
    opened: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleChat: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    chatContainer: PropTypes.object.isRequired,
}

export default Chat;