import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

import Button from './components/common/Button';
import Spots from './Spots';
import SearchBar from './components/common/SearchBar';
import Assets from '../Assets/Index';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "100%",
    },
}));

const Home = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');
        if (authToken) {
            navigate('/home');
        }
        if (!authToken) {
            navigate('/');
        }
    }, []);

    const logout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/');
    };

    return (
        <div className='body__section' >
            <Typography variant='h1' align='center' >
                HOME
            </Typography>
            <Button handleAction={logout} title='Logout' />
            {/* <Grid container direction="row" justifyContent="center" alignItems="center" spacing={5} className={classes.root}>
                <Grid item sm={6} md={6} lg={6}>
                    <img height="auto" width="100%" src={Assets.map} alt="map-illustration" />
                </Grid>
                <Grid item className={classes.text} sm={6} md={6} lg={6} >
                    <Typography variant='h1' align='center'>find a space in Nairobi, CBD</Typography>
                    <SearchBar />
                </Grid>
                <Grid item sm={12}>
                    <Typography align="center" variant="h1"> Parking Lots </Typography>
                    <Spots />
                </Grid>
            </Grid> */}
        </div >
    );
}

export default Home;