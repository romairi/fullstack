import React from 'react'
import {Route, Switch} from 'react-router'
import SignUpContainer from "../containers/SignUpContainer";
import LoginContainer from "../containers/LoginContainer";
import PaperListContainer from "../containers/PaperListContainer";
import {BASE_ROUTE, LOGIN_ROUTE, PAPER_LIST_ROUTE, SIGNUP_ROUTE} from './constants';

const routes = (
        <Switch>
            <Route exact path={BASE_ROUTE} component={PaperListContainer}/>
            <Route exact path={LOGIN_ROUTE} component={LoginContainer}/>
            <Route exact path={SIGNUP_ROUTE} component={SignUpContainer}/>
            <Route exact path={PAPER_LIST_ROUTE} component={PaperListContainer}/>
        </Switch>

);

export default routes;
