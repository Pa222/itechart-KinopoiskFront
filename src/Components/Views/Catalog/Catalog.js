import React from "react";
import PropTypes from 'prop-types'
import { Pagination } from "@mui/material";
import { ClipLoader } from 'react-spinners';
import useStyles from "./styles";
import Movie from "../Movie/Movie";

const Catalog = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper__catalogContainer}>
                <div className={classes.wrapper__catalog}>
                    {
                        props.movies.length > 0 &&
                        props.movies.map(movie => 
                            <Movie 
                                key={movie.id} 
                                openMoviePage={props.openMoviePage} 
                                {...movie}
                            />)
                    }
                    {
                        props.movies.length === 0 &&
                        <ClipLoader color="gray" />
                    }
                </div>
                <Pagination 
                    className={classes.wrapper__pagination}
                    count={props.totalPages} 
                    shape="rounded"
                    page={props.page}
                    onChange={props.changePage}
                />
            </div>
        
        </div>
    );
}

Catalog.propTypes = {
    isLoading: PropTypes.bool,
    movies: PropTypes.array,
    page: PropTypes.number,
    totalPages: PropTypes.number,
    changePage: PropTypes.func,
}

export default Catalog;