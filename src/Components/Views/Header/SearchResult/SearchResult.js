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
    goToMoviePage: PropTypes.func,
    title: PropTypes.string,
    createYear: PropTypes.string,
    id: PropTypes.number,
}

export default SearchResult;