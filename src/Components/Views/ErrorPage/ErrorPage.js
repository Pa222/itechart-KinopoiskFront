import React from "react";
import useStyles from "./styles";
import { useHistory } from "react-router";

const ErrorPage = () => {
    const history = useHistory();
    
    const goToMainPage = () => {
        history.push('/');
    }
    
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <h1>ERROR 404: Page not found</h1>
            <input type="button" value="На главную" onClick={goToMainPage}></input>
        </div>
    );
}

export default ErrorPage;