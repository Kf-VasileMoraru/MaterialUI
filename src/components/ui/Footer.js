import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import footerAdorment from '../../assets/Footer Adornment.svg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.arcBlue,
        width: '100%',
        zIndex: 1302,
        position: 'relative'
    },
    adorment: {
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('md')]: {
            width: '20em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '15em'
        },
    },
    mainContainer: {
        position: 'absolute'
    },
    link: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '0.75rem',
        fontWeight: 'bold'
    }

}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Grid container justify={'center'} className={classes.mainContainer}>
                <Grid item>
                    <Grid container direction={'column'}>
                        <Grid item className={classes.link}>Vasea</Grid>
                    </Grid>
                </Grid>
            </Grid>
            <img src={footerAdorment} alt="photo" className={classes.adorment}/>
        </footer>
    );

}
