import React, { useEffect } from 'react';
import { makeStyles, Grid, Container, Typography } from '@material-ui/core';
import { useAuth } from '../Context/AuthContext';
import Assets from '../Assets/Index';
import SearchBar from './SearchBar';
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
        paddingBottom: theme.spacing(3),
    },
    text: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    }
}));

export default function SimpleContainer() {

    const classes = UseStyle();


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
                    <Grid sm={6} md={6} lg={6} item>
                        <img height="auto" width="100%" src={Assets.map} alt="map-illustration" />
                    </Grid>
                    <Grid className={classes.text} sm={6} md={6} lg={6}  >
                        <Typography variant='h1' >find a space in Nairobi, CBD</Typography>
                        <div className={classes.searchBar} >
                            <SearchBar />
                        </div>
                    </Grid>
                </Grid>
                <Container maxWidth='md'>
                    <Typography variant="h1"> Top spots </Typography>
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
