import React, {useState} from 'react';
import KinopoiskApi from '../../Api/KinopoiskApi';
import { REGISTRATION_SUCCESS, REGISTRATION_FAIL } from '../../Enums/Constants';
import Registration from '../Views/Registration/Registration';

const RegistrationContainer = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (values) => {
        const {email, password, name} = values;
        if (await KinopoiskApi.register({email, password, name})){
            setMessage(REGISTRATION_SUCCESS);
            return
        }
        setMessage(REGISTRATION_FAIL);
    }

    const registrationProps = {
        message,
        handleSubmit,
    }

    return(
        <Registration {...registrationProps} />
    );
};

export default RegistrationContainer;