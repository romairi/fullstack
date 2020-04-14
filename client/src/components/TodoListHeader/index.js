import React from 'react';
import './index.css';
import AddForm from "../../AddForm";

export default function TodoListHeader(){
    return (
        <div className="todo-list-header">
            <AddForm/>
        </div>
    );
}