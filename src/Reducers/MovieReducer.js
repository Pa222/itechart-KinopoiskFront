import { handleActions } from 'redux-actions';
import * as actions from '../Actions/index';

const emptyCurrentMovie = {
  id: 0,
  title: 'Empty',
  genreMovies: [],
  description: 'Empty',
  createYear: 'Empty',
  image: 'Empty',
}

const initialState = {
  movies: [],
  totalPages: 1,
  currentMovie: emptyCurrentMovie,
};


const getMovies = (state, action) => {
    return {currentMovie: emptyCurrentMovie, ...action.payload}
}

const getMovie = (state, action) => {
    state.currentMovie = {...action.payload};
    return {...state};
}

const MovieReducer = handleActions(
  {
    [actions.moviesRequest]: (state, action) => state,
    [actions.getMovies]: getMovies,
    [actions.movieRequest]: (state, action) => state,
    [actions.getMovie]: getMovie,
  },
  initialState
);
export default MovieReducer;