import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import todos from './TodoItemReducer';
import user from './UserReducer';
import papers from './MyPapersReducer';
import searchPapers from './SearchPapersReducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    todos,
    user,
    papers,
    searchPapers,
});

export default createRootReducer;
