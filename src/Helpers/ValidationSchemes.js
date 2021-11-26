import * as Yup from 'yup';
import { EMAIL } from '../Enums/Regex';
import { CARD_NUMBER_REQUIRED, CVC_REQUIRED, EXPIRY_REQIURED, INCORRECT_EMAIL, INCORRECT_EXPITY, MINIMUM_LENGTH_6, PASSWORD, PASSWORDS_MUST_MATCH, REQUIRED, FIELD_TOO_LONG } from '../Enums/StringConsts';


export const CreditCardValidationSchema = Yup.object().shape({
    number: Yup.string()
        .required(CARD_NUMBER_REQUIRED),
    cardHolderName: Yup.string()
        .required(CARD_NUMBER_REQUIRED),
    expiry: Yup.string()
        .min(4, INCORRECT_EXPITY)
        .required(EXPIRY_REQIURED),
    cvc: Yup.string()
        .required(CVC_REQUIRED),
});

export const LoginValidatationSchema = Yup.object().shape({
    email: Yup.string()
        .min(6, MINIMUM_LENGTH_6)
        .matches(EMAIL, INCORRECT_EMAIL)
        .required(REQUIRED),
    password: Yup.string()
        .min(6, MINIMUM_LENGTH_6)
        .required(),
})

export const RegistrationValidatationSchema = Yup.object().shape({
    email: Yup.string()
        .min(6, MINIMUM_LENGTH_6)
        .matches(EMAIL, INCORRECT_EMAIL)
        .required(REQUIRED),
    password: Yup.string()
        .min(6, MINIMUM_LENGTH_6)
        .required(REQUIRED),
    repeatPassword: Yup.string()
        .min(6, MINIMUM_LENGTH_6)
        .required(REQUIRED)
        .oneOf([Yup.ref(PASSWORD), null], PASSWORDS_MUST_MATCH),
    name: Yup.string()
        .max(100, FIELD_TOO_LONG)
        .required(REQUIRED),
})