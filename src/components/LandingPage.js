import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import ButtonArrow from './ui/ButtonArrow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
    }

}));

export default function LandingPage() {
    const classes = useStyles();
    const theme = useTheme();


    return (
        <Grid container direction={'column'}>
            <Grid item>{/*--------------1----------------*/}
                <Grid container justify={'center'} alignItems={'center'} spacing={4}>
                    <Grid item sm>
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
                    <Grid item sm>
                        <div style={{height: '400px', width: '400px', background: '#cc8989'}}></div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>{/*--------------2----------------*/}
                <Grid container direction='row'>
                    <Grid item>
                        <Typography variant='h4'>
                            Custom software development
                        </Typography>
                        <Typography variant='subtitle1'>
                            Save Energy. Save Energy. Save Energy.
                        </Typography>
                        <Typography variant='subtitle1'>
                            Cstom software development, ustom software development
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );

}
