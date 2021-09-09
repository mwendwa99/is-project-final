import React from 'react';
import { makeStyles, Grid, Container, Typography } from '@material-ui/core';

import Assets from '../Assets/Index';
import SearchBar from './SearchBar';
import Map from './Map';
import Spots from './Spots';
import Footer from './Footer';

const UseStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: theme.spacing(2),
        alignItems: "center",
        maxWidth: "98vw",

    },
    searchBar: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    text: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    }
}));

export default function SimpleContainer() {

    const classes = UseStyle()

    return (
        <div>
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
                        <img height="auto" width="100%" src={Assets.map} alt="map-illustration" />
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
                <Grid container justify="center" alignItems="center">
                    <Map />
                    {/* <Gmap /> */}
                </Grid>
                <Container maxWidth='md'>
                    <Typography variant="h1"> Top spots </Typography>
                    {/* map(()=>) on grid container level to iterate with smaller grid and render spots */}
                    <Grid container>
                        <Grid item sm={4} > <Spots /></Grid>
                        <Grid item sm={4} > <Spots /></Grid>
                        <Grid item sm={4} > <Spots /></Grid>
                    </Grid>
                </Container>
            </div >
            <Footer />
        </div>
    );
}
