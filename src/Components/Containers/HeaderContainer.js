import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import KinopoiskApi from "../../Api/KinopoiskApi";
import Header from '../Views/Header/Header';
import { cleanUser, movieRequest } from "../../Actions";
import {faq, login, movie, profile, root} from '../../Enums/Routes';

const HeaderContainer = ({getMovie, logout: logoutProp, avatar, authorized}) => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const history = useHistory();

    useEffect(() => {
        (async () => {
            let response = await KinopoiskApi.getMoviesByTitle(searchText);
            if (response === null){
                return;
            }
            setSearchResults(response.slice(0, 5));
        })();
    }, [searchText]);

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
        searchResults,
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovie: (id) => dispatch(movieRequest(id)),
        logout: () => dispatch(cleanUser()),
    }
}

HeaderContainer.propTypes = {
    avatar: PropTypes.string,
    authorized: PropTypes.bool,
    getMovie: PropTypes.func,
    logout: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);