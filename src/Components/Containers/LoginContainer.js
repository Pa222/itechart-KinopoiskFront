import React, {useState} from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import KinopoiskApi from "../../Api/KinopoiskApi";
import PropTypes from 'prop-types';
import Login from "../Views/Login/Login";
import { userRequest } from "../../Actions";
import {register, root} from '../../Constants/Routes';
import { InfoMessages } from "../../Enums/Enums";

const LoginContainer = ({updateUser}) => {
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();

    const handleSubmit = async (values) => {
        if (!await KinopoiskApi.auth(values.email, values.password)){
            setErrorMessage(InfoMessages.IncorrectAuth);
            return;
        }
        updateUser();
        setErrorMessage("");
        history.push(root);
    }

    const goToRegisterPage = () => history.push(register);

    const loginProps = {
        goToRegisterPage,
        handleSubmit,
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
    updateUser: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(LoginContainer);