import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        minHeight: "50px",
        display: "flex",
        flexDirection: "column",
        borderBottom: "1px solid black",
        backgroundColor: "#cfcfcf",
    },
    container__sender: {
        margin: "10px 0 0 10px",
        fontSize: "14px",
        fontStyle: "italic",
    },
    container__message: {
        margin: "0 0 5px 10px",
        fontSize: "20px",
        wordBreak: "break-word",
    },
});

export default useStyles;