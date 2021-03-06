import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    p0: {
        padding: "0",
    },
    header: {
        width: "100%",
        height: "72px",
        backgroundColor: "#1f1f1f",
    },
    header__content: {
        margin: "0 auto",
        maxWidth: "1280px",
        height: "inherit",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    header__userImage: {
        marginRight: "20px",
        cursor: "pointer",
    },
    header__title: {
        marginLeft: "20px",
        maxWidth: "200px",
        fontSize: "34px",
        fontWeight: "bold",
        fontFamily: "sans-serif",
        color: "white",
        cursor: "pointer"
    },
    header__searchBoxContainer: {
        position: "relative",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "row",
        borderRadius: "5px",
        backgroundColor: "#3e3e3e",
    },
    header__searchResults: {
        top: "40px",
        position: "absolute",
        width: "100%",
        backgroundColor: "white",
        zIndex: "10",
    },
    header__searchBox: {
        padding: "5px",
    },
    header__searchBoxText: {
        color: "white",
    },
    header__searchButton: {
        padding: "7px 5px 5px 5px",
        width: "25px",
        cursor: "pointer",
    },
    header__menu: {
        position: "absolute",
        backgroundColor: "#1f1f1f",
        borderRadius: "15px",
    },
    header__menuItem: {
        margin: "2px 0 2px 0",
        padding: "5px 10px",
        border: "0",
        backgroundColor: "transparent",
        color: "white",
        fontSize: "18px",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#3e3e3e",
            transition: "0.3s",
        }
    },
});

export default useStyles;