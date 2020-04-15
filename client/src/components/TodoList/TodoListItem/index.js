import React from 'react';
import './index.scss';

export default class TodoListItem extends React.Component {

    render() {
        const {todoId, title, status, onRemoveClicked, onChangeStatusClicked} = this.props;
        const classNameStatus = `list-group-item ${status ? `status_${status}` : ''}`;

        return (
            <li className={classNameStatus}>
                <div className="item_title">
                    {title}
                </div>
                <div className="item_options">
                    <button className="btn btn-outline-danger btn-sm float-right"
                            onClick={() => onRemoveClicked(todoId)}>
                        <i className="fa fa-trash-o"/>
                    </button>
                    <button className="btn btn-outline-secondary btn-sm "
                            onClick={() => onChangeStatusClicked(todoId)}>
                        in progress
                    </button>
                    <button className="btn btn-outline-secondary btn-sm ">
                        done
                    </button>
                    <button className="btn btn-outline-secondary btn-sm float-left">
                        to do
                    </button>
                </div>
            </li>
        );
    }
}