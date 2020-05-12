import React from 'react';
import './index.scss';
import _ from 'lodash';
import {buildClassName} from "../../services/classNameService";

export default function TextField({className, label, helperText, error, onChange = _.noop, onFocus = _.noop, onBlur = _.noop, ...resProps}) {
    const [onFocusValue, setOnFocus] = React.useState(false);
    const [isEmptyField, setIsEmptyField] = React.useState(true);

    const onChangeCb = event => {
        setIsEmptyField(event.target.value.length === 0);
        onChange(event);
    };

    const onFocusCb = event => {
        setOnFocus(true);
        onFocus(event);
    };

    const onBlurCb = event => {
        setOnFocus(false);
        onBlur(event);
    };

    return (
        <div className={buildClassName(['text_field', error && 'error', className])}>
            <span
                className={buildClassName(['text_field_label', (onFocusValue || !isEmptyField) && 'focus'])}>{label}</span>
            <input
                className='text_field_input'
                placeholder={onFocusValue ? '' : label}
                onFocus={onFocusCb}
                onBlur={onBlurCb}
                onChange={onChangeCb}
                {...resProps}
            />
            <span className='text_field_helper_text'>{helperText}</span>
        </div>
    );
}