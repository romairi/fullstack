import React from 'react';
import './index.scss';
import {buildClassName} from "../../services/classNameService";

export default function TextField({className, label, ...resProps}) {
    const [onFocus, setOnFocus] = React.useState(false);

    console.log(onFocus);
    return (
        <div className={buildClassName(['text_field', className])}>
            <span className={buildClassName(['text_field_label', onFocus && 'focus'])}>{label}</span>
            <input className="text_field_input" placeholder={onFocus ? '' : label} onFocus={() => setOnFocus(true)} onBlur={() => setOnFocus(false)} {...resProps} />
        </div>
    );
}