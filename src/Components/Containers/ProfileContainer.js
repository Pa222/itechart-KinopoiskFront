import React, {useState} from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Profile from "../Views/Profile/Profile";
import { saveUserChangesRequest, uploadAvatarRequest } from "../../Actions";

const ProfileContainer = props => {
    const [name, setName] = useState(props.name);
    const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
    const [gender, setGender] = useState(props.gender);
    const [showAddCreditCard, setShowAddCreditCard] = useState(false);
    const [message, setMessage] = useState('');

    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        name === "name" && setName(value);
        name === "phoneNumber" && setPhoneNumber(value);
        name === "gender" && setGender(value);
    }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0]

        const formData = new FormData();
        formData.append('avatar', file, file.name);

        props.uploadAvatar(formData);

        e.target.files = null;
    }

    const saveChanges = () => {
        props.updateUser({
            name,
            phoneNumber,
            gender,
            creditCards: props.creditCards
        })
        setMessage('Изменения сохранены');
    }
    
    const toggleAddCreditCardContainer = () => setShowAddCreditCard(!showAddCreditCard);

    const profileProps = {
        name,
        phoneNumber,
        creditCards: props.creditCards,
        gender,
        avatar: props.avatar,
        showAddCreditCard,
        message,
        saveChanges,
        handleChange,
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
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    creditCards: PropTypes.array,
    gender: PropTypes.string,
    avatar: PropTypes.string,
    updateUser: PropTypes.func,
    uploadAvatar: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);