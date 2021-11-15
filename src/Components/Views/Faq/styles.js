import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    faq__container: {
        margin: "20px auto",
        maxWidth: "1280px",
    },
    faq__question: {
        "&:first-letter": {
            paddingRight: "30px",
            fontSize: "48px",
            color: "red",
        },
    },
    faq__answer: {
        "&:first-letter":{
            paddingRight: "30px",
            fontSize: "48px",
            color: "green",
        },
    }
});

export default useStyles;