import React from "react";
import useStyles from "./styles";
import PropTypes from 'prop-types';
import {Card, CardContent, Typography} from '@material-ui/core';

const SearchResult = ({goToMoviePage, title, createYear, id}) => {

    const handleClick = () => {
        goToMoviePage(id);
    }

    const classes = useStyles();
    return (
        <Card className={classes.searchResult} onClick={handleClick}>
            <CardContent classes={{root: classes.p5}}>
                <Typography>{title} ({createYear})</Typography>
            </CardContent>
        </Card>
    );
}

SearchResult.propTypes = {
    goToMoviePage: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    createYear: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default SearchResult;