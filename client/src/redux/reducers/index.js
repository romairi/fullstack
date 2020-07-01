import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import todos from './TodoItemReducer';
import user from './UserReducer';
import categories from './CategoriesReducer';
import searchPapers from './SearchPapersReducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    todos,
    user,
    categories,
    searchPapers,
});

export default createRootReducer;
