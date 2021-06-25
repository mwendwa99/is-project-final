import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const UseStyle = makeStyles((theme) => ({
    footerRoot: {
        backgroundColor: "#F8F0C6",
        height: "10rem",
        width: "100%",
    },
}))

const Footer = () => {

    const classes = UseStyle();

    return (
        <Grid container className={classes.footerRoot}>
            <Grid container>
                <Grid item>
                    <Typography></Typography>
                </Grid>
                <Grid item>
                    <Typography></Typography>
                </Grid>
                <Grid item>
                    <Typography></Typography>
                </Grid>
                <Grid item>
                    <Typography></Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item></Grid>
                <Grid item></Grid>
            </Grid>
        </Grid>
    )
}

export default Footer
