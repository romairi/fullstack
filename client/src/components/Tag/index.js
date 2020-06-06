import React from 'react';
import _ from 'lodash';
import './index.scss';

function Tag({id, children, onDeleteClicked=_.noop}) {
    return (
        <div className="tag_item">
            {children}
            <span className="tag_item_delete_button" onClick={() => onDeleteClicked(id)}>X</span>
        </div>
    );
}

export default Tag;
