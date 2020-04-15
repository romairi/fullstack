import React from 'react';
import './index.css';
import Header from "../../components/Header";
import TodoListContainer from "../TodoListContainer";
import Footer from "../../components/Footer";

function App() {
    return (
        <div className="app-container">
            <Header/>
            <div className="content container">
                <TodoListContainer/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
