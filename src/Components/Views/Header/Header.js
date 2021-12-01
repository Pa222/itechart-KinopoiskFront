import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./styles";
import SearchResult from "./SearchResult/SearchResult";
import ListItemButton from '@mui/material/ListItemButton';
import {withStyles} from '@material-ui/core/styles';
import { TextField, Typography, Avatar, List, ListItem } from "@material-ui/core";

const Header = props => {
    const classes = useStyles();
    const {menuOpened,
        moviesByTitle,
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

    const WhiteTextTypography = withStyles({
        root: {
            color: "#FFFFFF"
        }
        })(Typography);

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Typography className={classes.header__title} onClick={goToMainPage}>КиноПоиск</Typography>
                <div className={classes.header__searchBoxContainer}>
                    <TextField 
                        className={classes.header__searchBox} 
                        placeholder="Поиск"
                        autoComplete="off"
                        onChange={handleSearchBoxChange}
                        InputProps={{
                            classes: {
                                input: classes.header__searchBoxText,
                            }
                        }}
                    />
                    <div className={classes.header__searchResults}>
                        {
                            moviesByTitle !== [] &&
                            moviesByTitle.map(result => {
                                return (
                                    <SearchResult key={result.id} goToMoviePage={goToMoviePage} {...result} />
                                );
                            })
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <Avatar className={classes.header__userImage} src={avatar} alt="User" onClick={toggleMenu}/>
                    </div>
                    {
                        menuOpened && !authorized &&
                        <List className={classes.header__menu}>
                            <ListItem classes={{root: classes.p0}}>
                                <ListItemButton onClick={goToFaqPage}>
                                    <WhiteTextTypography>Faq</WhiteTextTypography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem classes={{root: classes.p0}}>
                                <ListItemButton onClick={goToLoginPage}>
                                    <WhiteTextTypography>Login</WhiteTextTypography>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    }
                    {
                        menuOpened && authorized &&
                        <List className={classes.header__menu}>
                            <ListItem classes={{root: classes.p0}}>
                                <ListItemButton onClick={goToProfilePage}>
                                    <WhiteTextTypography>Профиль</WhiteTextTypography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem classes={{root: classes.p0}}>
                                <ListItemButton onClick={goToFaqPage}>
                                    <WhiteTextTypography>Faq</WhiteTextTypography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem classes={{root: classes.p0}}>
                                <ListItemButton onClick={logout}>
                                    <WhiteTextTypography>Выйти</WhiteTextTypography>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    }
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {
    menuOpened: PropTypes.bool.isRequired,
    moviesByTitle: PropTypes.array.isRequired,
    avatar: PropTypes.string.isRequired,
    authorized: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    goToMainPage: PropTypes.func.isRequired,
    goToFaqPage: PropTypes.func.isRequired,
    goToMoviePage: PropTypes.func.isRequired,
    goToLoginPage: PropTypes.func.isRequired,
    goToProfilePage: PropTypes.func.isRequired,
    handleSearchBoxChange: PropTypes.func.isRequired,
}

export default Header;