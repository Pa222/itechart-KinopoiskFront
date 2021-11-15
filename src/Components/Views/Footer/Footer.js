import React from "react";
import useStyles from "./styles";

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <p>© 2021, Pa2</p>
        </div>
    );
}

export default Footer;