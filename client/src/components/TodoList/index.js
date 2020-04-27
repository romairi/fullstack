import React from 'react';
import './index.scss';
import TodoListItem from "./TodoListItem";

export default class TodoList extends React.Component {

    render() {
        const {todos, onRemoveClicked, onChangeStatusClicked} = this.props;
        const items = todos.map(todo =>
            <TodoListItem
                todoId={todo._id}
                key={todo._id}
                title={todo.title}
                status={todo.status}
                onRemoveClicked={onRemoveClicked}
                onChangeStatusClicked={onChangeStatusClicked}
            />
        );
        return (
            <div className="todo-list">
                <ul className="todo-list-items">
                    {items}
                </ul>
            </div>
        );
    }
}