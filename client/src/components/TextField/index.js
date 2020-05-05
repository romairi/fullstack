import React from 'react';
import './index.scss';
import {buildClassName} from "../../services/classNameService";

export default function TextField({className, label, helperText, error, onChange, ...resProps}) {
    const [onFocus, setOnFocus] = React.useState(false);
    const [isEmptyField, setIsEmptyField] = React.useState(true);

    const onChangeCb = event => {
        setIsEmptyField(event.target.value.length === 0);
        onChange(event);
    };

    return (
        <div className={buildClassName(['text_field', error && 'error', className])}>
            <span className={buildClassName(['text_field_label', (onFocus || !isEmptyField) && 'focus'])}>{label}</span>
            <input
                className='text_field_input'
                placeholder={onFocus ? '' : label}
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
                onChange={onChangeCb}
                {...resProps}
            />
            <span className='text_field_helper_text'>{helperText}</span>
        </div>
    );
}