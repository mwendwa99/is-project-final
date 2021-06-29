import React from 'react';
import {
    Typography, List, ListItem, Grid, Button, Container, Divider, ListItemText, makeStyles
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import Assets from '../Assets/Index'

const UseStyle = makeStyles((theme) => ({
    root: {
        height: "100%",
        background: "#EDF5E0",
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        marginTop: theme.spacing(1),
        padding: theme.spacing(1),
    },
    gridContainer: {
        padding: theme.spacing(0.5),
    },
    imageContainer: {
        height: "20rem",
    },
    priceCard: {
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        padding: theme.spacing(2),
    },
}))

const SpotDetails = () => {

    const classes = UseStyle();

    return (
        <div className='body__section'>
            <Container maxWidth='md' className={classes.root}>
                <Grid container className={classes.gridContainer}>
                    <Grid item sm={12}>
                        <div className={classes.imageContainer}>
                            <img src={Assets.parking} style={{ borderRadius: "20px" }} height="100%" width="100%" alt="" />
                        </div>
                    </Grid>
                </Grid>
                <Grid container className={classes.gridContainer}>
                    <Grid item sm={6} xs={6} >
                        <Typography>Name, Location</Typography>
                        <Typography>Features</Typography>
                    </Grid>
                    <Grid item sm={6} xs={6} className={classes.priceCard}>
                        <Typography>price</Typography>
                        <Divider />
                        <Typography>number of spaces</Typography>
                        <Divider />
                        <Typography>days</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <div><Button variant='contained' size="small"> proceed to pay </Button></div>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

export default SpotDetails
