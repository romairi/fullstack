import { combineReducers } from 'redux';
import todos from './TodoItemReducer';

export default combineReducers({
    todos,
});