import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./styles";
import SearchResult from "./SearchResult/SearchResult";

const Header = (props) => {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <div className={classes.header__title} onClick={props.goToMainPage}>
                    <p>КиноПоиск</p>
                </div>
                <div className={classes.header__searchBoxContainer}>
                    <input 
                        className={classes.header__searchBox} 
                        type="text" 
                        name="searchbox"
                        placeholder="Поиск"
                        autoComplete="off"
                        onChange={props.handleSearchBoxChange}
                    ></input>
                    <div className={classes.header__searchResults}>
                        {
                            props.searchResults !== [] &&
                            props.searchResults.map(result => {
                                return (
                                    <SearchResult key={result.id} goToMoviePage={props.goToMoviePage} {...result} />
                                );
                            })
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <img className={classes.header__userImage} src={props.avatar} alt="User" onClick={props.toggleMenu}></img>
                    </div>
                    {
                        props.menuOpened && !props.authorized &&
                            <div className={classes.header__menu}>
                                <input className={classes.header__menuItem} type="button" onClick={props.goToFaqPage} value="FAQ"></input>
                                <input className={classes.header__menuItem} type="button" value="Войти" onClick={props.goToLoginPage}></input>
                            </div>
                    }
                    {
                        props.menuOpened && props.authorized &&
                        <div className={classes.header__menu}>
                            <input className={classes.header__menuItem} type="button" onClick={props.goToProfilePage} value="Профиль"></input>
                            <input className={classes.header__menuItem} type="button" onClick={props.goToFaqPage} value="FAQ"></input>
                            <input className={classes.header__menuItem} type="button" value="Выйти" onClick={props.logout}></input>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {
    menuOpened: PropTypes.bool,
    searchText: PropTypes.string,
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