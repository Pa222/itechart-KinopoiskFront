import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        position: "absolute",
        right: "50px",
        bottom: "50px",
        zIndex: "3",
    },
    container__imgContainer: {
        display: "flex",
        justifyContent: "right",
    },
    container__image: {
        width: "50px",
        cursor: "pointer",
        alignSelf: "right",
    },
    container__chat: {
        marginBottom: "20px",
        width: "310px",
        height: "450px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid gray",
        borderRadius: "20px",
        boxShadow: "0 0 20px gray",
    },
    chat__header: {
        height: "70px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px 20px 0 0",
        backgroundColor: "#3e3e3e",
    },
    chat__headerText: {
        fontFamily: "Sans-Serif",
        fontSize: "18px",
        textAlign: "center",
        color: "white",
        wordBreak: "break-word",
    },
    chat__messagesContainer: {
        height: "330px",
        backgroundColor: "white",
    },
    chat__inputContainer: {
        height: "50px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#474646",
        borderRadius: "0 0 20px 20px",
    },
    chat__input: {
        margin: "10px 0 0 15px",
        paddingLeft: "5px",
        height: "27px",
        width: "230px",
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
    chat__sendImgContainer: {
        margin: "5px 0 0 7px",
    },
    chat__sendImg: {
        width: "40px",
        cursor: "pointer",
    },
});

export default useStyles;