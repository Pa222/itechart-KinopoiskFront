import React, {useState} from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Profile from "../Views/Profile/Profile";
import { saveUserChangesRequest, uploadAvatarRequest } from "../../Actions";
import {CHANGES_SAVED} from '../../Enums/Constants';

const ProfileContainer = props => {
    const {name, phoneNumber, creditCards, gender, avatar, updateUser, uploadAvatar} = props;
    const [showAddCreditCard, setShowAddCreditCard] = useState(false);
    const [message, setMessage] = useState('');


    const handleFileUpload = async (e) => {
        const file = e.target.files[0]

        const formData = new FormData();
        formData.append('avatar', file, file.name);

        uploadAvatar(formData);

        e.target.files = null;
    }

    const saveChanges = (values) => {
        const {name, phoneNumber, gender, creditCards} = values;
        console.log({...values});
        updateUser({
            name,
            phoneNumber,
            gender,
            creditCards
        })
        setMessage(CHANGES_SAVED);
    }
    
    const toggleAddCreditCardContainer = () => setShowAddCreditCard(!showAddCreditCard);

    const profileProps = {
        name,
        phoneNumber,
        creditCards,
        gender,
        avatar,
        showAddCreditCard,
        message,
        saveChanges,
        toggleAddCreditCardContainer,
        handleFileUpload,
    }

    return (
        <Profile {...profileProps} />
    );
}

const mapStateToProps = (state) => {
    return {
        name: state.userState.name,
        phoneNumber: state.userState.phoneNumber,
        creditCards: state.userState.creditCards,
        gender: state.userState.gender,
        avatar: state.userState.avatar,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => dispatch(saveUserChangesRequest(user)),
        uploadAvatar: (data) => dispatch(uploadAvatarRequest(data)),
    }
}

ProfileContainer.propTypes = {
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    creditCards: PropTypes.array.isRequired,
    gender: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    updateUser: PropTypes.func.isRequired,
    uploadAvatar: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);