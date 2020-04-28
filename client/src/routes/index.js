import React from 'react'
import {Route, Switch} from 'react-router'
import TodoListContainer from "../containers/TodoListContainer";
import SignupContainer from "../containers/SignupContainer";

const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={TodoListContainer}/>
            <Route exact path="/todos" component={TodoListContainer}/>
            <Route exact path="/signup" component={SignupContainer}/>
        </Switch>
    </div>
);

export default routes;
