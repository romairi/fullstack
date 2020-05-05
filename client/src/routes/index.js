import React from 'react'
import {Route, Switch} from 'react-router'
import TodoListContainer from "../containers/TodoListContainer";
import SignUpContainer from "../containers/SignUpContainer";
import LoginContainer from "../containers/LoginContainer";
import {SIGNUP_ROUTE} from './constants';

const routes = (
        <Switch>
            <Route exact path="/" component={LoginContainer}/>
            <Route exact path="/login" component={LoginContainer}/>
            <Route exact path="/todos" component={TodoListContainer}/>
            <Route exact path={SIGNUP_ROUTE} component={SignUpContainer}/>
        </Switch>

);

export default routes;
