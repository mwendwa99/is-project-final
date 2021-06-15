import React from 'react';
import { makeStyles, Grid, Paper, Typography } from '@material-ui/core';

import { assets } from '../Assets/Index';
import SearchBar from './SearchBar';
import Map from './Map';
import Spots from './Spots';

const UseStyle = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "row",
        gap: 10
    },
    searchBar: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    text: {
        padding: theme.spacing(2)
    }
}));

export default function SimpleContainer() {

    const classes = UseStyle()

    return (
        <div className='body__section' >
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={5}
                className={classes.root}
            >
                <Grid sm={5} md={5} lg={5} item>
                    <img height="auto" width="100%" src={assets.map} alt="map-illustration" />
                </Grid>
                <Grid className={classes.text} sm={5} md={5} lg={5}  >
                    <Typography variant='h1' >find a space in Nairobi, CBD</Typography>
                    <div className={classes.searchBar} >
                        <SearchBar />
                    </div>
                    <Typography variant='body1' >Parking in the CBD has just been made easier! <br />
                        Save-A-Spot is an application designed for motorists who need a parking space within the CBD.
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                justify="center"
                alignItems="center"
            >
                <Map />
            </Grid>
            <Grid
                container
                justify="center"
                alignItems="center"
            >
                <Spots />
            </Grid>
        </div >
    );
}
