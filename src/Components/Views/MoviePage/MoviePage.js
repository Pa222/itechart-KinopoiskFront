import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./styles";
import Comment from "../Comment/Comment";
import { Rating } from '@mui/material';

const MoviePage = props => {
    const classes = useStyles();
    const {authorized,
        title,
        image,
        createYear,
        description,
        genres,
        comments,
        comment,
        rating,
        handleSubmit,
        handleChange,
        handleDeleteComment,
        handleRatingChange} = props;

    return (
        <div className={classes.wrapper}>
            <div className={classes.movie}>
                <div className={classes.movie__main}>
                    <img className={classes.movie__poster} src={image} alt="poster"></img>
                    <div className={classes.movie__info}>
                        <div className={classes.movie__titleContainer}>
                            <p className={classes.movie__title}>{title} ({createYear})</p>
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
                        </div>
                        <p className={classes.movie__genres}>
                            {
                                genres.map((genre, i, arr) => {
                                    if (i === arr.length - 1)
                                        return genre;
                                    return genre + ', ';
                                })
                            }
                        </p>
                        <p className={classes.movie__description}>{description}</p>
                    </div>
                </div>
                <div className={classes.movie__comments}>
                    <h1>Комментарии:</h1>
                    {
                        comments.length > 0 &&
                        comments.map(comment => <Comment key={comment.id} deleteComment={handleDeleteComment} {...comment} />)
                    }
                    {
                        comments.length === 0 &&
                        <h2>Комментариев нет</h2>
                    }
                    {
                        authorized && 
                        <form onSubmit={handleSubmit}>
                            <div className={classes.movie__commentForm}>
                                <h4>Оставьте свой комментарий:</h4>
                                <textarea 
                                    className={classes.movie__commentInput} 
                                    value={comment}
                                    onChange={handleChange}
                                    maxLength="255"
                                    placeholder="Комментарий"
                                />
                                <input type="submit" value="Оставить комментарий" />
                            </div>
                        </form>
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
    comment: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    rating: PropTypes.number.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleDeleteComment: PropTypes.func.isRequired,
    handleRatingChange: PropTypes.func.isRequired,
        
}

export default MoviePage;