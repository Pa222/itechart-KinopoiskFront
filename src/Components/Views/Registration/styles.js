import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    wrapper: {
        margin: "0 auto",
        maxWidth: "1280px",
        backgroundColor: "#f4f4f4",
    },
    wrapper__loginFormContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "815px",
    },
    loginFormContainer__input: {
        marginTop: "20px",
        alignSelf: "center",
        height: "40px",
        minWidth: "200px",
        border: "1px solid gray",
        borderRadius: "10px",
        fontSize: "24px",
    },
    loginFormContainer__submitButton: {
        "&:hover": {
            transition: "0.7s",
            backgroundColor: "#9e9e9e",
        }
    },
    loginFormContainer__registerButton: {
        marginTop: "10px",
        alignSelf: "center",
        border: "0",
        backgroundColor: "transparent",
        cursor: "pointer",
    },
    errorMessage:{
        alignSelf: "center",
        fontStyle: "italic",
        color: "red",
    },
});

export default useStyles;