import React from 'react';
import './index.scss';
import {buildClassName} from "../../services/classNameService";

export function Card({children, className}) {
    return (
        <div className={buildClassName(['card', className])}>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}



