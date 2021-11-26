import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./styles";

const Movie = ({image, title, createYear, openMoviePage, id}) => {
    const handleClick = () => {
        openMoviePage(id);
    }

    const classes = useStyles();
    return (
        <div className={classes.movie} onClick={handleClick}>
            <img className={classes.movie__poster} src={image} alt={title}></img>
            <p className={classes.movie__title}>{title}</p>
            <p className={classes.movie__year}>({createYear})</p>
        </div>
    );
}

Movie.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    createYear: PropTypes.string,
    openMoviePage: PropTypes.func,
    id: PropTypes.number,
}

export default Movie;