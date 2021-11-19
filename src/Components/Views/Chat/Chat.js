import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./styles";
import Message from "./Message/Message";

const Chat = props => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {
                props.opened &&
                <div className={classes.container__chat}>
                    <div className={classes.chat__header}>
                        <p className={classes.chat__headerText}>Чат с администрацией</p>
                    </div>
                    <div id="messages" className={classes.chat__messagesContainer}>
                        {
                            props.messages.length > 0 &&
                            props.messages.map((message, i) => <Message key={Date.now() * Math.random()} {...message}/>)
                        }
                    </div>
                    <div className={classes.chat__inputContainer}>
                        <input 
                            className={classes.chat__input}
                            type="text"
                            name="message" 
                            value={props.message}
                            onChange={props.handleChange}
                            autoComplete="off"
                            placeholder="Введите сообщение"
                        />
                        <div className={classes.chat__sendImgContainer}>
                            <img
                                className={classes.chat__sendImg}
                                src="https://res.cloudinary.com/pa2/image/upload/v1637150966/Static/send_fus324.png" 
                                alt="Send"
                                onClick={props.sendMessage}
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
                    onClick={props.toggleChat}
                />
            </div>
        </div>
    );
}

Chat.propTypes = {
    opened: PropTypes.bool,
    message: PropTypes.string,
    messages: PropTypes.arrayOf(PropTypes.object),
    toggleChat: PropTypes.func,
    handleChange: PropTypes.func,
    sendMessage: PropTypes.func,
}

export default Chat;