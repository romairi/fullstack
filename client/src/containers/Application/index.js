import React from 'react';
import {ConnectedRouter} from 'connected-react-router'
import './index.scss';
import Header from "../../components/Header";
import routes from "../../routes";

function App({history}) {
    return (
        <div className="app-container">
            <Header/>
            <div className="content">
                <ConnectedRouter history={history}>
                    {routes}
                </ConnectedRouter>
            </div>
        </div>
    );
}

export default App;
