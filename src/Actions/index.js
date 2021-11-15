import { createAction } from 'redux-actions';

export const moviesRequest = createAction("MOVIES_REQUEST");
export const getMovies = createAction("MOVIES_SUCCESS");
export const movieRequest = createAction("MOVIE_REQUEST");
export const getMovie = createAction("MOVIE_SUCCESS");
export const faqRequest = createAction("FAQ_REQUEST");
export const getFaq = createAction("FAQ_SUCCESS");
export const userRequest = createAction("USER_REQUEST");
export const getUser = createAction("USER_SUCCESS");
export const getUserFail = createAction("USER_FAIL");
export const cleanUser = createAction("CLEAN_USER");
export const saveUserChangesRequest = createAction("SAVE_USER_CHANGES_REQUEST");
export const saveUserChanges = createAction("SAVE_USER_CHANGES_SUCCESS");
export const addCreditCardRequest = createAction("ADD_CREDIT_CARD_REQUEST");
export const addCreditCard = createAction("ADD_CREDIT_CARD_SUCCESS");
export const deleteCreditCardRequest = createAction("DELETE_CREDIT_CARD_REQUEST");
export const deleteCreditCard = createAction("DELETE_CREDIT_CARD_SUCCESS");