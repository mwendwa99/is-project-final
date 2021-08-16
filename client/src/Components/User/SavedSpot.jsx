import React from 'react';
import Assets from '../../Assets/Index'
import { makeStyles, Typography, Button, Grid, Paper, Container } from '@material-ui/core';
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
    },
    gridItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
        borderRadius: 20,
        backgroundColor: '#EDF5E0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        '&& Typography': {
            padding: theme.spacing(50)
        }
    },
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
    return (
        <div>

        </div>
    )
}
