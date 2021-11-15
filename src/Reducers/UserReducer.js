import { handleActions } from 'redux-actions';
import * as actions from '../Actions/index';
import KinopoiskApi from '../Api/KinopoiskApi';

const initialState = {
    authorized: false,
    role: '',
    name: '',
    phoneNumber: '',
    gender: '',
    email: '',
    creditCards: [],
    avatar: 'https://res.cloudinary.com/pa2/image/upload/v1636535929/UserAvatars/user_fhguim.png',
}

const cleanUser = (state, action) => {
    KinopoiskApi.logout();
    return {...initialState};
}

const addCreditCard = (state, action) => {
    state.creditCards = action.payload;
    return {...state};
}

const UserReducer = handleActions(
    {
      [actions.userRequest]: (state, action) => state,
      [actions.getUser]: (state, action) => {return {authorized: true, ...action.payload}},
      [actions.getUserFail]: (state, action) => {return {...initialState}},
      [actions.cleanUser]: cleanUser,
      [actions.addCreditCardRequest]: (state, action) => state,
      [actions.addCreditCard]: addCreditCard,
    },
    initialState
);
export default UserReducer;