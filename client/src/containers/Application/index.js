import React from 'react';
import {connect} from "react-redux";
import {ConnectedRouter, replace} from 'connected-react-router';
import _ from 'lodash';
import './index.scss';
import Header from "../../containers/Header";
import routes from "../../routes";
import {BASE_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE} from "../../routes/constants";
import {getCategoriesAction, setCategoriesAction} from "../../redux/reducers/CategoriesReducer/actions";

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
        if(!_.isEmpty(user)) {
            this.props.getCategoriesAction({onSuccess: this.onGetCategoriesSuccess, onError: err => console.log(err)});
        }
    }

    onGetCategoriesSuccess = (response) =>  {
        this.props.setCategoriesAction(response.data);
    };

    render() {
        const {history} = this.props;

        return (
            <div className="app-container">
                <ConnectedRouter history={history}>
                    <Header />
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
    getCategoriesAction,
    setCategoriesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

