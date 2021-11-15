import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import MovieReducer from './Reducers/MovieReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './Saga';
import App from './App';
import UserReducer from './Reducers/UserReducer';
import FaqReducer from './Reducers/FaqReducer';
import { userRequest } from './Actions';

const rootReducer = combineReducers({
  movieState: MovieReducer,
  userState: UserReducer,
  faqState: FaqReducer,
});

const saga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(rootSaga);

store.dispatch(userRequest());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App /> 
      </HashRouter>
    </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);