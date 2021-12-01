import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./styles";
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';

const Movie = ({image, title, createYear, openMoviePage, id}) => {
    const handleClick = () => {
        openMoviePage(id);
    }

    const classes = useStyles();
    return (
        <Card className={classes.movie} onClick={handleClick}>
            <CardMedia className={classes.movie__poster} image={image} component="img"/>
            <CardContent>
                <Typography className={classes.movie__title}>{title}</Typography>
                <Typography className={classes.movie__year}>({createYear})</Typography>
            </CardContent>
        </Card>
    );
}

Movie.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createYear: PropTypes.string.isRequired,
    openMoviePage: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
}

export default Movie;