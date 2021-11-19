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
            {
                !props.isReplied &&
                <div>
                    <img className={classes.container__redDot} src="https://res.cloudinary.com/pa2/image/upload/v1637317957/Static/Red_dot_i3v3oi.png" alt="New message"/>
                </div>
            }
        </div>
    );
}

export default Chat;