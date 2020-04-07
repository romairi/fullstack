import React from 'react';
import './index.scss';

export default function TodoListItem({title, status, todoId, onRemoveClicked}) {
    return (
        <li className={`todolist_item ${status ? `status_${status}` : ''}`}>
            <div className="item_title">
                {title}
            </div>
            <div className="item_options">
                <button onClick={() => onRemoveClicked(todoId)}> remove</button>
            </div>
        </li>
    );
}

/**
 *
 * remove
 * set in progress - only for todo or done
 * set done - only for in progress
 * set todo - only for in progress
 **/