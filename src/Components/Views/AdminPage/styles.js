import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    wrapper: {
        margin: "0 auto",
        maxWidth: "1280px",
        backgroundColor: "#f4f4f4",
    },
    wrapper__adminPanelContainer: {
        padding: "10px 10px",
        minHeight: "832px",
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
    adminPanel__chats: {
        width: "200px",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid gray",
    },
    adminPanel__currentChat: {
        width: "1000px",
        display: "flex",
        flexDirection: "column",
    },
});

export default useStyles;