import React from "react";
import useStyles from "./styles";
import PropTypes from 'prop-types';
import Chat from "./Chat/Chat";
import Message from "../Chat/Message/Message";

const AdminPage = props => {
    const classes = useStyles();
    const {sendMessage, pickChat, handleChange, handleKeyUp, message, chats, currentChat} = props; 

    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper__adminPanelContainer}>
                <div className={classes.wrapper__adminPanel}>
                    <div className={classes.adminPanel__chats}>
                        {
                            chats.length === 0 &&
                            <h2>Нет активных пользователей</h2>
                        }
                        {
                            chats.length > 0 &&
                            chats.map(chat => <Chat 
                                                        key={Date.now() * Math.random()} 
                                                        pickChat={pickChat} 
                                                        {...chat} 
                                                    />)
                        }
                    </div>
                    <div className={classes.adminPanel__currentChatContainer}>
                        {
                            currentChat.sender === '' &&
                            <h3>Выберите чат из списка</h3>
                        }
                        {
                            currentChat.sender !== '' &&
                            <div className={classes.currentChat}>
                                <div className={classes.currentChat__headerContainer}>
                                    <p className={classes.currentChat__header}>{currentChat.sender}</p>
                                </div>
                                <div id="adminMessages" className={classes.currentChat__messagesContainer}>
                                    {
                                        currentChat.messages.map((message, i) => <Message key={Date.now() * Math.random()} {...message}/>)
                                    }
                                </div>
                                <div className={classes.currentChat__inputContainer}>
                                    <input 
                                        className={classes.currentChat__input}
                                        type="text"
                                        name="message" 
                                        autoComplete="off"
                                        placeholder="Введите сообщение"
                                        maxLength="255"
                                        value={message}
                                        onChange={handleChange}
                                        onKeyUp={handleKeyUp}
                                    />
                                    <div className={classes.currentChat__sendImgContainer}>
                                        <img
                                            className={classes.currentChat__sendImg}
                                            src="https://res.cloudinary.com/pa2/image/upload/v1637150966/Static/send_fus324.png" 
                                            alt="Send"
                                            onClick={sendMessage}
                                        />
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

AdminPage.propTypes = {
    sendMessage: PropTypes.func,
    pickChat: PropTypes.func,
    handleChange: PropTypes.func,
    handleKeyUp: PropTypes.func,
    message: PropTypes.string,
    chats: PropTypes.arrayOf(PropTypes.object),
    currentChat: PropTypes.object,
}

export default AdminPage;