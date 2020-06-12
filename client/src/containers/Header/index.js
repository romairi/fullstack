import React from 'react';
import './index.scss'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SimpleMenu from "../Menu";


export default function Header() {

    return (
        <div className="header">
            <AppBar position="static">
                <Toolbar>
                    <SimpleMenu/>
                </Toolbar>
            </AppBar>
        </div>
    )
}
