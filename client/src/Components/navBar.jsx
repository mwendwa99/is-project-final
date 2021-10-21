import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Assets from '../Assets/Index.js';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext.js';

const UseStyles = makeStyles((theme) => ({
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
    const classes = UseStyles();
    let history = useHistory();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        localStorage.clear();
        history.push('/')
    }

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
                        <Link style={{ textDecoration: 'none' }} to='/saved'>
                            <img src={Assets.spots} alt="car-spot" />
                        </Link>
                    </Button>
                    <Button variant="text" color="primary" size='large' onClick={handleLogout} >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </div >
    );
}
