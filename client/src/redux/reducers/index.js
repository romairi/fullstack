import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import todos from './TodoItemReducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    todos,
});

export default createRootReducer;