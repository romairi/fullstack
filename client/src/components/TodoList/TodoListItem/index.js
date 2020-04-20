import React from 'react';
import './index.scss';
import {AVAILABLE_STATUSES_BY_STATUS, NAME_BY_STATUS} from "../../../constants";

export default class TodoListItem extends React.Component {

    renderChangeStatusButtons() {
        const {todoId, status, onChangeStatusClicked} = this.props;
        return AVAILABLE_STATUSES_BY_STATUS[status].map((status, idx) => (
            <button key={`${idx}_${status}`} className="btn btn-outline-secondary btn-sm"
                    onClick={() => onChangeStatusClicked(todoId, status)}>
                {NAME_BY_STATUS[status]}
            </button>
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
                    <button className="btn btn-outline-danger btn-sm"
                            onClick={() => onRemoveClicked(todoId)}>
                        <i className="fa fa-trash-o"/>
                    </button>
                </div>
            </li>
        );
    }
}