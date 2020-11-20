import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//https://material-ui.com/components/app-bar/
export default function Header(props) {
    return (
        <AppBar position='fixed' color='primary'>
            <Toolbar>
                <Typography variant='h6'>
                    Ceva development
                </Typography>
            </Toolbar>
        </AppBar>
    );
}