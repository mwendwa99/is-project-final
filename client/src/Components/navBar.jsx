import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import Assets from '../Assets/Index.js';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar({ logout, user }) {
    const classes = useStyles();

    const [logState, setLogState] = useState('');

    const onLogout = () => {
        logout(logState);
        console.log(user.email)
    }
    useEffect(() => {
        if (user.email !== '') {
            setLogState('Logout')
        } else {
            setLogState('Login')
        }
    }, [user.email])



    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar variant='regular'>
                    <Button className='button-image__logo' variant="text">
                        <Link style={{ textDecoration: "none" }} to='/'>
                            <img src={Assets.logo} alt="logo" />
                        </Link>
                    </Button>
                    <Button className='button-image__spot' >
                        <Link style={{ textDecoration: 'none' }} to='/my-spot'>
                            <img src={Assets.spots} alt="car-spot" />
                        </Link>
                    </Button>
                    <Button variant="text" color="primary" size='large' onClick={onLogout}>
                        {logState}
                    </Button>
                </Toolbar>
            </AppBar>
        </div >
    );
}
