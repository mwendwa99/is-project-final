import React from 'react';
import {
    Container, Grid, Typography, makeStyles,
    TableBody, TableRow, TableCell
} from '@material-ui/core';
import { Email, GitHub, LinkedIn } from '@material-ui/icons';
import Assets from '../Assets/Index'

const UseStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        paddingTop: theme.spacing(1),
        display: "flex",
    },
    aboutImage: {
        flex: 2,
        height: "100%",
    },
    aboutText: {
        height: "100%",
        backgroundColor: "#EDF5E0",
        padding: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        borderRadius: 10,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    table: {
        minWidth: 400,
    },
}))

const About = () => {

    const classes = UseStyles();

    return (
        <div className="body__section">
            <Container maxWidth='lg' className={classes.root}>
                <Grid container >
                    <Grid item md={6} >
                        <img
                            style={{
                                verticalAlign: 'top',
                                borderRadius: 10,
                                paddingRight: 4,
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                            }}
                            width="100%"
                            height="100%"
                            src={Assets.busyStreet} alt="traffick" />
                    </Grid>
                    <Grid item md={6} className={classes.aboutText}>
                        <Typography variant='h4' style={{ flex: 1 }} gutterBottom='true' >About</Typography>
                        <Typography align='justify' gutterBottom='true' variant='subtitle2' paragraph='true' style={{ flex: 1 }}>
                            The motivation behind Save A Spot is to
                            reduce the hassle it takes for motorists to get parking space
                            within the CBD through web automation.
                        </Typography>
                        <Typography align='justify' gutterBottom='true' variant='subtitle2' paragraph='true' style={{ flex: 1 }}>
                            Save A Spot presents an opportunity for you to conveniently secure
                            a parking space within the Central Business District!
                            With just a few clicks, get details on parking spaces
                            available, the price and book away!
                        </Typography>
                        <Grid item md={12}>
                            <Typography variant='h4' style={{ flex: 1 }} gutterBottom='true'  > Contact </Typography>
                            <Typography variant='body2' style={{ flex: 1 }} >
                                Have any suggestions or comments? Reach out to me!
                            </Typography>
                        </Grid>
                        <Grid item md={12}>
                            <TableBody>
                                <TableRow >
                                    <TableCell  > <Email fontSize='large' /> </TableCell>
                                    <TableCell align="right">
                                        <a href="mailto:brianmwendwa.mu@gmail.com?subject = Save A Spot Enquiry&body = this is about save a spot system">
                                            brianmwendwa.mu@gmail.com
                                        </a>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component='th' scope='row'><GitHub fontSize='large' /></TableCell>
                                    <TableCell align='left'>
                                        <a href="https://github.com/mwendwa99" target="_blank" rel='noopener noreferrer'>
                                            mwendwa99
                                        </a>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component='th' scope='row'><LinkedIn fontSize='large' /></TableCell>
                                    <TableCell align='left'>
                                        <a href="https://linkedin.com/in/brian-mwendwa-25326a173/" target='_blank' rel='noopener noreferrer'>
                                            Brian Mwendwa
                                        </a>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

export default About
