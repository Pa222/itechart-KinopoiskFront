import React from "react";
import useStyles from "./styles";
import PropTypes from 'prop-types';
import { redDot } from "../../../../Constants/Pictures";

const Chat = ({pickChat, sender, isReplied}) => {
    const classes = useStyles();

    const handleClick = () => {
        pickChat(sender)
    }

    return (
        <div className={classes.container} onClick={handleClick}>
            <p className={classes.container__sender}>{sender}</p>
            {
                !isReplied &&
                <div>
                    <img className={classes.container__redDot} src={redDot} alt="New message"/>
                </div>
            }
        </div>
    );
}

Chat.propTypes = {
    pickChat: PropTypes.func.isRequired,
    sender: PropTypes.string.isRequired,
    isReplied: PropTypes.bool.isRequired,
}

export default Chat;