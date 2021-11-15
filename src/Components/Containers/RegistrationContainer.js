import React, {useState} from 'react';
import {connect} from 'react-redux';
import { userRequest } from '../../Actions';
import {useHistory} from 'react-router-dom';
import KinopoiskApi from '../../Api/KinopoiskApi';
import Registration from '../Views/Registration/Registration';

const RegistrationContainer = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory(); 

    const handleChange = (e) => {
        const { name, value } = e.target;

        name === "name" && setName(value);
        name === "email" && setEmail(value);
        name === "password" && setPassword(value);
        name === "repeatPassword" && setRepeatPassword(value);
    }

    const handleSubmit = async () => {
        if (await KinopoiskApi.register({email, password, name})){
            setMessage("Регистрация удалась. Перейдите на страницу авторизации, чтобы войти.")
            return
        }
        setMessage("Регистрация не удалась. Пользователь с таким e-mail уже существует.");
    }

    const registrationProps = {
        email,
        password,
        repeatPassword,
        name,
        message,
        handleChange,
        handleSubmit,
    }

    return(
        <Registration {...registrationProps} />
    );
};

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => dispatch(userRequest()),
    }
}

export default connect(null, mapDispatchToProps)(RegistrationContainer);