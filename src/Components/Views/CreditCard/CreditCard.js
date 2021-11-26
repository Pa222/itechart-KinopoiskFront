import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./styles";

const CreditCard = ({number, expiry, image, handleDeleteCreditCard}) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div>
                <img className={classes.container__creditCardImage} src={image} alt="Card"></img>
            </div>
            <p className={classes.container__info}>
                {
                    '*'.repeat(number.length - 4)
                }
                {
                    number.substring(number.length - 4)
                }
            </p>
            <p className={classes.container__info}>{expiry}</p>
            <input className={classes.container__deleteButton} type="button" onClick={handleDeleteCreditCard} value="Удалить карту"/>
        </div>
    );
}

CreditCard.propTypes = {
    number: PropTypes.string,
    expiry: PropTypes.string,
    image: PropTypes.string,
    handleDeleteCreditCard: PropTypes.func,
}

export default CreditCard;