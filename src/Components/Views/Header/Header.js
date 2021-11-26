import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./styles";
import SearchResult from "./SearchResult/SearchResult";

const Header = props => {
    const classes = useStyles();
    const {menuOpened,
        searchResults,
        avatar,
        authorized,
        toggleMenu,
        logout,
        goToMainPage,
        goToFaqPage,
        goToMoviePage,
        goToLoginPage,
        goToProfilePage,
        handleSearchBoxChange} = props;

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <div className={classes.header__title} onClick={goToMainPage}>
                    <p>КиноПоиск</p>
                </div>
                <div className={classes.header__searchBoxContainer}>
                    <input 
                        className={classes.header__searchBox} 
                        type="text" 
                        name="searchbox"
                        placeholder="Поиск"
                        autoComplete="off"
                        onChange={handleSearchBoxChange}
                    ></input>
                    <div className={classes.header__searchResults}>
                        {
                            searchResults !== [] &&
                            searchResults.map(result => {
                                return (
                                    <SearchResult key={result.id} goToMoviePage={goToMoviePage} {...result} />
                                );
                            })
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <img className={classes.header__userImage} src={avatar} alt="User" onClick={toggleMenu}></img>
                    </div>
                    {
                        menuOpened && !authorized &&
                            <div className={classes.header__menu}>
                                <input className={classes.header__menuItem} type="button" onClick={goToFaqPage} value="FAQ"></input>
                                <input className={classes.header__menuItem} type="button" value="Войти" onClick={goToLoginPage}></input>
                            </div>
                    }
                    {
                        menuOpened && authorized &&
                        <div className={classes.header__menu}>
                            <input className={classes.header__menuItem} type="button" onClick={goToProfilePage} value="Профиль"></input>
                            <input className={classes.header__menuItem} type="button" onClick={goToFaqPage} value="FAQ"></input>
                            <input className={classes.header__menuItem} type="button" value="Выйти" onClick={logout}></input>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {
    menuOpened: PropTypes.bool,
    searchResults: PropTypes.array,
    avatar: PropTypes.string,
    authorized: PropTypes.bool,
    toggleMenu: PropTypes.func,
    logout: PropTypes.func,
    goToMainPage: PropTypes.func,
    goToFaqPage: PropTypes.func,
    goToMoviePage: PropTypes.func,
    goToLoginPage: PropTypes.func,
    goToProfilePage: PropTypes.func,
    handleSearchBoxChange: PropTypes.func,
}

export default Header;