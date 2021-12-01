import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        marginTop: "10px",
        display: "flex",
        flexDirection: "row"
    },
    container__image: {
        margin: "10px 0 10px 10px",
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
        padding: "0",
        fontSize: "11px",
        border: "1px solid gray",
        borderRadius: "5px",
        cursor: "pointer"
    },
    container__commentName:{
        fontStyle: "italic"
    },
    container__commentDescription:{
        wordBreak: "break-word",
    }
});

export default useStyles;
