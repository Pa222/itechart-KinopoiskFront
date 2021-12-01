import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./styles";
import Comment from "../Comment/Comment";
import { Rating } from '@mui/material';
import { Card, CardContent, Typography, CardMedia, TextField, Button } from "@material-ui/core";

const MoviePage = props => {
    const classes = useStyles();
    const {authorized,
        title,
        image,
        createYear,
        description,
        genres,
        comments,
        rating,
        comment,
        handleChange,
        handleSubmit,
        handleDeleteComment,
        handleRatingChange} = props;

    return (
        <div className={classes.wrapper}>
            <div className={classes.movie}>
                <Card className={classes.movie__main} key={1}>
                    <CardMedia className={classes.movie__poster} image={image} component="img" />
                    <CardContent>
                        <Typography className={classes.movie__title} color="textSecondary" gutterBottom>
                            {title} ({createYear})
                        </Typography>
                        {
                            authorized &&
                            <Rating 
                                name="simple-controlled"
                                value={rating}
                                onChange={handleRatingChange}
                            />
                        }
                        {
                            !authorized &&
                            <Rating 
                                readOnly
                                value={rating}
                            />
                        }
                        <Typography className={classes.movie__genres}>
                            {
                                genres.map((genre, i, arr) => {
                                    if (i === arr.length - 1)
                                        return genre;
                                    return genre + ', ';
                                })
                            }
                        </Typography>
                        <Typography className={classes.movie__description}>{description}</Typography>
                    </CardContent>
                </Card>
                <div className={classes.movie__comments}>
                    {
                        comments.length > 0 &&
                        comments.map(comment => <Comment key={comment.id} deleteComment={handleDeleteComment} {...comment} />)
                    }
                    {
                        comments.length === 0 &&
                        <Typography>Комментариев нет</Typography>
                    }
                    {
                        authorized && 
                        <div className={classes.movie__commentForm}>
                            <Typography>Оставьте свой комментарий:</Typography>
                            <TextField 
                                className={classes.movie__commentInput} 
                                maxLength="255"
                                label="Комментарий"
                                margin="none"
                                variant="outlined"
                                value={comment}
                                onChange={handleChange}
                            />
                            <Button variant="outlined" onClick={handleSubmit}>Оставить комментарий</Button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

MoviePage.propTypes = {
    authorized: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    createYear: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    rating: PropTypes.number.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleDeleteComment: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleRatingChange: PropTypes.func.isRequired,
}

export default MoviePage;