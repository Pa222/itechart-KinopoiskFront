import React from "react";
import Cards from 'react-credit-cards';
import PropTypes from 'prop-types';
import useStyles from "./styles";
import 'react-credit-cards/es/styles-compiled.css';

const AddCreditCard = props => {
    const classes = useStyles();
    const {
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
        validateTextOnlyInput} = props;

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div>
                    <Cards
                        cvc={cvc}
                        expiry={expiry}
                        focused={focus}
                        name={cardHolderName}
                        number={number}
                        callback={(info, isValid) => {
                            setNumberMaxLength(info.maxLength);
                        }}
                    />
                </div>
                <div className={classes.container__form}>
                    <input
                        className={classes.container__input}
                        type="tel"
                        name="number"
                        placeholder="Номер карты"
                        maxLength={numberMaxLength}
                        onKeyPress={e => validateNumberOnlyInput(e)}
                        value={number}
                        onChange={handleChange}
                        onFocus={handleFocus}
                    />
                    <input
                        className={classes.container__input}
                        type="text"
                        name="cardHolderName"
                        placeholder="Имя держателя карты"
                        maxLength="26"
                        onKeyPress={e => validateTextOnlyInput(e)}
                        value={cardHolderName}
                        onChange={handleChange}
                        onFocus={handleFocus}
                    />
                    <input
                        className={classes.container__input}
                        type="text"
                        name="expiry"
                        placeholder="MM/YY Expiry"
                        maxLength="4"
                        onKeyPress={e => validateNumberOnlyInput(e)}
                        value={expiry}
                        onChange={handleChange}
                        onFocus={handleFocus}
                    />
                    <input
                        className={classes.container__input}
                        type="tel"
                        name="cvc"
                        placeholder="cvc"
                        maxLength="3"
                        onKeyPress={e => validateNumberOnlyInput(e)}
                        value={cvc}
                        onChange={handleChange}
                        onFocus={handleFocus}
                    />
                    <input
                        className={classes.container__submit__input}
                        type="button"
                        value="Добавить новую карту"
                        onClick={addCard}
                    />
                    {
                        message !== '' &&
                        <div className={classes.errorMessage}>
                            {message}
                        </div> 
                    }
                </div>
            </div>
        </div>
    );
}

AddCreditCard.propTypes = {
    number: PropTypes.string.isRequired,
    expiry: PropTypes.string.isRequired,
    cardHolderName: PropTypes.string.isRequired,
    cvc: PropTypes.string.isRequired,
    focus: PropTypes.string.isRequired,
    numberMaxLength: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    setNumberMaxLength: PropTypes.func.isRequired,
    handleFocus: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    addCard: PropTypes.func.isRequired,
    validateNumberOnlyInput: PropTypes.func.isRequired,
    validateTextOnlyInput: PropTypes.func.isRequired,
}

export default AddCreditCard;