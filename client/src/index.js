import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { createStore, compose } from "redux";
import {Provider} from 'react-redux'
import './index.scss';
import store, {history} from './redux/store';
import App from './containers/Application/';
import {createSetUserAction} from "./redux/reducers/UserReducer/actions";


Sentry.init({
    dsn: "https://28b1f6296cf24ad584c2016ea94bfb59@o474728.ingest.sentry.io/5513469",
    integrations: [
        new Integrations.BrowserTracing(),
    ],
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});


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
