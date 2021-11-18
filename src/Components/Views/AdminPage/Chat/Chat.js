import React from "react";
import useStyles from "./styles";

const Chat = props => {
    const classes = useStyles();

    const handleClick = () => {
        props.pickChat(props.sender)
    }

    return (
        <div className={classes.container} onClick={handleClick}>
            <p className={classes.container__sender}>{props.sender}</p>
        </div>
    );
}

export default Chat;