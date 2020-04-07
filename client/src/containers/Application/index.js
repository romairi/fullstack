import React from 'react';
import './index.css';
import TodoListContainer from '../TodoListContainer';
import Header from "../../components/Header";

function App() {
    return (
        <div className="app_container">
            <Header/>
            <div className="content container">
                <TodoListContainer/>
            </div>
        </div>
    );
}

export default App;
