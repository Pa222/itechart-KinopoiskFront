import { call } from 'redux-saga/effects';
import KinopoiskApi from '../Api/KinopoiskApi';

export function* moviesRequest(payload){
    return yield call(() => {
        return KinopoiskApi.getMoviesPage(payload);
    })
}