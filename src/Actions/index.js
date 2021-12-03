import { createAction } from 'redux-actions';

export const moviesRequest = createAction("MOVIES_REQUEST");
export const getMoviesSuccess = createAction("MOVIES_SUCCESS");
export const movieRequest = createAction("MOVIE_REQUEST");
export const moviesByTitleRequest = createAction("MOVIES_BY_TITLE_REQUEST");
export const getMoviesByTitleSuccess = createAction("MOVIES_BY_TITLE_SUCCESS");
export const getMovieSuccess = createAction("MOVIE_SUCCESS");
export const faqRequest = createAction("FAQ_REQUEST");
export const getFaqSuccess = createAction("FAQ_SUCCESS");
export const userRequest = createAction("USER_REQUEST");
export const getUserSuccess = createAction("USER_SUCCESS");
export const getUserFail = createAction("USER_FAIL");
export const cleanUser = createAction("CLEAN_USER");
export const saveUserChangesRequest = createAction("SAVE_USER_CHANGES_REQUEST");
export const saveUserChangesSuccess = createAction("SAVE_USER_CHANGES_SUCCESS");
export const addCreditCardRequest = createAction("ADD_CREDIT_CARD_REQUEST");
export const addCreditCardSuccess = createAction("ADD_CREDIT_CARD_SUCCESS");
export const uploadAvatarRequest = createAction("UPLOAD_AVATAR_REQUEST");
export const uploadAvatarSuccess = createAction("UPLOAD_AVATAR_SUCCESS");
export const deleteCreditCardRequest = createAction("DELETE_CREDIT_CARD_REQUEST");
export const deleteCreditCardSuccess = createAction("DELETE_CREDIT_CARD_SUCCESS");
export const addCommentRequest = createAction("ADD_COMMENT_REQUEST");
export const addCommentSuccess = createAction("ADD_COMMENT_SUCCESS");
export const deleteCommentRequest = createAction("DELETE_COMMENT_REQUEST");
export const deleteCommentSuccess = createAction("DELETE_COMMENT_SUCCESS");
export const updateRatingRequest = createAction("UPDATE_RATING_REQUEST");
export const updateRatingSuccess = createAction("UPDATE_RATING_SUCCESS");
export const setCurrentChat = createAction("SET_CURRENT_CHAT");
export const cleanCurrentChat = createAction("CLEAN_CURRENT_CHAT");
export const setChats = createAction("SET_CHATS");
export const updateChatMessages = createAction("UPDATE_CHAT_MESSAGES");