import React from 'react';
import { makeStyles, Grid, Paper, Typography } from '@material-ui/core';

import { assets } from '../Assets/Index';
import SearchBar from './SearchBar';

const UseStyle = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
    containers: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
    },
}));

export default function SimpleContainer() {

    const classes = UseStyle()

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.root}
        >
            <Grid sm={5} item="sm" >
                <img src={assets.map} alt="map-illustration" />
            </Grid>
            <Grid sm={5} className={classes.containers} >
                <Grid item="xs" >
                    <Typography variant='h1' >find a space in Nairobi, CBD</Typography>
                </Grid>
                <Grid item="xs" style={{ paddingBottom: "1rem" }}>
                    <SearchBar />
                </Grid>
                <Grid item="xs" style={{ paddingTop: "5rem" }}>
                    <Typography variant='body1' >Parking in the CBD has just been made easier! <br />
                    Save-A-Spot is an application designed for motorists who need a parking space within the CBD.
                </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}
