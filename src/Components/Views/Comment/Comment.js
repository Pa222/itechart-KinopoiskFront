import React from "react";
import useStyles from "./styles";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { Card, CardContent, Typography, CardMedia, Button } from "@material-ui/core";

const Comment = props => {
    const classes = useStyles();
    const {description, userName, userAvatar, deleteComment, id} = props;
    const author = useSelector(state => state.userState.name);

    const handleDelete = () => {
        deleteComment(id)
    }

    return (
        <Card className={classes.container}>
            <CardMedia className={classes.container__image} image={userAvatar} component="img"/>
            <CardContent className={classes.container__comment}>
                <div className={classes.container__commentHeader}>
                    <Typography className={classes.container__commentName}>{userName}</Typography>
                    {
                        userName === author &&
                        <Button className={classes.conatiner__deleteCommentButton} onClick={handleDelete} >Удалить</Button>
                    }
                </div>
                <Typography className={classes.container__commentDescription}>{description}</Typography>
            </CardContent>
        </Card>
    );
}

Comment.propTypes = {
    description: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userAvatar: PropTypes.string.isRequired,
    deleteComment: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
}

export default Comment;