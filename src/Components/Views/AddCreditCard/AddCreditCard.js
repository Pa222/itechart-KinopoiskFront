import React from "react";
import Cards from 'react-credit-cards';
import PropTypes from 'prop-types';
import useStyles from "./styles";
import 'react-credit-cards/es/styles-compiled.css';

const AddCreditCard = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div>
                    <Cards
                        cvc={props.cvc}
                        expiry={props.expiry}
                        focused={props.focus}
                        name={props.cardHolderName}
                        number={props.number}
                        callback={(info, isValid) => {
                            props.setNumberMaxLength(info.maxLength);
                            console.log(isValid);
                        }}
                    />
                </div>
                <div className={classes.container__form}>
                    <input
                        className={classes.container__input}
                        type="tel"
                        name="number"
                        placeholder="Номер карты"
                        maxLength={props.numberMaxLength}
                        onKeyPress={e => props.validateNumberOnlyInput(e)}
                        value={props.number}
                        onChange={props.handleChange}
                        onFocus={props.handleFocus}
                    />
                    <input
                        className={classes.container__input}
                        type="text"
                        name="cardHolderName"
                        placeholder="Имя держателя карты"
                        maxLength="26"
                        onKeyPress={e => props.validateTextOnlyInput(e)}
                        value={props.cardHolderName}
                        onChange={props.handleChange}
                        onFocus={props.handleFocus}
                    />
                    <input
                        className={classes.container__input}
                        type="text"
                        name="expiry"
                        placeholder="MM/YY Expiry"
                        maxLength="4"
                        onKeyPress={e => props.validateNumberOnlyInput(e)}
                        value={props.expiry}
                        onChange={props.handleChange}
                        onFocus={props.handleFocus}
                    />
                    <input
                        className={classes.container__input}
                        type="tel"
                        name="cvc"
                        placeholder="cvc"
                        maxLength="3"
                        onKeyPress={e => props.validateNumberOnlyInput(e)}
                        value={props.cvc}
                        onChange={props.handleChange}
                        onFocus={props.handleFocus}
                    />
                    <input
                        className={classes.container__submit__input}
                        type="button"
                        value="Добавить новую карту"
                        onClick={props.addCreditCard}
                    />
                    {
                        props.message !== '' &&
                        <div className={classes.errorMessage}>
                            {props.message}
                        </div> 
                    }
                </div>
            </div>
        </div>
    );
}

AddCreditCard.propTypes = {
    number: PropTypes.string,
    expiry: PropTypes.string,
    cardHolderName: PropTypes.string,
    cvc: PropTypes.string,
    focus: PropTypes.string,
    numberMaxLength: PropTypes.number,
    message: PropTypes.string,
    setNumberMaxLength: PropTypes.func,
    handleFocus: PropTypes.func,
    handleChange: PropTypes.func,
    addCreditCard: PropTypes.func,
    validateNumberOnlyInput: PropTypes.func,
    validateTextOnlyInput: PropTypes.func,
}

export default AddCreditCard;