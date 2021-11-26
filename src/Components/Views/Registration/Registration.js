import React from "react";
import PropTypes from 'prop-types';
import {Formik} from 'formik';
import useStyles from "../Login/styles";
import {RegistrationValidatationSchema} from '../../../Helpers/ValidationSchemes';

const Registration = props => {
    const classes = useStyles();
    const {email, password, repeatPassword, name, message, handleChange, handleSubmit} = props;

    return (
        <div className={classes.wrapper}>
            <Formik
                validationSchema={RegistrationValidatationSchema}
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={handleSubmit}
            >
                {({handleChange, handleSubmit, handleBlur, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <div className={classes.wrapper__loginFormContainer}>
                        <input
                            className={classes.loginFormContainer__input}
                            type="text"
                            name="name"
                            placeholder="Имя"
                            value={name}
                            onBlur={handleBlur('name')}
                            onChange={(e) => {
                                handleChange(e);
                                props.handleChange(e);
                            }}
                        />
                        {
                            errors.name && touched.name &&
                            <div className={classes.errorMessage}>
                                {errors.name}
                            </div> 
                        }
                        <input
                            className={classes.loginFormContainer__input}
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            value={email}
                            onBlur={handleBlur('email')}
                            onChange={(e) => {
                                handleChange(e);
                                props.handleChange(e);
                            }}
                        />
                        {
                            errors.email && touched.email &&
                            <div className={classes.errorMessage}>
                                {errors.email}
                            </div> 
                        }
                        <input
                            className={classes.loginFormContainer__input}
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onBlur={handleBlur('password')}
                            onChange={(e) => {
                                handleChange(e);
                                props.handleChange(e);
                            }}
                        />
                        {
                            errors.password && touched.password &&
                            <div className={classes.errorMessage}>
                                {errors.password}
                            </div> 
                        }
                        <input
                            className={classes.loginFormContainer__input}
                            type="password"
                            name="repeatPassword"
                            placeholder="Repeat password"
                            value={repeatPassword}
                            onBlur={handleBlur('repeatPassword')}
                            onChange={(e) => {
                                handleChange(e);
                                props.handleChange(e);
                            }}
                        />
                        {
                            errors.repeatPassword && touched.repeatPassword &&
                            <div className={classes.errorMessage}>
                                {errors.repeatPassword}
                            </div> 
                        }
                        {
                            message !== '' &&
                            <div className={classes.errorMessage}>
                                {message}
                            </div> 
                        }
                        <input 
                            className={[classes.loginFormContainer__input, classes.loginFormContainer__submitButton].join(" ")} 
                            type="submit" 
                            value="Зарегистрироваться"
                        />
                    </div>
                </form>
            )}
            </Formik>
        </div>
    );
};

Registration.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    repeatPassword: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default Registration;