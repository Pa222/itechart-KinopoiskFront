import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./styles";
import * as Yup from 'yup';
import { Formik } from "formik";
import CreditCardContainer from "../../Containers/CreditCardContainer";
import AddCreditCardContainer from "../../Containers/AddCreditCardContainer";

const phoneNumberRegex = /^\+\d[\d()]{4,14}\d$/;

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .max(100, 'Слишком длинное имя')
        .required('Обязательно'),
    phoneNumber: Yup.string()
        .matches(phoneNumberRegex, 'Проверьте введенный номер телефона')
        .nullable(),
    gender: Yup.string()
        .oneOf(["Male", "Female", "Undefined"])
});

const Profile = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper__profileContainer}>
                <div className={classes.profileContainer__avatarContainer}>
                    <img className={classes.profileContainer__avatar} src={props.avatar} alt="Avatar"></img>
                    <input
                        id="avatar"
                        className={classes.profileContainer__editButton} 
                        type="file" 
                        onChange={props.handleFileUpload}
                    />
                    <input 
                        className={classes.profileContainer__editButton} 
                        type="button" 
                        value="Сохранить изменения"
                        onClick={props.saveChanges}
                    />
                    <div className={classes.errorMessage}>
                        {props.message}
                    </div> 
                </div>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                        name: props.name,
                        phoneNumber: props.phoneNumber,
                        cardNumber: props.cardNumber,
                        gender: props.gender,                        
                }}>
                    {({handleChange, handleBlur, errors, touched}) => (
                        <form>
                            <div className={classes.profileContainer__informationContainer}>
                                <div>
                                    <label className={classes.profileContainer__inforamtionKey}>Имя: </label>
                                    <input 
                                        className={classes.profileContainer__informationValue}
                                        name="name"
                                        type="text" 
                                        value={props.name}
                                        onBlur={handleBlur('name')}
                                        onChange={(e) => {
                                            handleChange(e);
                                            props.handleChange(e);
                                        }}
                                    ></input>
                                    {
                                        errors.name && touched.name &&
                                        <div className={classes.errorMessage}>
                                            {errors.name}
                                        </div> 
                                    }
                                </div>
                                <div>
                                    <label className={classes.profileContainer__inforamtionKey}>Номер телефона: </label>
                                    <input 
                                        className={classes.profileContainer__informationValue} 
                                        name="phoneNumber"
                                        type="text"
                                        value={props.phoneNumber}
                                        onBlur={handleBlur('phoneNumber')}
                                        onChange={(e) => {
                                            handleChange(e);
                                            props.handleChange(e);
                                        }}
                                    ></input>
                                    {
                                        errors.phoneNumber && touched.phoneNumber &&
                                        <div className={classes.errorMessage}>
                                            {errors.phoneNumber}
                                        </div> 
                                    }
                                </div>
                                <div>
                                    <label className={classes.profileContainer__inforamtionKey}>Пол: </label>
                                    <select 
                                        className={classes.profileContainer__informationValue}
                                        name="gender"
                                        value={props.gender}
                                        onBlur={handleBlur('gender')}
                                        onChange={(e) => {
                                            handleChange(e);
                                            props.handleChange(e);
                                        }}
                                    >
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                        <option value="Undefined">Undefined</option>
                                    </select>
                                    {
                                        errors.gender && touched.gender &&
                                        <div className={classes.errorMessage}>
                                            {errors.gender}
                                        </div> 
                                    }
                                </div>
                                <div>
                                    <label className={classes.profileContainer__inforamtionKey}>Кредитные карты: </label>
                                    <div className={classes.profileContainer__cardsContainer}>
                                        {
                                            props.creditCards.length !== 0 &&
                                            <div>
                                                {
                                                    props.creditCards.map((card, i) => <CreditCardContainer key={i} {...card} />)
                                                }
                                            </div>
                                        }
                                    </div>
                                    <input type="button" value="Добавление новой карты" onClick={props.toggleAddCreditCardContainer}></input>
                                    {
                                        props.showAddCreditCard && 
                                        <AddCreditCardContainer/>
                                    }
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

Profile.propTypes = {
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    creditCards: PropTypes.array,
    gender: PropTypes.string,
    avatar: PropTypes.string,
    showAddCreditCard: PropTypes.bool,
    message: PropTypes.string,
    saveChanges: PropTypes.func,
    handleChange: PropTypes.func,
    toggleAddCreditCardContainer: PropTypes.func,
    handleFileUpload: PropTypes.func,
}

export default Profile;