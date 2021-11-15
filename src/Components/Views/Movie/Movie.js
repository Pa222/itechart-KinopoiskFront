import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./styles";

const Movie = (props) => {
    const handleClick = () => {
        props.openMoviePage(props.id);
    }

    const classes = useStyles();
    return (
        <div className={classes.movie} onClick={handleClick}>
            <img className={classes.movie__poster} src={props.image} alt={props.title}></img>
            <p className={classes.movie__title}>{props.title}</p>
            <p className={classes.movie__year}>({props.createYear})</p>
        </div>
    );
}

Movie.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    createYear: PropTypes.string,
    openMoviePage: PropTypes.func,
}

export default Movie;