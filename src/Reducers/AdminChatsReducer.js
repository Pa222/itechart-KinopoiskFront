import { handleActions } from 'redux-actions';
import * as actions from '../Actions/index';

const emptyCurrentChat = {
    connectionId: '',
    isMessagesSend: false,
    sender: '',
    messages: [],
}

const initialState = {
    chats: [],
    currentChat: emptyCurrentChat,
};

const updateChatMessages = (state, action) => {
    state.currentChat.messages = [...action.payload];
    return {...state};
}

const AdminChatsReducer = handleActions(
    {
        [actions.setChats]: (state, action) => {return {...state, chats: [...action.payload]}},
        [actions.setCurrentChat]: (state, action) => {return {...state, currentChat: action.payload}},
        [actions.cleanCurrentChat]: (state, action) => {return {...state, currentChat: {...emptyCurrentChat}}},
        [actions.updateChatMessages]: updateChatMessages,
    },
    initialState
);
export default AdminChatsReducer;