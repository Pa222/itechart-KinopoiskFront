import React from "react";
import useStyles from "./styles";

const AdminPage = props => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <h1>Admin Page</h1>
        </div>
    );
}

export default AdminPage;