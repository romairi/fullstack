import React from 'react';
import _ from 'lodash';
import './index.css';
import TodoListHeader from "../../components/TodoListHeader";
import TodoList from "../../components/TodoList";
import {STATUSES} from "./constants";


export default class TodoListContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            todos: _.range(13).map(idx => ({
                id: `todo_id_${idx}`,
                title: `todo_title_${idx}`,
                status: Object.values(STATUSES)[_.random(0, 2)],
            }))
        }
    }

    onRemoveClicked = (todoId) => {
        this.setState({todos: this.state.todos.filter(todo => todo.id !== todoId)});
    };

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-list-container">
                <TodoListHeader/>
                <TodoList
                    todos={todos}
                    onRemoveClicked={this.onRemoveClicked}
                />
            </div>
        );
    }
};