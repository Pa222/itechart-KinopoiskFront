import React from "react";
import useStyles from "./styles";

const Chat = props => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <p className={classes.container__sender}>{props.sender}</p>
        </div>
    );
}

export default Chat;