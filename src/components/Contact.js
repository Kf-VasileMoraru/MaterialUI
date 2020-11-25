import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles,useTheme} from '@material-ui/core';
import {Grid, Typography, Button, TextField} from '@material-ui/core';
import background from '../assets/infoBackground.svg';

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
    }
}));

export default function Contact(){
    const classes = useStyles();
    const theme = useTheme();

    return(
        <Grid container direction='row'>
            <Grid item container direction = 'column' lg>
                <Grid item>
                    <Typography variant='h2' style={{lineHeight: 1}}> Contact Us</Typography>
                    <Typography variant='body1' style={{color: theme.palette.common.arcBlue}}> Contact Us</Typography>
                </Grid>
            </Grid>

        </Grid>
    );
}
