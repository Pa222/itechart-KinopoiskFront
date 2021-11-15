import React from "react";
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import {Formik} from 'formik';
import useStyles from "../Login/styles";

const validatationSchema = Yup.object().shape({
    email: Yup.string()
        .min(6, 'Минимальная длина: 6 символов')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Введите настоящий e-mail')
        .required('Обязательно'),
    password: Yup.string()
        .min(6, 'Минимальная длина: 6 символоа')
        .required('Обязательно'),
    repeatPassword: Yup.string()
        .min(6, 'Минимальная длина: 6 символоа')
        .required('Обязательно')
        .oneOf([Yup.ref('password'), null], 'Пароли дожны совпадать'),
    name: Yup.string()
        .max(100, 'Слишком длинное имя')
        .required('Обязательно'),
})

const Registration = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <Formik
                validationSchema={validatationSchema}
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={props.handleSubmit}
            >
                {({handleChange, handleSubmit, handleBlur, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <div className={classes.wrapper__loginFormContainer}>
                        <input
                            className={classes.loginFormContainer__input}
                            type="text"
                            name="name"
                            placeholder="Имя"
                            value={props.name}
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
                            value={props.email}
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
                            value={props.password}
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
                            value={props.repeatPassword}
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
                            props.message !== '' &&
                            <div className={classes.errorMessage}>
                                {props.message}
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
    email: PropTypes.string,
    password: PropTypes.string,
    repeatPassword: PropTypes.string,
    name: PropTypes.string,
    message: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
}

export default Registration;