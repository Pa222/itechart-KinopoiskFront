import React from "react";
import PropTypes from 'prop-types';
import CreditCard from "../Views/CreditCard/CreditCard";
import {connect} from 'react-redux';
import { deleteCreditCardRequest } from "../../Actions";

const CreditCardContainer = props => {
    
    const handleDeleteCreditCard = () => {
        props.deleteCard(props.number);
    }
    
    const creditCardProps = {
        number: props.number,
        expiry: props.expiry,
        image: props.image,
        handleDeleteCreditCard,
    }
    return (
        <CreditCard {...creditCardProps} />
    );
}


const mapDispatchToProps = dispatch => {
    return {
        deleteCard: (number) => dispatch(deleteCreditCardRequest(number)),
    }
}

CreditCardContainer.propTypes = {
    number: PropTypes.string,
    expiry: PropTypes.string,
    image: PropTypes.string,
    deleteCard: PropTypes.func
}

export default connect(null, mapDispatchToProps)(CreditCardContainer);