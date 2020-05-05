import React from 'react';
import "./index.scss";
import {buildClassName} from "../../services/classNameService";

export default function Button({children, inverse, className, ...resProps}) {
    return (
        <button className={buildClassName(['btn', inverse && 'inverse', className])} {...resProps}>
            {children}
        </button>
    );
};