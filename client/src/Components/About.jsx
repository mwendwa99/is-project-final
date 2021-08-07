import React from 'react';
import { Container, Grid, Typography, Divider, Paper, makeStyles } from '@material-ui/core';
import { Email, GitHub, LinkedIn } from '@material-ui/icons';
import Assets from '../Assets/Index'

const UseStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: "red",
        height: "100%",
        paddingTop: theme.spacing(1),
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        // alignItems: 'center',
    },
    paper: {
        backgroundColor: '#EDF5E0',
        borderRadius: 10,
        padding: theme.spacing(1)
    },
    aboutSection: {
        height: "100%",
        backgroundColor: "#EDF5E0",
        padding: theme.spacing(2),
        // flex: 1,
    },
    contacts: {
        flexDirection: 'column',
        // backgroundColor: "red",

    }
}))

const About = () => {

    const classes = UseStyles();

    return (
        <div className="body__section">
            <Container maxWidth='lg' className={classes.root}>
                <Grid container>
                    <Grid item md={6}>
                        <div style={{ display: 'flex', justifyContent: 'center' }} >
                            <img
                                style={{ objectFit: 'contain' }}
                                // width="100%" height="600px" 
                                src={Assets.busyStreet} alt="" />
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        {/* <div > */}
                        <Paper className={classes.paper}>
                            <Typography variant='h1'>About</Typography>
                            <Typography>The motivation behind Save A Spot is to reduce the hassle it takes for motorists to get parking space
                                within the CBD as well as to reduce effort the NCCG takes to enforce the rules of parking in the CBD.
                                <br />
                                <br />
                                Save A Spot presents an opportunity for motorists to conveniently secure a parking space within the Central Business District.
                                With just a few clicks, a user can retrieve information about free spaces available, price of the allocated space and their booking information all through the internet.
                            </Typography>
                        </Paper>
                        {/* </div> */}
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

export default About
