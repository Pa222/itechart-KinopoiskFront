import * as genericSaga from "./GenericSaga";
import {all, fork} from 'redux-saga/effects';

export function* rootSaga() {
    yield all([
        ...Object.values(genericSaga),
    ].map(fork));
}