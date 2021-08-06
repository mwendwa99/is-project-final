import React from 'react';
import { Container, Grid, Typography, Divider, makeStyles } from '@material-ui/core';
import { Email, GitHub, LinkedIn } from '@material-ui/icons';
import Assets from '../Assets/Index'

const UseStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: "red",
        height: "100%",
        padding: theme.spacing(1),
        display: "flex",
        justifyContent: "center",
        // alignItems: 'center',
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
                <Grid container style={{ flex: 1 }}>
                    <div style={{ width: '100%' }}>
                        <img width="100%" height='100%' src={Assets.busyStreet} alt="congestion" />
                    </div>
                </Grid>
                {/* <div style={{ padding: 5 }}>
                    <Divider style={{ backgroundColor: 'red' }} orientation='vertical' />
                </div> */}
                <Grid container className={classes.aboutSection}>
                    <Grid item sm={12}>
                        <div style={{}}>
                            <Typography variant='h1' gutterBottom="true">About</Typography>
                            <Typography variant='body2' gutterBottom='true'>
                                The motivation behind Save A Spot is to reduce the hassle it takes for motorists
                                to get parking space within the CBD as well as to reduce effort the NCCG takes to
                                enforce the rules of parking in the CBD.<br /><br />
                                Save A Spot presents an opportunity for motorists to conveniently secure a parking
                                space within the Central Business District. With just a few clicks, a user can retrieve
                                information about free spaces available, price of the allocated space and their booking
                                information all through the internet.
                            </Typography>
                            <Typography variant='h1' gutterBottom='true'>Contacts</Typography>
                            <Typography variant='body2' gutterBottom='true'>
                                Have any suggestions or comments? Reach out to me!
                            </Typography>
                        </div>
                    </Grid>
                    <Grid container className={classes.contacts} >
                        <Grid item>
                            <Email />
                            <Typography>brianmwendwa.mu@gmail.com</Typography>
                        </Grid>
                        <Grid item>
                            <GitHub />
                            <Typography>mwendwa99</Typography>
                        </Grid>
                        <Grid item>
                            <LinkedIn />
                            <Typography>Brian Mwendwa</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

export default About
