import React from 'react';
import './index.css';
import AddForm from "../../AddForm";


export default class TodoListHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { onAddClicked} = this.props;
        return (
            <div className="todo-list-header">
                <AddForm onAddClicked={onAddClicked}/>
            </div>
        );
    }
}