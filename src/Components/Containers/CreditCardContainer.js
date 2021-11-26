import React from "react";
import PropTypes from 'prop-types';
import CreditCard from "../Views/CreditCard/CreditCard";
import {connect} from 'react-redux';
import { deleteCreditCardRequest } from "../../Actions";

const CreditCardContainer = ({number, expiry, image, deleteCard}) => {
    
    const handleDeleteCreditCard = () => { deleteCard(number); }
    
    const creditCardProps = {
        number,
        expiry,
        image,
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
    number: PropTypes.string.isRequired,
    expiry: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    deleteCard: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(CreditCardContainer);