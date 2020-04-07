import React from 'react';
import './index.css';
import TodoListItem from "./TodolistItem";

export default class Todolist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {todos, onRemoveClicked} = this.props;
        const items = todos.map(todo => <TodoListItem key={todo.id} todoId={todo.id} title={todo.title} status={todo.status} onRemoveClicked={onRemoveClicked}/>);
        return (
            <div className="todolist">
                <ul className="todolist_items">
                    {items}
                </ul>
            </div>
        );
    }
}