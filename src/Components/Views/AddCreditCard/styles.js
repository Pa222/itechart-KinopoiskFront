import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    wrapper:{
        margin: "0 auto",
        maxWidth: "1280px",
        backgroundColor: "#f4f4f4",
    },
    container: {
        padding: "50px 100px",
        minHeight: "900px",
        display: "flex",
        flexDirection: "row",
    },
    container__form: {
        display: "flex",
        flexDirection: "column",
    },
    container__input: {
        margin: "0 0 10px 10px",
        fontSize: "24px",
    },
    container__submit__input:{
        fontSize: "18px",
    },
    errorMessage:{
        alignSelf: "center",
        fontSize: "18px",
        fontStyle: "italic",
        color: "red",
    },
});

export default useStyles;