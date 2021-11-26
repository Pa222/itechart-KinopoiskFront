import * as issuersRegex from '../Enums/CardIssuerRegex';
import { INCORRECT_CARD_NUMBER } from '../Enums/StringConsts';
import {CreditCardValidationSchema} from '../Helpers/ValidationSchemes';

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
        return INCORRECT_CARD_NUMBER;
}