import React from 'react'
import PropTypes from 'prop-types';
import {Formik} from 'formik';
import useStyles from './styles';
import {LoginValidatationSchema} from '../../../Helpers/ValidationSchemes';

const Login = props => {
    const classes = useStyles();
    const {goToRegisterPage, handleChange, handleSubmit, email, password, errorMessage} = props;

    return (
        <div className={classes.wrapper}>
            <Formik
                validationSchema={LoginValidatationSchema}
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
                        {
                            props.errorMessage !== '' &&
                            <div className={classes.errorMessage}>
                                {errorMessage}
                            </div> 
                        }
                        <input 
                            className={[classes.loginFormContainer__input, classes.loginFormContainer__submitButton].join(" ")} 
                            type="submit" 
                            value="Войти"
                        />
                        <input
                            className={classes.loginFormContainer__registerButton}
                            type="button"
                            value="Нет аккаунта? Зарегистрироваться"
                            onClick={goToRegisterPage}
                        />
                    </div>
                </form>
            )}
            </Formik>
        </div>
    );
}

Login.propTypes = {
    goToRegisterPage: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
}

export default Login;