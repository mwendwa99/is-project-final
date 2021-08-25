import React from 'react';
import Assets from '../../Assets/Index'
import { makeStyles, Typography, Button, Grid, Paper, Divider, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';


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
    gridItem: {
        // padding: theme.spacing(2),
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
        padding: theme.spacing(1),
        // backgroundColor: '#EDF5E0',

        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        // justifyContent: 'stretch',
    },
    gridContainer2: {
        borderRadius: 10,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
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

    const classes = UseStyle()

    return (
        <div className='body__section'>
            <Container maxWidth='lg' className={classes.root}>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    className={classes.gridContainer2}
                >
                    <Grid item sm={6}>
                        <Paper className={classes.paper2}>
                            <img src={Assets.savedSpot} height="100%" width="100%" alt="" />
                            <Typography align='justify'>Name, locaiton</Typography>
                            <Typography align='justify'>features: </Typography>
                            <Typography align='justify'>Booked at price</Typography>
                            <Typography align='justify'>Book on date</Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={6} >
                        <Paper className={classes.paper2} style={{ height: "100%", }}>
                            <Typography variant='body1' gutterBottom='true' >saved spot for: car number plate</Typography>
                            <Typography gutterBottom='true'>Description: a great place for business etc etc </Typography>
                            <Typography gutterBottom='true'>opening hours: 07:00</Typography>
                            <Typography gutterBottom='true'>closing hourse: 17:00</Typography>
                            <Divider variant='middle' component='hr' />
                            <Typography gutterBottom='true'>distance: 800m</Typography>
                            <Typography gutterBottom='true'>Space: 1 space</Typography>
                            <Typography gutterBottom='true'>vehicle type: car</Typography>
                            <Button variant='contained' size='large'>cancel reservation </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

        </div >
    )
}

