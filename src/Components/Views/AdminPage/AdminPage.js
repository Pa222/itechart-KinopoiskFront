import React from "react";
import useStyles from "./styles";
import PropTypes from 'prop-types';
import Chat from "./Chat/Chat";

const AdminPage = props => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper__adminPanelContainer}>
                <div className={classes.wrapper__adminPanel}>
                    <div className={classes.adminPanel__chats}>
                        {
                            props.chats.length === 0 &&
                            <h2>Нет активных пользователей</h2>
                        }
                        {
                            props.chats.length > 0 &&
                            props.chats.map(chat => <Chat key={Date.now() * Math.random()} {...chat} />)
                        }
                    </div>
                    <div className={classes.adminPanel__currentChat}>
                        {
                            !props.currentChat &&
                            <h3>Выберите чат из списка</h3>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

AdminPage.propTypes = {
    sendMessage: PropTypes.func,
    chats: PropTypes.arrayOf(PropTypes.object),
    currentChat: PropTypes.object,
}

export default AdminPage;