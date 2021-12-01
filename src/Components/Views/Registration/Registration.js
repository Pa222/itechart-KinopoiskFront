import React from "react";
import PropTypes from 'prop-types';
import {Formik, Form, Field} from 'formik';
import useStyles from "../Login/styles";
import {RegistrationValidatationSchema} from '../../../Helpers/ValidationSchemes';

const Registration = ({message, handleSubmit}) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <Formik
                validationSchema={RegistrationValidatationSchema}
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    repeatPassword: '',
                }}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, handleBlur, errors, touched}) => (
                <Form onSubmit={handleSubmit}>
                    <div className={classes.wrapper__loginFormContainer}>
                        <Field
                            className={classes.loginFormContainer__input}
                            type="text"
                            name="name"
                            placeholder="Имя"
                            onBlur={handleBlur('name')}
                            component="input"
                        />
                        {
                            errors.name && touched.name &&
                            <div className={classes.errorMessage}>
                                {errors.name}
                            </div> 
                        }
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
                        <Field
                            className={classes.loginFormContainer__input}
                            type="password"
                            name="repeatPassword"
                            placeholder="Repeat password"
                            onBlur={handleBlur('repeatPassword')}
                            component="input"
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
                        <Field 
                            className={[classes.loginFormContainer__input, classes.loginFormContainer__submitButton].join(" ")} 
                            type="submit" 
                            value="Зарегистрироваться"
                            component="input"
                        />
                    </div>
                </Form>
            )}
            </Formik>
        </div>
    );
};

Registration.propTypes = {
    message: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default Registration;