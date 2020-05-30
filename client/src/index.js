import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import _ from 'lodash';
import './index.scss';
import store, {history} from './redux/store';
import App from './containers/Application/';
import {createSetUserAction} from "./redux/reducers/UserReducer/actions";

const debug = _.isBoolean(window.debug) ? window.debug : true;

// TODO - remove after dev
if (debug) {
    window.clientData = {
        "user": {
            "_id": "5ed21d299f7b7d0044aaa078",
            "username": "eliorav",
            "email": "elior.av123@gmail.com",
            "creation_time": "2020-05-30T08:45:29.834Z",
            "__v": 0
        }
    };
}

window.clientData = window.clientData || {};

store.dispatch(createSetUserAction(window.clientData.user));

ReactDOM.render(
    <Provider store={store}>
        <App history={history}/>
    </Provider>,
    document.getElementById('root')
);
