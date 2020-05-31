import React from 'react';
import {connect} from "react-redux";
import {ConnectedRouter, replace} from 'connected-react-router';
import _ from 'lodash';
import './index.scss';
import Header from "../../containers/Header";
import routes from "../../routes";
import {BASE_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE} from "../../routes/constants";

class App extends React.PureComponent {

    componentDidMount() {
        const {user, router} = this.props;

        if (_.isEmpty(user) && !_.find([LOGIN_ROUTE, SIGNUP_ROUTE],
            path => path === router.location.pathname)) {
            this.props.replace(LOGIN_ROUTE);
        } else if (!_.isEmpty(user) && _.find([LOGIN_ROUTE, SIGNUP_ROUTE],
            path => path === router.location.pathname)) {
            this.props.replace(BASE_ROUTE);
        }

    }

    render() {
        const {history} = this.props;

        return (
            <div className="app-container">
                <ConnectedRouter history={history}>
                    <Header/>
                    {routes}
                </ConnectedRouter>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    router: state.router,
    user: state.user,
});

const mapDispatchToProps = {
    replace,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

