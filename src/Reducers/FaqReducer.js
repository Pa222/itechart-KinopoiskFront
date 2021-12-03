import { handleActions } from 'redux-actions';
import * as actions from '../Actions/index';

const initialState = [];

const FaqReducer = handleActions(
    {
      [actions.faqRequest]: (state, action) => state,
      [actions.getFaqSuccess]: (state, action) => [...action.payload],
    },
    initialState
);
export default FaqReducer;