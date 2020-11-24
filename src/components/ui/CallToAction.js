import React from 'react';
import {Grid, makeStyles, Typography, useTheme} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow';

import backGround from '../../assets/background.jpg';
import mobileBackGround from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
    learnButton: {
        borderColor: theme.palette.common.arcBlue,
        color: theme.palette.common.arcBlue,
        borderWidth: 2,
        borderRadius: 20,
        height: 45,
        width: 145,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    },
    background: {
        backgroundImage: `url(${backGround})`,
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileBackGround})`,
            backgroundAttachment:'inherit',
        },
        backgroundAttachment:'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
    }
}));

export default function CallToAction() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Grid container style={{height: '60em'}} alignItems='center' justify='space-between' className={classes.background} direction='row'>
            <Grid item style={{marginLeft: '5em'}} >
                <Grid container direction="column" >
                    <Grid item>
                        <Typography variant='h2'>
                            Simple Software <br/> Revolutionary Results.
                        </Typography>
                        <Typography variant='subtitle2'>
                            Take advantage of the 21st Century.
                        </Typography>

                        <Grid container>
                            <Button variant='outlined' className={classes.learnButton}>
                                <span style={{marginRight: 5}}>Learn More</span>
                                <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
                <Button variant='contained'>
                    Free Estimate
                </Button>
            </Grid>
        </Grid>
    );
}
