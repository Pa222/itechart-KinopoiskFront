import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./styles";

const MoviePage = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.movie}>
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
        </div>
    );
}

MoviePage.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    createYear: PropTypes.string,
    description: PropTypes.string,
    loading: PropTypes.bool,
}

export default MoviePage;