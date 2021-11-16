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
  totalPages: 1,
  currentMovie: emptyCurrentMovie,
};

const getMovie = (state, action) => {
    const ratings = action.payload.ratings;
    const rating = ratings.reduce((prev, curr) => prev + curr) / ratings.length;
    state.currentMovie = {rating, ...action.payload};
    console.log({...state.currentMovie});
    return {...state};
}

const changeComment = (state, action) => {
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
    [actions.addComment]: changeComment,
    [actions.deleteCommentRequest]: (state, action) => state,
    [actions.deleteComment]: changeComment,
    [actions.updateRatingRequest]: (state, action) => state,
    [actions.updateRating]: getMovie,
  },
  initialState
);
export default MovieReducer;