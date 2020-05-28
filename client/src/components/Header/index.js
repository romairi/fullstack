import React from 'react';
import './index.scss'
import {LOGIN_ROUTE} from '../../routes/constants';


export default function Header() {
    return (
        <header className="header">
            <nav className="main-nav">
                <ul className="main-nav-items">
                    <li className="main-nav-item">
                        <a href='/'>Logout</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}