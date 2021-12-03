import { handleActions } from 'redux-actions';
import * as actions from '../Actions/index';

const emptyCurrentMovie = {
  id: 0,
  title: 'Empty',
  genreMovies: [],
  comments: [],
  rating: 0,
  description: 'Empty',
  createYear: 'Empty',
  image: 'Empty',
}

const initialState = {
  movies: [],
  searchMovies: [],
  totalPages: 1,
  currentMovie: emptyCurrentMovie,
};

const getMovie = (state, action) => {
    const ratings = action.payload.ratings;
    let rating = 0;
    if (ratings.length > 0){
      rating = ratings.reduce((prev, curr) => prev + curr) / ratings.length;
    }
    state.currentMovie = {rating, ...action.payload};
    return {...state};
}

const changeComment = (state, action) => {
  state.currentMovie.comments = action.payload;
  return {...state};
}

const MovieReducer = handleActions(
  {
    [actions.getMoviesSuccess]: (state, action) => { return {currentMovie: emptyCurrentMovie, searchMovies: [], ...action.payload} },
    [actions.getMoviesFail]: (state, action) => {return {...state, movies: []}},
    [actions.getMovieSuccess]: getMovie,
    [actions.getMovieFail]: (state, action) => {return {...state, currentMovie: emptyCurrentMovie}},
    [actions.addCommentSuccess]: changeComment,
    [actions.addCommentFail]: (state, action) => state,
    [actions.deleteCommentSuccess]: changeComment,
    [actions.deleteCommentFail]: (state, action) => state,
    [actions.updateRatingSuccess]: getMovie,
    [actions.updateRatingFail]: (state, action) => state,
    [actions.getMoviesByTitleSuccess]: (state, action) => { return {...state, searchMovies: action.payload.slice(0, 5)} },
    [actions.getMoviesByTitleFail]: (state, action) => { return {...state, searchMovies: []}},
  },
  initialState
);
export default MovieReducer;