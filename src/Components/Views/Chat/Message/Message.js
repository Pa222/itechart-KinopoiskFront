import React from "react";
import useStyles from "./styles";
import PropTypes from 'prop-types';

const Message = props => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <p className={classes.container__sender}>{props.sender}</p>
            <p className={classes.container__message}>{props.message}</p>
        </div>
    );
}

Message.propTypes = {
    receiver: PropTypes.string,
    sender: PropTypes.string,
    message: PropTypes.string,
}

export default Message;