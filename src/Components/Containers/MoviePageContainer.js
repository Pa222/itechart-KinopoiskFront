import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { useHistory } from "react-router";
import MoviePage from "../Views/MoviePage/MoviePage";
import { addCommentRequest, deleteCommentRequest, movieRequest, updateRatingRequest } from "../../Actions";
import { NUMBERS } from "../../Enums/Regex";

const MoviePageContainer = props => {
    const [comment, setComment] = useState('');
    const history = useHistory();
    const {authorized, id, title, image, createYear, description, genres, comments, rating, getMovie, addComment, deleteComment, updateRating} = props;

    useEffect(() => {
        const id = history.location.pathname.match(NUMBERS);
        if (id !== null)
            getMovie(id[0]);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setComment('');
        addComment({description: comment, movieId: id})
    }
    
    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const handleDeleteComment = (id) => {
        deleteComment({id, movieId: id})
    }

    const handleRatingChange = (e) => {
        updateRating({value: e.target.value, movieId: id})
    }

    const moviePageProps = {
        authorized,
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
        handleRatingChange,
    }

    return(
        <MoviePage {...moviePageProps} />
    );
}

const mapStateToProps = (state) => {
    return {
        authorized: state.userState.authorized,
        id: state.movieState.currentMovie.id,
        title: state.movieState.currentMovie.title,
        image: state.movieState.currentMovie.image,
        createYear: state.movieState.currentMovie.createYear,
        description: state.movieState.currentMovie.description,
        genres: state.movieState.currentMovie.genreMovies,
        comments: state.movieState.currentMovie.comments,
        rating: state.movieState.currentMovie.rating,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovie: id => dispatch(movieRequest(id)),
        addComment: comment => dispatch(addCommentRequest(comment)),
        deleteComment: comment => dispatch(deleteCommentRequest(comment)),
        updateRating: rating => dispatch(updateRatingRequest(rating)),
    }
}

MoviePageContainer.propTypes = {
    authorized: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    createYear: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    commets: PropTypes.arrayOf(PropTypes.object).isRequired,
    rating: PropTypes.number.isRequired,
    getMovie: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    updateRating: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePageContainer);