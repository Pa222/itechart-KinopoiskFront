import { handleActions } from 'redux-actions';
import * as actions from '../Actions/index';

const initialState = {
    chats: [],
    currentChat: {},
};

const AdminChatsReducer = handleActions(
    {
        [actions.setChats]: (state, action) => state,
        [actions.setCurrentChat]: (state, action) => state,
        [actions.cleanCurrentChat]: (state, action) => state,
    },
    initialState
);
export default AdminChatsReducer;