import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    wrapper: {
        margin: "0 auto",
        maxWidth: "1280px",
        backgroundColor: "#f4f4f4",
    },
    wrapper__profileContainer: {
        padding: "40px",
        minHeight: "900px",
        display: "flex",
        flexDirection: "row",
    },
    profileContainer__avatarContainer:{
        display: "flex",
        flexDirection: "column"
    },
    profileContainer__editButton:{
        marginLeft: "20px",
    },
    profileContainer__avatar: {
        maxWidth: "200px",
        maxHeight: "300px"
    },
    profileContainer__informationContainer:{
        marginLeft: "100px",
        display: "flex",
        flexDirection: "column"
    },
    profileContainer__inforamtionKey: {
        fontSize: "24px",
        fontStyle: "italic",
    },
    profileContainer__informationValue: {
        marginLeft: "40px",
        fontSize: "20px",
    },
    profileContainer__cardsContainer: {
        maxHeight: "150px",
        overflow: "auto",
    },
    errorMessage:{
        alignSelf: "center",
        fontStyle: "italic",
        color: "red",
    },
});

export default useStyles;