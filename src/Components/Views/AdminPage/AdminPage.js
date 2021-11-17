import React from "react";
import useStyles from "./styles";
import PropTypes from 'prop-types';

const AdminPage = props => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper__adminPanelContainer}>
                <div className={classes.wrapper__adminPanel}>
                    <div className={classes.adminPanel__chats}>
                        {
                            props.chats.length === 0 &&
                            <h2>Нет новых сообщений</h2>
                        }
                        <input type="button" value="test" onClick={props.sendMessage}/>
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