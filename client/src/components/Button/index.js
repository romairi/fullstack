import React from 'react';
import "./index.scss";
import {buildClassName} from "../../services/classNameService";

export default function Button({children, typeBtn, inverse, secondary, className, ...resProps}) {
    return (
        <button
            className={buildClassName(['btn', typeBtn && 'typeBtn', inverse && 'inverse', secondary && 'secondary', className])} {...resProps}>
            {children}
        </button>
    );
};