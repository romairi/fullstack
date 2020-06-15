import React from 'react'
import {Route, Switch} from 'react-router'
import SignUpContainer from "../containers/SignUpContainer";
import LoginContainer from "../containers/LoginContainer";
import SearchPaperListContainer from "../containers/SearchPaperListContainer";
import {BASE_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE, SEARCH_PAPER_LIST_ROUTE} from './constants';
import MyPapersContainer from "../containers/MyPapersContainer";

const routes = (
    <Switch>
        <Route exact path={BASE_ROUTE} component={MyPapersContainer}/>
        <Route exact path={LOGIN_ROUTE} component={LoginContainer}/>
        <Route exact path={SIGNUP_ROUTE} component={SignUpContainer}/>
        <Route exact path={SEARCH_PAPER_LIST_ROUTE} component={SearchPaperListContainer}/>
    </Switch>

);

export default routes;
