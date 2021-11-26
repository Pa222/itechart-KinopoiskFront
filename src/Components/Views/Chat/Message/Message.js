import React from "react";
import useStyles from "./styles";
import PropTypes from 'prop-types';

const Message = ({sender, message}) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <p className={classes.container__sender}>{sender}</p>
            <p className={classes.container__message}>{message}</p>
        </div>
    );
}

Message.propTypes = {
    sender: PropTypes.string,
    message: PropTypes.string,
}

export default Message;