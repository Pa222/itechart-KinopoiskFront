import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    wrapper: {
        margin: "0 auto",
        width: "1280px",
        minHeight: "850px",
        backgroundColor: "#f4f4f4",
    },
    wrapper__loadingContainer: {
        display: "flex",
        minHeight: "900px",
        justifyContent: "center",
    },
    wrapper__loading: {
        width: "100px",
        height: "100px",
    },
    movie: {
        padding: "40px 20px",
        display: "flex",
        flexDirection: "row",
    },
    movie__poster: {
        maxWidth: "300px",
    },
    movie__info:{
        marginLeft: "40px",
        display: "flex",
        flexDirection: "column",
    },
    movie__title:{
        marginTop: "0",
        marginBottom: "0",
        fontSize: "36px",
        fontWeight: "bold",
        fontFamily: "Sans-serif",
    },
    movie__genres:{
        marginTop: "10px",
        fontSize: "18px",
        fontStyle: "italic",
        color: "#a6a6a6",
    },
    movie__description:{
        fontSize: "22px",
        wordBreak: "break-word",
    },
});

export default useStyles;