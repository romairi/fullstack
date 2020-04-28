import React from 'react';
import {ConnectedRouter} from 'connected-react-router'
import './index.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import routes from "../../routes";

function App({history}) {
    return (
        <div className="app-container">
            <Header/>
            <div className="content container">
                <ConnectedRouter history={history}>
                    {routes}
                </ConnectedRouter>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
