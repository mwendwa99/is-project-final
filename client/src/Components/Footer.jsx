import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Assets from '../Assets/Index'

const UseStyle = makeStyles(() => ({
    footerRoot: {
        backgroundImage: Assets.footerBg,
        backgroundColor: "#EDF5E0",
        // backgroundColor: "#05386b",
    },
    gridItem: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: "space-evenly",

    },
    footerLinks: {
        cursor: "pointer",
        color: "#05386b",
        textDecoration: "none",
    }
}))

const Footer = () => {
    const classes = UseStyle();

    return (
        <Grid container className={classes.footerRoot}>
            <Grid item sm={4} className={classes.gridItem}>
                <Typography variant="h1">
                    <Link to='/' className={classes.footerLinks}>
                        Home
                    </Link>
                </Typography>
                <img width="50%" height="50%" src={Assets.driver} alt="driver" />
            </Grid>
            <Grid item sm={4} className={classes.gridItem}>
                <Typography variant="h1">
                    <Link to='/about' className={classes.footerLinks}>
                        About
                    </Link>
                </Typography>
                <img width="50%" height="50%" src={Assets.cars} alt="cars" />
            </Grid>
            <Grid item sm={4} className={classes.gridItem}>
                <Typography variant="h1">
                    <Link to='/about' className={classes.footerLinks}>
                        Contacts
                    </Link>
                </Typography>
                <img width="50%" height="50%" src={Assets.city} alt="city" />
            </Grid>
        </Grid>
    )
}

export default Footer
