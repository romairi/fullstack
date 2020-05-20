import React from 'react';
import './index.scss';
import AddForm from "../AddForm";


export default class TodoListHeader extends React.Component {
    render() {
        const { onAddClicked} = this.props;
        return (
            <div className="todo-list-header">
                <AddForm onAddClicked={onAddClicked}/>
            </div>
        );
    }
}