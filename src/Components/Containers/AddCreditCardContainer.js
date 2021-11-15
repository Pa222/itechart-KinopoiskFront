import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import AddCreditCard from "../Views/AddCreditCard/AddCreditCard";
import { addCreditCardRequest } from "../../Actions";

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

const AddCreditCardContainer = (props) => {
    const [number, setNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');
    const [numberMaxLength, setNumberMaxLength] = useState(16);
    const [message, setMessage] = useState('');

    const handleFocus = (e) => {
        setFocus(e.target.name);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        name === "number" && setNumber(value);
        name === "expiry" && setExpiry(value);
        name === "cardHolderName" && setCardHolderName(value);
        name === "cvc" && setCvc(value);
    }

    const detectCardIssuer = (number) => {
        var issuersRegex = {
            Electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
            Maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
            Dankort: /^(5019)\d+$/,
            Interpayment: /^(636)\d+$/,
            Unionpay: /^(62|88)\d+$/,
            Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            Mastercard: /^5[1-5][0-9]{14}$/,
            Amex: /^3[47][0-9]{13}$/,
            Diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            Jcb: /^(?:2131|1800|35\d{3})\d{11}$/
        }
    
        for(var key in issuersRegex) {
            if(issuersRegex[key].test(number)) {
                return key
            }
        }
        return null;
    }

    const addCreditCard = async () => {
        validationSchema.validate({number, cardHolderName, expiry, cvc})
        .catch(err => setMessage(err.message));

        var issuer = detectCardIssuer(number);
        if (issuer !== null){
            props.addCreditCard({
                number,
                expiry: expiry.slice(0, 2) + '/' + expiry.slice(2),
                cardHolderName,
                cvc,
                issuer,
            })
            setNumber('');
            setExpiry('');
            setCardHolderName('');
            setCvc('');
            setFocus('number')
            document.querySelector("input").value = "";
            return;
        }
        setMessage("Проверьте номер карты");
    }

    const validateNumberOnlyInput = (e) => {
        var key = String.fromCharCode(e.keyCode || e.which);
        !/[0-9]/.test(key) && e.preventDefault();
    }

    const validateTextOnlyInput = (e) => {
        var key = String.fromCharCode(e.keyCode || e.which);
        /[0-9]/.test(key) && e.preventDefault();
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
        addCreditCard,
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