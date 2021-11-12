import { createAction } from 'redux-actions';

export const moviesRequest = createAction("MOVIES_REQUEST");
export const getMovies = createAction("MOVIES_SUCCESS");
export const getMoviesFail = createAction("MOVIES_FAIL");