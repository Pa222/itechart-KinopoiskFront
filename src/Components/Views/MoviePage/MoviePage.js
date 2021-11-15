import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./styles";
import Comment from "../Comment/Comment";

const MoviePage = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.movie}>
                <div className={classes.movie__main}>
                    <img className={classes.movie__poster} src={props.image} alt="poster"></img>
                    <div className={classes.movie__info}>
                        <p className={classes.movie__title}>{props.title} ({props.createYear})</p>
                        <p className={classes.movie__genres}>
                            {
                                props.genres.map((genre, i, arr) => {
                                    if (i === arr.length - 1)
                                        return genre;
                                    return genre + ', ';
                                })
                            }
                        </p>
                        <p className={classes.movie__description}>{props.description}</p>
                    </div>
                </div>
                <div className={classes.movie__comments}>
                    <h1>Комментарии:</h1>
                    {
                        props.comments.length > 0 &&
                        props.comments.map(comment => <Comment key={comment.id} deleteComment={props.deleteComment} {...comment} />)
                    }
                    {
                        props.comments.length === 0 &&
                        <h2>Комментариев нет</h2>
                    }
                    {
                        props.authorized && 
                        <form onSubmit={props.handleSubmit}>
                            <div className={classes.movie__commentForm}>
                                <h4>Оставьте свой комментарий:</h4>
                                <textarea 
                                    className={classes.movie__commentInput} 
                                    value={props.comment}
                                    onChange={props.handleChange}
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
    authorized: PropTypes.bool,
    title: PropTypes.string,
    image: PropTypes.string,
    createYear: PropTypes.string,
    description: PropTypes.string,
    comment: PropTypes.string,
    loading: PropTypes.bool,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    deleteComment: PropTypes.func,
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default MoviePage;