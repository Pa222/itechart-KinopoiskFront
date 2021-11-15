import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { useHistory } from "react-router";
import MoviePage from "../Views/MoviePage/MoviePage";
import { addCommentRequest, deleteCommentRequest, movieRequest } from "../../Actions";

const MoviePageContainer = (props) => {
    const [comment, setComment] = useState('');
    const history = useHistory();

    useEffect(() => {
        const id = history.location.pathname.match(/(\d+)/)[0];
        props.getMovie(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addComment({description: comment, movieId: props.id})
    }

    const deleteComment = (id) => {
        props.deleteComment({id, movieId: props.id})
    }

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const moviePageProps = {
        authorized: props.authorized,
        title: props.title,
        image: props.image,
        createYear: props.createYear,
        description: props.description,
        genres: props.genres,
        comments: props.comments,
        comment,
        handleSubmit,
        handleChange,
        deleteComment,
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovie: id => dispatch(movieRequest(id)),
        addComment: comment => dispatch(addCommentRequest(comment)),
        deleteComment: comment => dispatch(deleteCommentRequest(comment)),
    }
}

MoviePageContainer.propTypes = {
    authorized: PropTypes.bool,
    title: PropTypes.string,
    image: PropTypes.string,
    createYear: PropTypes.string,
    description: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    commets: PropTypes.arrayOf(PropTypes.object),
    getMovie: PropTypes.func,
    addComment: PropTypes.func,
    deleteComment: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePageContainer);