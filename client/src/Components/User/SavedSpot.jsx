import React from 'react';
import Assets from '../../Assets/Index'
import { makeStyles, Typography, Button, Grid, Paper, Divider, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSavedValue } from '../../Context/AuthContext';

const UseStyle = makeStyles((theme) => ({
    root: {
        height: '100%',
        padding: theme.spacing(2),
    },
    gridContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    paper: {
        borderRadius: 10,
        backgroundColor: '#EDF5E0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        padding: theme.spacing(1),
    },
    paper2: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#EDF5E0',
    },
    gridItem: {
        backgroundColor: '#EDF5E0',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpolygon fill='%23000' fill-opacity='.1' points='120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0'/%3E%3C/svg%3E")`,
        height: '100%',
    }
}))

export const SaveError = () => {
    const classes = UseStyle();

    return (
        <div className='body__section' >
            <Container maxWidth='sm' className={classes.root}>
                <Grid container className={classes.gridContainer}>
                    <Grid item sm={12}>
                        <Paper className={classes.paper} >
                            <div style={{ padding: '2rem' }}>
                                <img src={Assets.favicon} alt="logo" />
                            </div>
                            <Typography variant='h5' align='center' gutterBottom='true'>You haven't made any bookings.
                                <br />
                                Find a Space?
                            </Typography>
                            <div style={{ maxWidth: '200px' }} >
                                <Button variant='contained' size='medium' >
                                    <Link to='/'>
                                        search
                                    </Link>
                                </Button>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export const SavedSpot = () => {
    const classes = UseStyle();
    const { userSelectedSpot } = useSavedValue();

    console.log('THIS', userSelectedSpot)

    return userSelectedSpot ? (
        <div className='body__section'>
            <Container maxWidth='xl' className={classes.root}>
                <Grid container style={{ padding: '2rem' }}>
                    <Grid item className={classes.gridItem} sm={6}>
                        <img src={Assets.city} height="100%" width="100%" alt="" />
                    </Grid>
                    <Grid item sm={6} >
                        <div className={classes.paper2} style={{ height: "100%", width: '100%' }}>
                            <img src={Assets.cat} height="20%" width="100%" alt="" />
                            <Typography variant='h2' align='center'>Your Ticket</Typography>
                            <Typography variant='h5'>
                                <b>Name:</b> {userSelectedSpot.name}
                            </Typography>
                            <Typography variant='h5'>
                                <b>Location:</b> {userSelectedSpot.location}
                            </Typography>
                            <Typography variant='h5'>
                                <b>Features:</b> {userSelectedSpot.features}
                            </Typography>
                            <Typography variant='h5'>
                                <b>Booked at price:</b> {userSelectedSpot.price}
                            </Typography>
                            <Typography variant='h5'>
                                <b>Book on date:</b> {userSelectedSpot.day}
                            </Typography>
                            <Typography variant='h5'>
                                <b>Description:</b> {userSelectedSpot.description}
                            </Typography>
                            <Typography variant='h5'>
                                <b>Number of Spaces:</b> {userSelectedSpot.spaces}
                            </Typography>
                            <Typography variant='h5'>
                                <b>Booked by:</b> {userSelectedSpot.email}
                            </Typography>
                            <Button variant='contained' size='large'>cancel reservation </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
        : <SaveError />
}

