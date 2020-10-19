import React, {Suspense, lazy} from 'react';
import {Route, Switch} from 'react-router'
import {BASE_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE, SEARCH_PAPER_LIST_ROUTE, MY_SEARCHES} from './constants';

const SignUpContainer = lazy(() => import(/* webpackChunkName: "SignUpContainer" */ "../containers/SignUpContainer"));
const LoginContainer = lazy(() => import(/* webpackChunkName: "LoginContainer" */ "../containers/LoginContainer"));
const SearchPaperListContainer = lazy(() => import(/* webpackChunkName: "SearchPaperListContainer" */ "../containers/SearchPaperListContainer"));
const MyPapersContainer = lazy(() => import(/* webpackChunkName: "MyPapersContainer" */ "../containers/MyPapersContainer"));
const MySearchesContainer = lazy(() => import(/* webpackChunkName: "MySearchesContainer" */ "../containers/MySearchesContainer"));

const routes = (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path={BASE_ROUTE} component={MyPapersContainer}/>
            <Route exact path={LOGIN_ROUTE} component={LoginContainer}/>
            <Route exact path={SIGNUP_ROUTE} component={SignUpContainer}/>
            <Route exact path={SEARCH_PAPER_LIST_ROUTE} component={SearchPaperListContainer}/>
            <Route exact path={MY_SEARCHES} component={MySearchesContainer}/>
        </Switch>
    </Suspense>

);

export default routes;
