import React from "react";
import useStyles from "./styles";
import PropTypes from 'prop-types';

const AdminPage = props => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper__adminPanelContainer}>
                <div className={classes.wrapper__adminPanel}>
                </div>
            </div>
        </div>
    );
}

AdminPage.propTypes = {
    selectedTab: PropTypes.string,
    handleTabChange: PropTypes.func,
}

export default AdminPage;