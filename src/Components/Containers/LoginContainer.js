import React, {useState} from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import KinopoiskApi from "../../Api/KinopoiskApi";
import PropTypes from 'prop-types';
import Login from "../Views/Login/Login";
import { userRequest } from "../../Actions";
import {register, root} from '../../Enums/Routes';
import { EMAIL, INCORRECT_AUTH, PASSWORD } from "../../Enums/StringConsts";

const LoginContainer = ({updateUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        name === EMAIL && setEmail(value);
        name === PASSWORD && setPassword(value);
    }

    const handleSubmit = async () => {
        if (!await KinopoiskApi.auth(email, password)){
            setErrorMessage(INCORRECT_AUTH);
            return;
        }
        updateUser();
        setErrorMessage("");
        history.push(root);
    }

    const goToRegisterPage = () => history.push(register);

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