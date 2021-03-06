import { handleActions } from 'redux-actions';
import * as actions from '../Actions/index';
import KinopoiskApi from '../Api/KinopoiskApi';

const initialState = {
    authorized: false,
    role: '',
    name: '',
    phoneNumber: '',
    gender: '',
    creditCards: [],
    avatar: 'https://res.cloudinary.com/pa2/image/upload/v1636535929/UserAvatars/user_fhguim.png',
}

const cleanUser = (state, action) => {
    KinopoiskApi.logout();
    return {...initialState};
}

const changeCreditCard = (state, action) => {
    state.creditCards = action.payload;
    return {...state};
}

const UserReducer = handleActions(
    {
      [actions.getUserSuccess]: (state, action) => {return {authorized: true, ...action.payload}},
      [actions.getUserFail]: (state, action) => {return {...initialState}},
      [actions.cleanUser]: cleanUser,
      [actions.addCreditCardSuccess]: changeCreditCard,
      [actions.addCreditCardFail]: (state, action) => state,
      [actions.deleteCreditCardSuccess]: changeCreditCard,
      [actions.deleteCommentFail]: (state, action) => state,
      [actions.saveUserChangesSuccess]: (state, action) => {return {authorized: true, ...action.payload}},
      [actions.saveUserChangesFail]: (state, action) => state,
      [actions.uploadAvatarSuccess]: (state, action) => {return {authorized: true, ...action.payload}},
      [actions.uploadAvatarFail]: (state, action) => state,
    },
    initialState
);
export default UserReducer;