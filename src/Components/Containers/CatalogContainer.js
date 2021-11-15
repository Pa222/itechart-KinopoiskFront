import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";
import {connect} from 'react-redux';
import { moviesRequest } from "../../Actions";
import PropTypes from 'prop-types';
import Catalog from "../Views/Catalog/Catalog";

const CatalogContainer = (props) => {
    const [page, setPage] = useState(1);
    const history = useHistory();

    useEffect(() => {
        props.getMovies(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const changePage = async (e, pageNumber) => {
        props.getMovies(pageNumber);
        setPage(pageNumber);
    }

    const openMoviePage = (id) => {
        history.push(`movie/${id}`);
    }

    const catalogProps = {
        movies: props.movies,
        page,
        changePage,
        totalPages: props.totalPages,
        openMoviePage,
    };

    return (
        <Catalog {...catalogProps} />
    );
}

const mapStateToProps = state => {
    return {
        movies: state.movieState.movies,
        totalPages: state.movieState.totalPages,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMovies: page => dispatch(moviesRequest(page))
    }
}

CatalogContainer.propTypes = {
    getMovies: PropTypes.func,
    movies: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogContainer);