import React from "react";
import useStyles from "./styles";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

const Comment = props => {
    const classes = useStyles();
    const {description, userName, userAvatar, deleteComment, id} = props;
    const author = useSelector(state => state.userState.name);

    const handleDelete = () => {
        deleteComment(id)
    }

    return (
        <div className={classes.container}>
            <div>
                <img className={classes.container__image} src={userAvatar} alt="UserAvatar"></img>
            </div>
            <div className={classes.container__comment}>
                <div className={classes.container__commentHeader}>
                    <h3 className={classes.container__commentName}>{userName}</h3>
                    {
                        userName === author &&
                        <input className={classes.conatiner__deleteCommentButton} type="button" onClick={handleDelete} value="Удалить" />
                    }
                </div>
                <p className={classes.container__commentDescription}>{description}</p>
            </div>
        </div>
    );
}

Comment.propTypes = {
    description: PropTypes.string,
    userName: PropTypes.string,
    userAvatar: PropTypes.string,
    deleteComment: PropTypes.func,
    id: PropTypes.number,
}

export default Comment;