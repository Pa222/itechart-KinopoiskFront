import { handleActions } from 'redux-actions';
import * as actions from '../Actions/index';

const initialState = {};

const getMovies = (state, action) => {
    return {...action.payload}
}

const MovieReducer = handleActions(
  {
    [actions.moviesRequest]: (state, action) => state,
    [actions.getMovies]: getMovies,
    [actions.getMoviesFail]: (state, action) => action.payload,
  },
    initialState
);
export default MovieReducer;