import React, {useState} from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import KinopoiskApi from "../../Api/KinopoiskApi";
import PropTypes from 'prop-types';
import Login from "../Views/Login/Login";
import { userRequest } from "../../Actions";

const LoginContainer = ({updateUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        name === "email" && setEmail(value);
        name === "password" && setPassword(value);
    }

    const handleSubmit = async () => {
        if (!await KinopoiskApi.auth(email, password)){
            setErrorMessage("Неверные логин или пароль");
            return;
        }
        updateUser();
        setErrorMessage("");
        history.push("/");
    }

    const goToRegisterPage = () => history.push("/register");

    const loginProps = {
        goToRegisterPage,
        handleChange,
        handleSubmit,
        email,
        password,
        errorMessage,
    }

    return (
        <Login {...loginProps} />
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: () => dispatch(userRequest()),
    }
}

LoginContainer.propTypes = {
    updateUser: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(LoginContainer);