import { takeEvery, put } from 'redux-saga/effects';
import lodash from 'lodash';
import * as workers from './SagaWorkers';

function* saga(action) {
  const { payload, type } = action;
  const method = lodash.camelCase(type);
  const request = workers[method](payload);

  const response = yield request;
  if (response !== null){
    const successType = action.type.replace('_REQUEST', '_SUCCESS');
    yield put({ type: successType, payload: response });
  }
}

export function* genericSaga(action) {
    yield takeEvery(({ type }) => /_REQUEST$/g.test(type), saga);
}