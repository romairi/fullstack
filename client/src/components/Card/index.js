import React from 'react';


export function Card({children, size}) {
    return (
        <div className="card col-lg-5">
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}



