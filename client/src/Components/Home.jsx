import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import Assets from '../Assets/Index';
import SearchBar from './SearchBar';
import Spots from './Spots';

import { OrgProvider } from '../Context/OrgContext';

const UseStyle = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "100%",
    },
}));

const Home = () => {
    const classes = UseStyle();

    return (
        <div className='body__section' >
            <OrgProvider>
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={5} className={classes.root}>
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
                </Grid>
            </OrgProvider>
        </div >
    );
}

export default Home;