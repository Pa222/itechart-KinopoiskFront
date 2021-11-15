import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        minHeight: "50px",
        display: "flex",
        flexDirection: "row",
    },
    container__info: {
        margin: "0 0 0 20px",
        fontSize: "20px",
    },
    container__creditCardImage:{
        maxWidth: "50px",
    },
    container__deleteButton: {
        marginLeft: "20px",
        height: "30px",
    },
});

export default useStyles;