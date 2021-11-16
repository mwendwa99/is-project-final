import { Container, Grid, Paper, Typography, makeStyles, Fab } from '@material-ui/core';
import { CheckCircle, HighlightOff } from '@material-ui/icons';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


const useStyles = makeStyles(theme => ({
    gridContainer: {
        backgroundColor: '#05386b',
        borderRadius: '10px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    cards: {
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        backgroundColor: '#EDF5E0',
    },
    button: {
        display: 'flex', justifyContent: 'center', alignItems: 'flex-end'
    }

}))

const Bookings = () => {
    const [list, setList] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        axios.get('/get-controller')
            .then(res => setList(res.data))
            .catch(err => console.log(err))
    }, [list]);

    // function to approve booking
    const approveBooking = (id) => {
        axios.put(`/approve-controller/${id}`)
            .then(response => {
                // set response.data to list array
                setList([response.data])
            })
            .catch(err => console.log(err))
    }

    // function to reject booking
    const rejectBooking = (id) => {
        axios.put(`/reject-controller/${id}`)
            .then(response => {
                // console.log([response.data])
                setList([response.data])
            })
            .catch(err => console.log(err))
    }


    return (
        <Container maxWidth='lg' style={{ minHeight: '100vh' }}>
            <Grid container className={classes.gridContainer} >
                {
                    list.map((item, index) =>
                        <Grid item className={classes.cards} sm={6} xs={6} md={6} lg={6}>
                            <Paper className={classes.paper} key={index}>
                                <Typography gutterBottom variant='h1' align='center'>
                                    username: {item.email}
                                </Typography>
                                <Typography variant='h5'>
                                    <b>organization</b> {item.name}
                                </Typography>
                                <Typography variant='h5'>
                                    <b>Location:</b> {item.location}
                                </Typography>
                                <Typography variant='h5'>
                                    <b>Booked at price:</b> {item.price}
                                </Typography>
                                <Typography variant='h5'>
                                    <b>Booked on date:</b> {item.day}
                                </Typography>
                                <Typography variant='h5'>
                                    <b>spaces booked:</b> {item.spaces}
                                </Typography>
                                <div className={classes.button}>
                                    {
                                        item.approved ?
                                            <Fab
                                                onClick={() => rejectBooking(item._id)}
                                                style={{ backgroundColor: '#ff6347', margin: '1rem' }}
                                                variant='extended' size='large'>
                                                <span>Reject</span>
                                                <HighlightOff />
                                            </Fab> :
                                            <Fab
                                                onClick={() => approveBooking(item._id)}
                                                style={{ backgroundColor: '#58dd90', margin: '1rem' }}
                                                variant='extended' size='large'>
                                                <span>Approve</span>
                                                <CheckCircle />
                                            </Fab>

                                    }
                                </div>
                            </Paper>
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    )
}

export default Bookings
