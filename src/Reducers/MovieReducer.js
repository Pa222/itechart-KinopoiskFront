import { handleActions } from 'redux-actions';
import * as actions from '../Actions/index';

const emptyCurrentMovie = {
  id: 0,
  title: 'Empty',
  genreMovies: [],
  comments: [],
  description: 'Empty',
  createYear: 'Empty',
  image: 'Empty',
}

const initialState = {
  movies: [],
  totalPages: 1,
  currentMovie: emptyCurrentMovie,
};

const getMovie = (state, action) => {
    state.currentMovie = {...action.payload};
    return {...state};
}

const addComment = (state, action) => {
  state.currentMovie.comments = action.payload;
  return {...state};
}

const MovieReducer = handleActions(
  {
    [actions.moviesRequest]: (state, action) => state,
    [actions.getMovies]: (state, action) => { return {currentMovie: emptyCurrentMovie, ...action.payload} },
    [actions.movieRequest]: (state, action) => state,
    [actions.getMovie]: getMovie,
    [actions.addCommentRequest]: (state, action) => state,
    [actions.addComment]: addComment,
  },
  initialState
);
export default MovieReducer;