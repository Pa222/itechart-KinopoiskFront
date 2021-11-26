import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./styles";
import Message from "./Message/Message";

const Chat = props => {
    const classes = useStyles();
    const {opened, message, messages, toggleChat, handleChange,sendMessage} = props;

    return (
        <div className={classes.container}>
            {
                opened &&
                <div className={classes.container__chat}>
                    <div className={classes.chat__header}>
                        <p className={classes.chat__headerText}>Чат с администрацией</p>
                    </div>
                    <div id="messages" className={classes.chat__messagesContainer}>
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
                                src="https://res.cloudinary.com/pa2/image/upload/v1637150966/Static/send_fus324.png" 
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
                    src="https://res.cloudinary.com/pa2/image/upload/v1637148195/Static/chat_ved61h.png" 
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
}

export default Chat;