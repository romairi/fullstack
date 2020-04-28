import {routerMiddleware} from 'connected-react-router'
import apiMiddleware from './ApiMiddleware';

const createMiddleware = history => [routerMiddleware(history), apiMiddleware];

export default createMiddleware;