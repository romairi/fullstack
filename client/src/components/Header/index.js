import React from 'react';
import './index.scss'
import {LOGIN_ROUTE} from '../../routes/constants';
import {Link} from "react-router-dom";


export default function Header() {
    return (
        <header className="header">
            <nav className="main-nav">
                <ul className="main-nav-items">
                    <li className="main-nav-item">
                        <Link to={LOGIN_ROUTE}>Logout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}