import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    wrapper: {
        margin: "0 auto",
        maxWidth: "1280px",
        backgroundColor: "#f4f4f4",
    },
    wrapper__adminPanelContainer: {
        minHeight: "900px",
        display: "flex",
        flexDirection: "column",
    },
    wrapper__adminPanel: {
        width: "100%",
        minHeight: "832px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
});

export default useStyles;