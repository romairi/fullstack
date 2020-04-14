import React from 'react';
import './index.scss';

export default function TodoListItem({todoId, title, status, onRemoveClicked}) {
    return (
        <li className={`list-group-item ${status ? `status_${status}` : ''}`}>
            <div className="item_title">
                {title}
            </div>
            <div className="item_options">
                <button className="btn btn-outline-danger btn-sm float-right"
                        onClick={() => onRemoveClicked(todoId)}>
                    <i className="fa fa-trash-o"/>
                </button>
            </div>
        </li>
    );
}