import React from "react";
import useStyles from "./styles";

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
                    <img className={classes.container__redDot} src="https://res.cloudinary.com/pa2/image/upload/v1637317957/Static/Red_dot_i3v3oi.png" alt="New message"/>
                </div>
            }
        </div>
    );
}

export default Chat;