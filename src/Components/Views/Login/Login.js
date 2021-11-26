import React from 'react'
import PropTypes from 'prop-types';
import {Formik} from 'formik';
import * as Yup from 'yup';
import useStyles from './styles';

const validatationSchema = Yup.object().shape({
    email: Yup.string()
        .min(6, 'Минимальная длина: 6 символов')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Введите настоящий e-mail')
        .required('Обязательно'),
    password: Yup.string()
        .min(6, 'Минимальная длина: 6 символоа')
        .required(),
})

const Login = props => {
    const classes = useStyles();
    const {goToRegisterPage, handleChange, handleSubmit, email, password, errorMessage} = props;

    return (
        <div className={classes.wrapper}>
            <Formik
                validationSchema={validatationSchema}
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
    goToRegisterPage: PropTypes.func,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    email: PropTypes.string,
    password: PropTypes.string,
    errorMessage: PropTypes.string,
}

export default Login;