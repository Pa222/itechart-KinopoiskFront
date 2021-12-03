import { handleActions } from 'redux-actions';
import * as actions from '../Actions/index';

const initialState = [];

const FaqReducer = handleActions(
    {
      [actions.getFaqSuccess]: (state, action) => [...action.payload],
      [actions.getFaqFail]: (state, action) => state,
    },
    initialState
);
export default FaqReducer;