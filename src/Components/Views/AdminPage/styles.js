import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    wrapper: {
        margin: "0 auto",
        maxWidth: "1280px",
        backgroundColor: "#f4f4f4",
    },
    wrapper__adminPanelContainer: {
        padding: "10px 10px",
        minHeight: "832px",
        display: "flex",
        flexDirection: "column",
    },
    wrapper__adminPanel: {
        width: "100%",
        minHeight: "832px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    adminPanel__chats: {
        width: "200px",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid gray",
    },
    adminPanel__currentChatContainer: {
        width: "1059px",
        display: "flex",
        flexDirection: "column",
    },
    currentChat: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    currentChat__headerContainer: {
        textAlign: "center",
        backgroundColor: "#3e3e3e",
    },
    currentChat__header: {
        margin: "10px 0",
        color: "white",
        fontSize: "24px",
    },
    currentChat__messagesContainer: {
        height: "730px",
        backgroundColor: "white",
        overflow: "auto"
    },
    currentChat__inputContainer: {
        height: "50px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#474646",
    },
    currentChat__input: {
        margin: "10px 0 0 15px",
        paddingLeft: "5px",
        height: "27px",
        width: "950px",
        fontSize: "18px",
        border: "0",
        borderRadius: "10px",
        backgroundColor: "#6d6d6d",
        color: "white",
        "&:focus, &:hover": {
            outline: "none",
            boxShadow: "none",
        },
        "&::placeholder": {
            color: "#dfdfdf",
        }
    },
    currentChat__sendImgContainer: {
        margin: "5px 0 0 7px",
    },
    currentChat__sendImg: {
        width: "40px",
        cursor: "pointer",
    },
});

export default useStyles;