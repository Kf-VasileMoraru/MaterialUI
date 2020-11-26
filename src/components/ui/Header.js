import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import logo from '../../assets/logo.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useMediaQuery} from '@material-ui/core';


// https://material-ui.com/components/menus/
// https://material-ui.com/components/buttons/#text-buttons
// https://material-ui.com/components/tabs/
// import Typography from '@material-ui/core/Typography';
// https://material-ui.com/components/app-bar/
// https://mui-treasury.com/

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '1em'
        }
    },
    logo: {
        height: '8em',
        [theme.breakpoints.down('md')]: {
            height: '5em'
        }
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px',
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '25px',
        marginLeft: '50px',
        marginRight: '25px',
        height: '45px',
    },
    logoContainer: {
        padding: '0px',
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    menu: {
        backgroundColor: theme.palette.common.arcBlue,
        color: 'white',
        borderRadius: '10px'
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        '&:hover': {
            opacity: 1
        }
    }

}));


export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    // eslint-disable-next-line react/prop-types
    const {value, setValue} = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleCchange = (e, value) => {
        setValue(value);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpen(false);
    };
    const handleMenuClick = (e, i) => {
        setAnchorEl(null);
        setOpen(false);
        setSelectedIndex(i);
    };

    const menuOptions = [
        {name: 'Services', link: '/services'},
        {name: 'Custom Software', link: '/customsoft'},
        {name: 'MobileDevelop', link: '/mobile'},
        {name: 'WebDev', link: '/web'},
    ];

    useEffect(() => {
        if (window.location.pathname === '/' && value !== 0) {
            setValue(0);
        } else if (window.location.pathname === '/services' && value !== 1) {
            setValue(1);
        } else if (window.location.pathname === '/revolution' && value !== 2) {
            setValue(2);
        } else if (window.location.pathname === '/about' && value !== 3) {
            setValue(3);
        }
    }, []);

    const tabs = (
        <>
            <Tabs value={value} onChange={handleCchange} className={classes.tabContainer}
                indicatorColor={'secondary'}>
                <Tab component={Link} to='/' className={classes.tab} label='Home'></Tab>
                <Tab component={Link} to='/services' className={classes.tab} label='Service'
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup={anchorEl ? 'true' : undefined}
                    // onClick={e=>handleClick(e)}
                    onMouseOver={e => handleClick(e)}/>
                <Tab component={Link} to='/revolution' className={classes.tab} label='The Revolution'></Tab>
                <Tab component={Link} to='/about' className={classes.tab} label='About Us'></Tab>
                <Tab component={Link} to='/contact' className={classes.tab} label='Contact Us'></Tab>
            </Tabs>
        </>
    );
    return (
        <>
            <AppBar position='fixed' color='primary' style={{maxWidth: 1300, right: 'auto'}}>
                <Toolbar disableGutters>
                    {/*<Typography variant='h5' color='secondary'> Ceva development </Typography>*/}

                    <Button component={Link} to='/' className={classes.logoContainer} onClick={() => setValue(0)}
                        disableRipple>

                        <img src={logo} className={classes.logo} alt="logo"/>
                    </Button>
                    {matches ? null : tabs}
                    <Button variant='contained' color={'secondary'} className={classes.button}>Free
                        Estimate</Button>
                    <Menu id={'simple-menu'} anchorEl={anchorEl} open={open} onClose={handleClose}
                        MenuListProps={{onMouseLeave: handleClose}} classes={{paper: classes.menu}}
                        elevation={0}>
                        {menuOptions.map((option, i) => (
                            <MenuItem
                                key={option}
                                component={Link} to={option.link}
                                classes={{root: classes.menuItem}}
                                onClick={(event) => {
                                    handleClose();
                                    setValue(1);
                                    handleMenuClick(event, i);
                                }}
                                selected={i === selectedIndex && value === 1}
                            > {option.name} </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin}/>

        </>
    );
}


// <Menu id={'simple-menu'} anchorEl={anchorEl} open={open} onClose={handleClose}
//       MenuListProps={{onMouseLeave: handleClose}} classes={{paper: classes.menu}}
//       elevation={0}>
//     <MenuItem onClick={() => {
//         handleClose();
//         setValue(1);
//     }} component={Link} to='/services'
//               classes={{root:classes.menuItem}}> Services </MenuItem>
//     <MenuItem onClick={() => {
//         handleClose();
//         setValue(1);
//     }} component={Link} to='/customsoft'
//               classes={{root:classes.menuItem}}> Custom Software </MenuItem>
//     <MenuItem onClick={() => {
//         handleClose();
//         setValue(1);
//     }} component={Link} to='/mobile'
//               classes={{root:classes.menuItem}}> MobileDevelop </MenuItem>
//     <MenuItem onClick={() => {
//         handleClose();
//         setValue(1);
//     }} component={Link} to='/web'
//               classes={{root:classes.menuItem}}> WebDev </MenuItem>
// </Menu>
