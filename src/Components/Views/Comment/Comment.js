import React from "react";
import useStyles from "./styles";
import PropTypes from 'prop-types';

const Comment = props => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div>
                <img className={classes.container__image} src={props.userAvatar} alt="UserAvatar"></img>
            </div>
            <div className={classes.container__comment}>
                <h3 className={classes.container__commentName}>{props.userName}</h3>
                <p className={classes.container__commentDescription}>{props.description}</p>
            </div>
        </div>
    );
}

Comment.propTypes = {
    description: PropTypes.string,
    userName: PropTypes.string,
    userAvatar: PropTypes.string,
}

export default Comment;