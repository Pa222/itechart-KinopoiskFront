import * as genericMovieSaga from "./GenericMovieSaga";
import {all, fork} from 'redux-saga/effects';

export function* rootSaga() {
    yield all([
        ...Object.values(genericMovieSaga),
    ].map(fork));
}