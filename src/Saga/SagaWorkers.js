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