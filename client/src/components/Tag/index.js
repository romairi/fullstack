import React from 'react';
import './index.scss';
import _ from 'lodash';
import Chip from "@material-ui/core/Chip";

function Tag({id, children, onDeleteClicked = _.noop}) {
    return (
        <div className="tag_items">
            <Chip
                className="chip_tag_item"
                onDelete={() => onDeleteClicked(id)}
                label={children}
                variant="default"
            />
        </div>
    );
}

export default Tag;
