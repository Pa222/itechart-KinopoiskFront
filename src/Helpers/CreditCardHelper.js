import * as issuersRegex from '../Constants/CardIssuerRegex';
import {CreditCardValidationSchema} from '../Helpers/ValidationSchemes';
import {InfoMessages} from '../Enums/Enums';

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
    
    CreditCardValidationSchema.validate(card)
        .catch(err => e = err.message);
    if (e !== '')
        return e;

    const issuer = detectCardIssuer(card.number);
    if (issuer === null)
        return InfoMessages.IncorrectCardNumber;
}