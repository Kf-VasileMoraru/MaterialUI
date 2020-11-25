import React, {useState} from 'react';
import {Button, Grid, makeStyles, TextField, Typography, useTheme} from '@material-ui/core';

import background from '../assets/background.jpg';
import xphone from '../assets/phone.svg';
import xemail from '../assets/email.svg';


const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '60em',

    }
}));

export default function Contact() {
    const classes = useStyles();
    const theme = useTheme();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    return (
        <Grid container direction='row'>
            <Grid item container direction='column' justify='center' lg>
                <Grid item>
                    <Typography variant='h2' style={{lineHeight: 1}}> Contact Us</Typography>
                    <Typography variant='body1' style={{color: theme.palette.common.arcBlue}}> We are
                        waiting</Typography>
                </Grid>
                <Grid item container>
                    <Grid item> <img src={xphone} alt="photo" style={{marginRight: '0.5em'}}/> </Grid>
                    <Grid item>
                        <Typography variant='body1' style={{lineHeight: 1}}> 555-555-555</Typography>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item> <img src={xemail} alt="photo" style={{marginRight: '0.5em', verticalAlign: 'middle',}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1' style={{lineHeight: 1}}> sdsad@adsad.com</Typography>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item>
                        <TextField label='Name' id='name' value={name} onChange={e=>setName(e.target.value)}/>
                    </Grid>
                    <Grid item>
                        <TextField label='Phone' id='Phone' value={phone} onChange={e=>setPhone(e.target.value)}/>
                    </Grid>
                    <Grid item>
                        <TextField label='Enmmail' id='Enmmail' value={email} onChange={e=>setEmail(e.target.value)}/>
                    </Grid>
                </Grid>
                <Grid item>
                    <TextField multiline rows={10} id='Enmmail' value={message} onChange={e=>setMessage(e.target.value)}/>
                </Grid>
                <Grid item>
                    <Button variant='contained'> Send Message</Button>
                </Grid>
            </Grid>
            <Grid item container className={classes.background} lg={9}></Grid>
        </Grid>
    );
}
