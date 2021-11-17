import React, { useState } from "react";
import Chat from "../Views/Chat/Chat";

const ChatContainer = props => {
    const [opened, setOpened] = useState(false);
    const [message, setMessage] = useState('');

    const toggleChat = () => {
        setOpened(!opened);
    }

    const handleChange = e => setMessage(e.target.value);

    const chatProps = {
        opened,
        message,
        toggleChat,
        handleChange,
    }

    return (
        <Chat {...chatProps}/> 
    );
}

export default ChatContainer;