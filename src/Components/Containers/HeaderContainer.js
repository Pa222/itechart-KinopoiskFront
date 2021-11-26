import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Header from '../Views/Header/Header';
import { cleanUser, movieRequest, moviesByTitleRequest } from "../../Actions";
import {faq, login, movie, profile, root} from '../../Enums/Routes';

const HeaderContainer = ({getMovie, getMoviesByTitle, moviesByTitle, logout: logoutProp, avatar, authorized}) => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [searchText, setSearchText] = useState('');
    const history = useHistory();

    useEffect(() => { getMoviesByTitle(searchText); }, [searchText]);

    const toggleMenu = () => setMenuOpened(!menuOpened);

    const handleSearchBoxChange = (e) => setSearchText(e.target.value); 

    const goToMoviePage = (id) => {
        history.push(movie + id);
        getMovie(id);
        setSearchText('');
    }

    const goToMainPage = () => history.push(root);

    const goToFaqPage = () => {
        history.push(faq);
        toggleMenu();
    }

    const goToLoginPage = () => {
        history.push(login);
        toggleMenu();
    }

    const goToProfilePage = () => {
        history.push(profile);
        toggleMenu();
    }

    const logout = () => {
        history.push(root);
        logoutProp();
        toggleMenu();
    }

    const headerProps = {
        menuOpened,
        moviesByTitle,
        avatar,
        authorized,
        toggleMenu,
        logout,
        goToMainPage,
        goToFaqPage,
        goToMoviePage,
        goToProfilePage,
        goToLoginPage,
        handleSearchBoxChange,
    }

    return (
        <Header {...headerProps}/>
    );
}

const mapStateToProps = (state) => {
    return {
        avatar: state.userState.avatar,
        authorized: state.userState.authorized,
        moviesByTitle: state.movieState.searchMovies,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovie: (id) => dispatch(movieRequest(id)),
        getMoviesByTitle: (title) => dispatch(moviesByTitleRequest(title)),
        logout: () => dispatch(cleanUser()),
    }
}

HeaderContainer.propTypes = {
    avatar: PropTypes.string.isRequired,
    authorized: PropTypes.bool.isRequired,
    moviesByTitle: PropTypes.array.isRequired,
    getMovie: PropTypes.func.isRequired,
    getMoviesByTitle: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);