import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        marginTop: "10px",
        display: "flex",
        flexDirection: "row",
        fontSize: "18px",
        borderBottom: "1px solid gray",
        cursor: "pointer",
    },
    container__sender: {
        margin: "0",
        wordBreak: "break-all"
    },
    container__redDot: {
        marginRight: "5px",
        width: "10px",
    }
});

export default useStyles;