import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import AddCreditCard from "../Views/AddCreditCard/AddCreditCard";
import { addCreditCardRequest } from "../../Actions";
import { detectCardIssuer, validateCard } from '../../Helpers/CreditCardHelper';
import { validateNumberOnlyInput, validateTextOnlyInput } from "../../Helpers/InputHelpers";
import {CARD_HOLDER_NAME, CVC, EXPIRY, NUMBER} from '../../Enums/StringConsts';

const AddCreditCardContainer = ({addCreditCard}) => {
    const [number, setNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');
    const [numberMaxLength, setNumberMaxLength] = useState(16);
    const [message, setMessage] = useState('');

    const handleFocus = e => setFocus(e.target.name);

    const handleChange = e => {
        const { name, value } = e.target;
        
        name === NUMBER && setNumber(value);
        name === EXPIRY && setExpiry(value);
        name === CARD_HOLDER_NAME && setCardHolderName(value);
        name === CVC && setCvc(value);
    }

    const addCard = () => {
        const card = {number, cardHolderName, expiry, cvc};
        const errMessage = validateCard(card);

        if (!errMessage){
            addCreditCard({
                ...card,
                 expiry: expiry.slice(0, 2) + '/' + expiry.slice(2),
                 issuer: detectCardIssuer(number),
                });

            setNumber('');
            setExpiry('');
            setCardHolderName('');
            setCvc('');
            setMessage('');
            setFocus(NUMBER)
        } else{
            setMessage(errMessage);
        }
    }

    const addCardProps = {
        number,
        expiry,
        cardHolderName,
        cvc,
        focus,
        numberMaxLength,
        message,
        setNumberMaxLength,
        handleFocus,
        handleChange,
        addCard,
        validateNumberOnlyInput,
        validateTextOnlyInput,
    }

    return (
        <AddCreditCard {...addCardProps} />
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCreditCard: (card) => dispatch(addCreditCardRequest(card)),
    }
}

AddCreditCardContainer.propTypes = {
    addCreditCard: PropTypes.func,
}


export default connect(null, mapDispatchToProps)(AddCreditCardContainer);