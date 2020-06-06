import React from 'react';
import './index.scss';
import {AVAILABLE_STATUSES_BY_STATUS, NAME_BY_STATUS} from "../../../constants";
import Button from '@material-ui/core/Button';

export default class TodoListItem extends React.Component {

    renderChangeStatusButtons() {
        const {todoId, status, onChangeStatusClicked} = this.props;
        return AVAILABLE_STATUSES_BY_STATUS[status].map((status, idx) => (
            <Button
                className="todo-list-item-btn"
                variant="contained"
                color="inherit"
                key={`${idx}_${status}`}
                onClick={() => onChangeStatusClicked(todoId, status)}>
                {NAME_BY_STATUS[status]}
            </Button>
        ));
    }

    render() {
        const {todoId, title, status, onRemoveClicked} = this.props;
        const classNameStatus = `list-group-item ${status ? `status_${status}` : ''}`;

        return (
            <li className={classNameStatus}>
                <div className="item_title">
                    {title}
                </div>
                <div className="item_options">
                    {this.renderChangeStatusButtons()}
                    <Button
                        className="todo-list-item-btn"
                        variant="contained"
                        color="inherit"
                        onClick={() => onRemoveClicked(todoId)}>
                        <i className="fa fa-trash-o icon"/>
                    </Button>
                </div>
            </li>
        );
    }
}
