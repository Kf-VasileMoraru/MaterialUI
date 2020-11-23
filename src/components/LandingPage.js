import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Grid, useMediaQuery} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonArrow from './ui/ButtonArrow';
import customSoft from '../assets/Custom Software Icon.svg';
import mobileApp from '../assets/mobileIcon.svg';
import webSite from '../assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.arcOrange,
        borderRadius: 20,
        height: 45,
        width: 145,
        marginRight: 40,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    },
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
    buttonContainer: {
        marginTop: '1em'
    },
    icon: {
        width:200,
        marginLeft: '2em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0em'
        },
    },
    serviceContainer: {
        marginTop: '6em',
        [theme.breakpoints.down('sm')]: {
            padding: 25
        },
    }

}));

export default function LandingPage() {
    const classes = useStyles();
    const theme = useTheme();
    const machesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container direction={'column'}>
            <Grid item>{/*--------------1----------------*/}6
                <Grid container justify={'center'} alignItems={'center'}>
                    <Grid item sm style={{minWidth: '21em'}}>
                        <Typography align='center' variant={'h2'}>Bring wet coast technology <br/> to the
                            MidWest</Typography>
                        <Grid container justify={'center'} className={classes.buttonContainer}>
                            <Grid item>
                                <Button variant='contained' className={classes.estimateButton}>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' className={classes.learnButton}>
                                    <span style={{marginRight: 5}}>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container sm justify={'center'}>
                        <div style={{height: '400px', width: '400px', background: '#cc8989'}}></div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.serviceContainer}> {/*--------------2----------------*/}
                <Grid container direction='row' justify={machesSM ? 'center' : undefined}>
                    <Grid item style={{marginLeft: machesSM ? 0 : '5em', textAlign: machesSM ? 'center' : undefined}}>
                        <Typography variant='h4'> Custom software development </Typography>
                        <Typography variant='subtitle1'>Save Energy. Save Energy. Save Energy.</Typography>
                        <Typography variant='subtitle1'>Cstom software development, ustom software
                            development</Typography>
                        <Button variant='outlined' className={classes.learnButton}>
                            <span style={{marginRight: 5}}>Learn More</span>
                            <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue}/>
                        </Button>
                    </Grid>
                    <Grid item className={classes.icon}>
                        <img src={customSoft} alt="photo"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.serviceContainer}> {/*--------------3----------------*/}
                <Grid container direction='row' justify={machesSM ? 'center' : 'flex-end'}>
                    <Grid item style={{ textAlign: machesSM ? 'center' : undefined}}>
                        <Typography variant='h4'> Custom software development </Typography>
                        <Typography variant='subtitle1'>Save Energy. Save Energy. Save Energy.</Typography>
                        <Typography variant='subtitle1'>Cstom software development, ustom software
                            development</Typography>
                        <Button variant='outlined' className={classes.learnButton}>
                            <span style={{marginRight: 5}}>Learn More</span>
                            <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue}/>
                        </Button>
                    </Grid>
                    <Grid item className={classes.icon} style={{marginRight: machesSM ? 0 : '5em'}}>
                        <img src={mobileApp} alt="photo"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.serviceContainer}> {/*--------------4----------------*/}
                <Grid container direction='row' justify={machesSM ? 'center' : undefined}>
                    <Grid item style={{marginLeft: machesSM ? 0 : '5em', textAlign: machesSM ? 'center' : undefined}}>
                        <Typography variant='h4'> Custom software development </Typography>
                        <Typography variant='subtitle1'>Save Energy. Save Energy. Save Energy.</Typography>
                        <Typography variant='subtitle1'>Cstom software development, ustom software
                            development</Typography>
                        <Button variant='outlined' className={classes.learnButton}>
                            <span style={{marginRight: 5}}>Learn More</span>
                            <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue}/>
                        </Button>
                    </Grid>
                    <Grid item className={classes.icon}>
                        <img src={webSite} alt="photo"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );

}
