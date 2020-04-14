import React from 'react';
import './index.scss';
import TodoListItem from "./TodoListItem";

export default class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {todos, onRemoveClicked} = this.props;
        const items = todos.map(todo =>
            <TodoListItem
                todoId={todo.id}
                key={todo.id}
                title={todo.title}
                status={todo.status}
                onRemoveClicked={onRemoveClicked}
            />);
        return (
            <div className="todo-list">
                <ul className="todo-list-items">
                    {items}
                </ul>
            </div>
        );
    }
}
