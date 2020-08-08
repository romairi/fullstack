import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import user from './UserReducer';
import searchPapers from './SearchPapersReducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    user,
    searchPapers,
});

export default createRootReducer;
