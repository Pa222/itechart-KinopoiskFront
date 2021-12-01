import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    p5: {
        "&:last-child": {
            padding: "7px",
        }
    },
    searchResult: {
        padding: "0 10px",
        display: "flex",
        flexDirection: "row",
        borderTop: "1px solid black",
        cursor: "pointer",
        "&:hover": {
            transition: "all 0.7s ease-out",
            backgroundColor: "#dddddd",
        }
    },
});

export default useStyles;