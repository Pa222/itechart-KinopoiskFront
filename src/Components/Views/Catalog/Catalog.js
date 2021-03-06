import React from "react";
import PropTypes from 'prop-types'
import { Pagination } from "@mui/material";
import { ClipLoader } from 'react-spinners';
import useStyles from "./styles";
import Movie from "../Movie/Movie";
import ChatContainer from '../../Containers/ChatContainer';
import { UserRoles } from "../../../Enums/Enums";

const Catalog = (props) => {
    const classes = useStyles();
    const {movies, page, totalPages, changePage, userRole, openMoviePage} = props;

    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper__catalogContainer}>
                <div className={classes.wrapper__catalog}>
                    {
                        movies.length > 0 &&
                        movies.map(movie => 
                            <Movie 
                                key={movie.id} 
                                openMoviePage={openMoviePage} 
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
                    count={totalPages} 
                    shape="rounded"
                    page={page}
                    onChange={changePage}
                />
            </div>
            {
                userRole !== UserRoles.Admin &&
                <ChatContainer/>
            }
        </div>
    );
}

Catalog.propTypes = {
    openMoviePage: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired,
    userRole: PropTypes.string.isRequired,
}

export default Catalog;