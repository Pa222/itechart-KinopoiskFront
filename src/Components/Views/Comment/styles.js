import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        marginTop: "10px",
        display: "flex",
        flexDirection: "row"
    },
    container__image: {
        maxWidth: "70px",
        borderRadius: "50%",
    },
    container__comment: {
        display: "flex",
        flexDirection: "column",
    },
    container__commentHeader: {
        display: "flex",
        flexDirection: "row",
    },
    conatiner__deleteCommentButton: {
        marginLeft: "20px",
        fontSize: "12px",
        backgroundColor: "transparent",
        border: "1px solid gray",
        borderRadius: "5px",
        cursor: "pointer"
    },
    container__commentName:{
        margin: "0 0 0 10px",
    },
    container__commentDescription:{
        margin: "0 0 0 10px",
        wordBreak: "break-word",
    }
});

export default useStyles;
