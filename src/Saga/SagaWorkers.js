import { call } from 'redux-saga/effects';
import KinopoiskApi from '../Api/KinopoiskApi';

export function* moviesRequest(payload){
    return yield call(() => {
        return KinopoiskApi.getMoviesPage(payload);
    })
}

export function* movieRequest(payload){
    return yield call(() => {
        return KinopoiskApi.getMovieById(payload);
    })
}

export function* faqRequest(payload){
    return yield call(() => {
        return KinopoiskApi.getFaqs();
    })
}

export function* userRequest(payload){
    return yield call(() => {
        return KinopoiskApi.getUser();
    })
}

export function* addCreditCardRequest(payload){
    return yield call(() => {
        return KinopoiskApi.addCreditCard(payload);
    })
}

export function* deleteCreditCardRequest(payload){
    return yield call(() => {
        return KinopoiskApi.deleteCreditCard(payload);
    })
}

export function* saveUserChangesRequest(payload){
    return yield call(() => {
        return KinopoiskApi.saveUserChanges(payload);
    })
}

export function* addCommentRequest(payload){
    return yield call(() => {
        return KinopoiskApi.addComment(payload);
    })
}

export function* deleteCommentRequest(payload){
    return yield call(() => {
        return KinopoiskApi.deleteComment(payload);
    })
}