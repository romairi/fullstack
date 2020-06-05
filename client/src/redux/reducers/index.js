import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import todos from './TodoItemReducer';
import user from './UserReducer';
import papers from './PapersReducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    todos,
    user,
    papers,
});

export default createRootReducer;
