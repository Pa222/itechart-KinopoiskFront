import React from "react";
import useStyles from "./styles";

const SearchResult = (props) => {

    const handleClick = () => {
        props.goToMoviePage(props.id);
    }

    const classes = useStyles();
    return (
        <div className={classes.searchResult} onClick={handleClick}>
            <p>{props.title} ({props.createYear})</p>
        </div>
    );
}

export default SearchResult;