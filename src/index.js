import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import MovieReducer from './Reducers/MovieReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './Saga';
import App from './App';

const rootReducer = combineReducers({
  movieState: MovieReducer,
});

const saga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(rootSaga);

window.store = store;

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