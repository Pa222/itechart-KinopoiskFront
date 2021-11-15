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
            <p className={classes.container__info}>{props.expiration}</p>
        </div>
    );
}

CreditCard.propTypes = {
    number: PropTypes.string,
    expiration: PropTypes.string,
    image: PropTypes.string,
}

export default CreditCard;