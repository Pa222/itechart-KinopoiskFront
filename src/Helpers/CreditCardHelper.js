import * as Yup from 'yup';
import * as issuersRegex from '../Enums/CardIssuerEnum';

const validationSchema = Yup.object().shape({
    number: Yup.string()
        .required('Необходим номер карты'),
    cardHolderName: Yup.string()
        .required('Необходимо имя держателя карты'),
    expiry: Yup.string()
        .min(4, 'Неверный срок действия карты')
        .required('Необходим срок действия карты'),
    cvc: Yup.string()
        .required('Необходим cvc-код'),
});

export const detectCardIssuer = (number) => {
    for(var key in issuersRegex) {
        if(issuersRegex[key].test(number)) {
            return key
        }
    }
    return null;
}

export const validateCard = (card) => {
    let e = '';
    
    validationSchema.validate(card)
        .catch(err => e = err.message);
    if (e !== '')
        return e;

    const issuer = detectCardIssuer(card.number);
    if (issuer === null)
        return 'Проверьте номер карты';
}