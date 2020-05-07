import React from 'react'
import {Route, Switch} from 'react-router'
import TodoListContainer from "../containers/TodoListContainer";
import SignUpContainer from "../containers/SignUpContainer";
import LoginContainer from "../containers/LoginContainer";
import {BASE_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE, TODO_LIST_ROUTE} from './constants';

const routes = (
        <Switch>
            <Route exact path={BASE_ROUTE} component={LoginContainer}/>
            <Route exact path={LOGIN_ROUTE} component={LoginContainer}/>
            <Route exact path={TODO_LIST_ROUTE} component={TodoListContainer}/>
            <Route exact path={SIGNUP_ROUTE} component={SignUpContainer}/>
        </Switch>

);

export default routes;
