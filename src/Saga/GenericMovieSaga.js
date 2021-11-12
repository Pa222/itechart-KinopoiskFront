import { takeEvery, put } from 'redux-saga/effects';
import lodash from 'lodash';
import * as workers from './MovieSagaWorkers';

function* movieSaga(action) {
  const { payload, type } = action;
  const method = lodash.camelCase(type);
  const request = workers[method](payload);
  try {
    const response = yield request;
    const successType = action.type.replace('_REQUEST', '_SUCCESS');
    yield put({ type: successType, payload: response });
  } catch (err) {
    const failedType = action.type.replace('_REQUEST', '_FAIL');
    yield put({ type: failedType, payload: err.response, err });
  }
}

export function* genericMovieSaga(action) {
    yield takeEvery(({ type }) => /_REQUEST$/g.test(type), movieSaga);
}