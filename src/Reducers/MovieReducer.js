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
    [actions.moviesRequest]: (state, action) => state,
    [actions.getMovies]: (state, action) => { return {currentMovie: emptyCurrentMovie, searchMovies: [], ...action.payload} },
    [actions.movieRequest]: (state, action) => state,
    [actions.getMovie]: getMovie,
    [actions.addCommentRequest]: (state, action) => state,
    [actions.addComment]: changeComment,
    [actions.deleteCommentRequest]: (state, action) => state,
    [actions.deleteComment]: changeComment,
    [actions.updateRatingRequest]: (state, action) => state,
    [actions.updateRating]: getMovie,
    [actions.moviesByTitleRequest]: (state, action) => state,
    [actions.getMoviesByTitle]: (state, action) => { return {...state, searchMovies: action.payload.slice(0, 5)} },
  },
  initialState
);
export default MovieReducer;