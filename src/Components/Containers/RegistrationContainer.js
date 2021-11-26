import React, {useState} from 'react';
import KinopoiskApi from '../../Api/KinopoiskApi';
import { EMAIL, NAME, PASSWORD, REPEAT_PASSWORD, REGISTRATION_SUCCESS, REGISTRATION_FAIL } from '../../Enums/StringConsts';
import Registration from '../Views/Registration/Registration';

const RegistrationContainer = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        name === NAME && setName(value);
        name === EMAIL && setEmail(value);
        name === PASSWORD && setPassword(value);
        name === REPEAT_PASSWORD && setRepeatPassword(value);
    }

    const handleSubmit = async () => {
        if (await KinopoiskApi.register({email, password, name})){
            setMessage(REGISTRATION_SUCCESS);
            return
        }
        setMessage(REGISTRATION_FAIL);
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

export default RegistrationContainer;