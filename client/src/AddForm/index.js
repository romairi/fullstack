import React from 'react';
import './index.css';


export default function AddForm() {
    return (
        <div className="add-form">
            <form className="form-inline justify-content-sm-start mb-2 ">
                <div className="form-group mx-sm-1 mb-2 mt-2">
                    <input type="text" className="form-control" placeholder="new task"/>
                </div>
                <button className="btn btn-primary mb-2 mt-2">
                    add
                </button>
            </form>
        </div>
    );
}
