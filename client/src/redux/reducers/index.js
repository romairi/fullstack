import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import user from './UserReducer';
import categories from './CategoriesReducer';
import searchPapers from './SearchPapersReducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    user,
    categories,
    searchPapers,
});

export default createRootReducer;
