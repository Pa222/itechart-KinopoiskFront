import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { useHistory } from "react-router";
import MoviePage from "../Views/MoviePage/MoviePage";
import { movieRequest } from "../../Actions";

const MoviePageContainer = (props) => {
    const history = useHistory();

    useEffect(() => {
        const id = history.location.pathname.match(/(\d+)/)[0];
        props.getMovie(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const moviePageProps = {
        title: props.title,
        image: props.image,
        createYear: props.createYear,
        description: props.description,
        genres: props.genres,
    }

    return(
        <MoviePage {...moviePageProps} />
    );
}

const mapStateToProps = (state) => {
    return {
        title: state.movieState.currentMovie.title,
        image: state.movieState.currentMovie.image,
        createYear: state.movieState.currentMovie.createYear,
        description: state.movieState.currentMovie.description,
        genres: state.movieState.currentMovie.genreMovies,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovie: id => dispatch(movieRequest(id)),
    }
}

MoviePageContainer.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    createYear: PropTypes.string,
    description: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    getMovie: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePageContainer);