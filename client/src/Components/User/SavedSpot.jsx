// this file handles "my spot section of the app"
import React, { useEffect } from 'react';
import Assets from '../../Assets/Index'
import { makeStyles, Typography, Button, Grid, Paper, Container, Fade } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons'
import { Link, useHistory } from 'react-router-dom';

import { useController } from '../../Context/ControllerContext';
import { useOrgContext } from '../../Context/OrgContext'

const UseStyle = makeStyles((theme) => ({
    root: {
        height: '100%',
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#EDF5E0',
    },
    gridContainer: {
        padding: theme.spacing(2),
    },
    imageContainer: {
        height: "20%",
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    paper: {
        padding: theme.spacing(4),
        backgroundColor: '#05386b',
        backgroundImage: Assets.blueContour,
    },
    cards: {
        padding: theme.spacing(2)
    }
}))

export const SaveError = () => {
    const classes = UseStyle();

    return (
        <div className='body__section' >
            <Container maxWidth='sm' className={classes.root}>
                <Grid container className={classes.gridContainer}>
                    <Grid item sm={12} >
                        <Paper className={classes.paper} style={{ height: '50vh', textAlign: 'center' }}>
                            <img src={Assets.favicon} alt="logo" />
                            <Typography style={{ color: '#fff' }} variant='h1' align='center' gutterBottom='true'>
                                You haven't made any bookings.
                                <br />
                                Find a Space?
                            </Typography>
                            <Button variant='contained' fontSize='medium' >
                                <Link to='/' style={{ color: 'white' }}>
                                    search
                                </Link>
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export const SavedSpot = () => {
    const classes = UseStyle();
    const { bookings, getBookings, message, deleteBooking, setUpdate, setBookingId } = useController();
    const { getOrgById } = useOrgContext();
    const history = useHistory();

    useEffect(() => {
        return getBookings();
    }, [getBookings])

    // delete from db
    const deleteSpot = (id) => {
        deleteBooking(id);
    }

    // edit selection
    const editSpot = (spotId, bookingId) => {
        getOrgById(spotId);
        setUpdate(true);
        setBookingId(bookingId);
        history.push('/details');
    }


    return bookings ? (
        <Fade in timeout={1000}>
            <div className='body__section'>
                <Container maxWidth='xl' className={classes.root}>
                    <Grid className={classes.imageContainer}>
                        <img src={Assets.cat} height="10%" width="50%" alt="" />
                        <Typography variant='h1' align='center'>Your Reservations</Typography>
                        <Typography variant='body1' style={{ color: '#ff6347' }} align='center'>{message}</Typography>
                    </Grid>
                    <Grid container className={classes.paper}>
                        {
                            bookings.map((item, index) =>
                                <Grid className={classes.cards} item sm={6} xs={6} md={6} lg={6}>
                                    <Paper style={{ padding: '2.5rem', backgroundColor: '#EDF5E0' }} key={index}>
                                        <Typography variant='body1' align='center'>
                                            approval status:
                                            {
                                                item.approved ? 'approved' : 'pending'
                                            }
                                        </Typography>
                                        <Typography variant='h5'>
                                            <b>Name:</b> {item.name}
                                        </Typography>
                                        <Typography variant='h5'>
                                            <b>Location:</b> {item.location}
                                        </Typography>
                                        <Typography variant='h5'>
                                            <b>Features:</b> {item.features}
                                        </Typography>
                                        <Typography variant='h5'>
                                            <b>Booked at price:</b> {item.price}
                                        </Typography>
                                        <Typography variant='h5'>
                                            <b>Booked on date:</b> {item.day}
                                        </Typography>
                                        <Typography variant='h5'>
                                            <b>Description:</b> {item.description}
                                        </Typography>
                                        <Typography variant='h5'>
                                            <b>Number of Spaces:</b> {item.spaces}
                                        </Typography>
                                        <Typography gutterBottom variant='h5'>
                                            <b>Booked by:</b> {item.email}
                                        </Typography>
                                        <Grid item sm={12} style={{ display: 'flex', justifyContent: 'space-around' }}>
                                            <div>
                                                <Button variant='contained' onClick={() => deleteSpot(item._id)}>
                                                    <Delete />delete
                                                </Button>
                                            </div>
                                            <div>
                                                <Button variant='contained' onClick={() => editSpot(item.spotId, item._id)}>
                                                    <Edit /> edit
                                                </Button>
                                            </div>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            )
                        }
                    </Grid>
                </Container>
            </div >
        </Fade>
    )
        : <SaveError />
}

