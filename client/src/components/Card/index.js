import React from 'react';
import './index.scss';

export function Card({children}) {
    return (
        <div className="card">
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}



