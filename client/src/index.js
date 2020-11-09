import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.scss';
import store, {history} from './redux/store';
import App from './containers/Application/';
import {createSetUserAction} from "./redux/reducers/UserReducer/actions";

window.clientData = window.clientData || {};

store.dispatch(createSetUserAction(window.clientData.user));

ReactDOM.render(
    <Provider store={store}>
        <App history={history}/>
    </Provider>,
    document.getElementById('root')
);

if ('serviceWorker' in navigator) {
    import('workbox-window').then(({Workbox}) => {
        const wb = new Workbox(`/static/service-worker.js`);
        wb.register();
    });
}
