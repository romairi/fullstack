import React from 'react'
import {Route, Switch} from 'react-router'
import TodoListContainer from "../containers/TodoListContainer";
import SignUpContainer from "../containers/SignUpContainer";

const routes = (

        <Switch>
            <Route exact path="/" component={SignUpContainer}/>
            <Route exact path="/todos" component={TodoListContainer}/>
            <Route exact path="/signup" component={SignUpContainer}/>
        </Switch>

);

export default routes;
