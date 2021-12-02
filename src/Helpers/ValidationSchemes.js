import * as Yup from 'yup';
import { EMAIL, PHONE_NUMBER } from '../Constants/Regex';
import { InfoMessages, FieldNames, Sex } from '../Enums/Enums';


export const CreditCardValidationSchema = Yup.object().shape({
    number: Yup.string()
        .required(InfoMessages.CardNumberRequierd),
    cardHolderName: Yup.string()
        .required(InfoMessages.CardHolderRequired),
    expiry: Yup.string()
        .min(4, InfoMessages.IncorrectExpiry)
        .required(InfoMessages.ExpiryRequired),
    cvc: Yup.string()
        .required(InfoMessages.CvcRequired),
});

export const LoginValidatationSchema = Yup.object().shape({
    email: Yup.string()
        .min(6, InfoMessages.MinimumLength6)
        .matches(EMAIL, InfoMessages.IncorrectEmail)
        .required(InfoMessages.Required),
    password: Yup.string()
        .min(6, InfoMessages.MinimumLength6)
        .required(),
})

export const RegistrationValidatationSchema = Yup.object().shape({
    email: Yup.string()
        .min(6, InfoMessages.MinimumLength6)
        .matches(EMAIL, InfoMessages.IncorrectEmail)
        .required(InfoMessages.Required),
    password: Yup.string()
        .min(6, InfoMessages.MinimumLength6)
        .required(InfoMessages.Required),
    repeatPassword: Yup.string()
        .min(6, InfoMessages.MinimumLength6)
        .required(InfoMessages.Required)
        .oneOf([Yup.ref(FieldNames.Password), null], InfoMessages.PasswordsMustMatch),
    name: Yup.string()
        .max(100, InfoMessages.FieldTooLong)
        .required(InfoMessages.Required),
})

export const ProfileValidationSchema = Yup.object().shape({
    name: Yup.string()
        .max(100, InfoMessages.FieldTooLong)
        .required(InfoMessages.Required),
    phoneNumber: Yup.string()
        .matches(PHONE_NUMBER, InfoMessages.IncorrectPhoneNumber)
        .nullable(),
    gender: Yup.string()
        .oneOf([Sex.Male, Sex.Female, Sex.Undefined])
});
