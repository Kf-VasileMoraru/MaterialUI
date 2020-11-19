import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

//https://material-ui.com/components/app-bar/
export default function Header(props) {
    return (
        <AppBar>
            <Toolbar>
                Ceva development
            </Toolbar>
        </AppBar>
    );
}