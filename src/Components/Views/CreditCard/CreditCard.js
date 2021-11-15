import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./styles";

const CreditCard = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div>
                <img className={classes.container__creditCardImage} src={props.image} alt="Card"></img>
            </div>
            <p className={classes.container__info}>
                {
                    '*'.repeat(props.number.length - 4)
                }
                {
                    props.number.substring(props.number.length - 4)
                }
            </p>
            <p className={classes.container__info}>{props.expiry}</p>
            <input className={classes.container__deleteButton} type="button" onClick={props.handleDeleteCreditCard} value="Удалить карту"/>
        </div>
    );
}

CreditCard.propTypes = {
    number: PropTypes.string,
    expiration: PropTypes.string,
    image: PropTypes.string,
}

export default CreditCard;