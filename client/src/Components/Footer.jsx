import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

import Assets from '../Assets/Index'

const UseStyle = makeStyles((theme) => ({
    footerRoot: {
        backgroundColor: "#F8F0C6",
        height: "15rem",
        width: "100%",
        padding: theme.spacing(1),
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    footerLinks: {
        cursor: "pointer"
    }
}))

const Footer = () => {

    const classes = UseStyle();

    return (
        <Grid container className={classes.footerRoot}>
            <Grid container md='6' style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Grid item sm={3}>
                    <Typography variant="body2" className={classes.footerLinks}>Home</Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography variant="body2" className={classes.footerLinks}>About</Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography variant="body2" className={classes.footerLinks}>Contacts</Typography>
                </Grid>
            </Grid>
            <Grid container style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Grid item sm={2} xs={4}>
                    <img width="100%" src={Assets.driver} alt="driver" />
                </Grid>
                <Grid item sm={2} xs={4}>
                    <img width="100%" src={Assets.cars} alt="cars" />
                </Grid>
                <Grid item sm={2} xs={4}>
                    <img width="100%" src={Assets.city} alt="city" />
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="subtitle">&copy;2021. All Rights reserved by Brian Mwendwa</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer
