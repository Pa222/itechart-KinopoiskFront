import React from 'react'
import PropTypes from 'prop-types';
import {Formik, Form, Field} from 'formik';
import useStyles from './styles';
import {LoginValidatationSchema} from '../../../Helpers/ValidationSchemes';

const Login = props => {
    const classes = useStyles();
    const {goToRegisterPage, handleSubmit, errorMessage} = props;

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
                {({handleSubmit, handleBlur, errors, touched}) => (
                <Form onSubmit={handleSubmit}>
                    <div className={classes.wrapper__loginFormContainer}>
                        <Field
                            className={classes.loginFormContainer__input}
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            onBlur={handleBlur('email')}
                            component="input"
                        />
                        {
                            errors.email && touched.email &&
                            <div className={classes.errorMessage}>
                                {errors.email}
                            </div> 
                        }
                        <Field
                            className={classes.loginFormContainer__input}
                            type="password"
                            name="password"
                            placeholder="Password"
                            onBlur={handleBlur('password')}
                            component="input"
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
                        <Field 
                            className={[classes.loginFormContainer__input, classes.loginFormContainer__submitButton].join(" ")} 
                            type="submit" 
                            value="Войти"
                            component="input"
                        />
                        <Field
                            className={classes.loginFormContainer__registerButton}
                            type="button"
                            value="Нет аккаунта? Зарегистрироваться"
                            onClick={goToRegisterPage}
                            component="input"
                        />
                    </div>
                </Form>
            )}
            </Formik>
        </div>
    );
}

Login.propTypes = {
    goToRegisterPage: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    errorMessage: PropTypes.string.isRequired,
}

export default Login;