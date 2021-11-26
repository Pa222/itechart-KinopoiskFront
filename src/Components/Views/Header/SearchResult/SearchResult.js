import React from "react";
import useStyles from "./styles";
import PropTypes from 'prop-types';

const SearchResult = ({goToMoviePage, title, createYear, id}) => {

    const handleClick = () => {
        goToMoviePage(id);
    }

    const classes = useStyles();
    return (
        <div className={classes.searchResult} onClick={handleClick}>
            <p>{title} ({createYear})</p>
        </div>
    );
}

SearchResult.propTypes = {
    goToMoviePage: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    createYear: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default SearchResult;