import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import todos from './TodoItemReducer';
import user from './UserReducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    todos,
    user,
});

export default createRootReducer;