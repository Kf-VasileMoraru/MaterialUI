import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import logo from '../../assets/logo.svg';

//https://material-ui.com/components/app-bar/
export default function Header(props) {

    const useStyles = makeStyles(theme => ({
        toolbarMargin: {
            ...theme.mixins.toolbar,
            marginBottom:'2em'
        },
        logo: {
            height: '6em'
        }
    }));

    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' color='primary'>
                <Toolbar disableGutters>
                    {/*<Typography variant='h5' color='secondary'> Ceva development </Typography>*/}
                    <img src={logo} className={classes.logo} alt="logo"/>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin}/>
        </>
    );
}