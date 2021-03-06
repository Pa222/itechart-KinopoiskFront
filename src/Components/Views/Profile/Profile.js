import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./styles";
import { Formik, Form, Field } from "formik";
import CreditCardContainer from "../../Containers/CreditCardContainer";
import AddCreditCardContainer from "../../Containers/AddCreditCardContainer";
import {ProfileValidationSchema} from '../../../Helpers/ValidationSchemes';

const Profile = props => {
    const classes = useStyles();
    const {
        name, 
        phoneNumber, 
        creditCards, 
        gender, 
        avatar, 
        showAddCreditCard, 
        message, 
        handleSubmit, 
        toggleAddCreditCardContainer, 
        handleFileUpload} = props;

    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper__profileContainer}>
                <div className={classes.profileContainer__avatarContainer}>
                    <img className={classes.profileContainer__avatar} src={avatar} alt="Avatar"></img>
                    <input
                        id="avatar"
                        className={classes.profileContainer__editButton} 
                        type="file" 
                        onChange={handleFileUpload}
                    />
                    <div className={classes.errorMessage}>
                        {message}
                    </div> 
                </div>
                <Formik
                    validationSchema={ProfileValidationSchema}
                    onSubmit={handleSubmit}
                    initialValues={{
                        name: name,
                        phoneNumber: phoneNumber,
                        gender: gender,                        
                    }}
                >
                    {({handleSubmit, handleBlur, errors, touched}) => (
                        <Form onSubmit={handleSubmit}>
                            <div className={classes.profileContainer__informationContainer}>
                                <div>
                                    <label className={classes.profileContainer__inforamtionKey}>??????: </label>
                                    <Field 
                                        className={classes.profileContainer__informationValue}
                                        name="name"
                                        type="text"
                                        autoComplete="off"
                                        onBlur={handleBlur('name')}
                                    />
                                    {
                                        errors.name && touched.name &&
                                        <div className={classes.errorMessage}>
                                            {errors.name}
                                        </div> 
                                    }
                                </div>
                                <div>
                                    <label className={classes.profileContainer__inforamtionKey}>?????????? ????????????????: </label>
                                    <Field 
                                        className={classes.profileContainer__informationValue} 
                                        name="phoneNumber"
                                        type="text"
                                        onBlur={handleBlur('phoneNumber')}
                                        component="input"
                                    />
                                    {
                                        errors.phoneNumber && touched.phoneNumber &&
                                        <div className={classes.errorMessage}>
                                            {errors.phoneNumber}
                                        </div> 
                                    }
                                </div>
                                <div>
                                    <label className={classes.profileContainer__inforamtionKey}>??????: </label>
                                    <Field 
                                        className={classes.profileContainer__informationValue}
                                        name="gender"
                                        onBlur={handleBlur('gender')}
                                        component="select"
                                    >
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                        <option value="Undefined">Undefined</option>
                                    </Field>
                                    {
                                        errors.gender && touched.gender &&
                                        <div className={classes.errorMessage}>
                                            {errors.gender}
                                        </div> 
                                    }
                                </div>
                                <div>
                                    <label className={classes.profileContainer__inforamtionKey}>?????????????????? ??????????: </label>
                                    <div className={classes.profileContainer__cardsContainer}>
                                        {
                                            creditCards.length !== 0 &&
                                            <div>
                                                {
                                                    creditCards.map((card, i) => <CreditCardContainer key={i} {...card} />)
                                                }
                                            </div>
                                        }
                                    </div>
                                    <Field 
                                        type="button" 
                                        value="???????????????????? ?????????? ??????????" 
                                        onClick={toggleAddCreditCardContainer}
                                        component="input"
                                    />
                                    {
                                        showAddCreditCard && 
                                        <AddCreditCardContainer/>
                                    }
                                    <Field 
                                        className={classes.profileContainer__editButton} 
                                        type="submit" 
                                        value="?????????????????? ??????????????????"
                                        component="input"
                                    />
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    creditCards: PropTypes.array.isRequired,
    gender: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    showAddCreditCard: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    toggleAddCreditCardContainer: PropTypes.func.isRequired,
    handleFileUpload: PropTypes.func.isRequired,
}

export default Profile;