import React, {useState} from 'react';
import KinopoiskApi from '../../Api/KinopoiskApi';
import Registration from '../Views/Registration/Registration';
import { InfoMessages } from '../../Enums/Enums';

const RegistrationContainer = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (values) => {
        const {email, password, name} = values;
        if (await KinopoiskApi.register({email, password, name})){
            setMessage(InfoMessages.RegistrationSuccess);
            return
        }
        setMessage(InfoMessages.RegistrationFail);
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