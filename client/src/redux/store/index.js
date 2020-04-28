import {applyMiddleware, createStore} from 'redux'
import {createBrowserHistory} from 'history'
import createRootReducer from '../reducers';
import createMiddleware from '../middleware';

export const history = createBrowserHistory();

const store = createStore(createRootReducer(history), {}, applyMiddleware(...createMiddleware(history)));

export default store;