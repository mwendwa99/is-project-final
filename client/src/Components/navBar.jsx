import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { assets } from '../Assets/Index'

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

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar variant='regular'>
                    <Button className='button-image__logo' variant="text">
                        <img src={assets.logo} alt="logo" />
                    </Button>
                    <Button className='button-image__spot' >
                        <img src={assets.spots} alt="car-spot" />
                    </Button>
                    <Button variant="text" color="primary" size='large'>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
