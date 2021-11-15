import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        marginTop: "10px",
        display: "flex",
        flexDirection: "row"
    },
    container__image: {
        maxWidth: "70px"
    },
    container__comment: {
        display: "flex",
        flexDirection: "column",
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
