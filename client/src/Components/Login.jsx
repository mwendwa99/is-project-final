import React, { useState } from 'react';
import { Grid, Typography, Button, Container, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import Assets from '../Assets/Index';
import FullWidthTabs from './Inputs/Tabs';

const UseStyle = makeStyles((theme) => ({
    root: {
        height: "100%"
    },
    gridContainer: {
        background: '#EDF5E0',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
    },
    gridItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column'
    },
}));

const Login = (props) => {
    const classes = UseStyle();

    return (
        <div className='body__section'>
            <Container maxWidth='xs' className={classes.root}>
                <div>
                    <img src={Assets.ReadingDoodle} height="20%" width="20%" alt="background" />
                    <img src={Assets.CoffeeDoddle} height="20%" width="20%" alt="background" />
                    <img src={Assets.DumpingDoodle} height="20%" width="20%" alt="background" />
                    <img src={Assets.DogJumpDoodle} height="20%" width="20%" alt="background" />
                    <img src={Assets.DancingDoodle} height="20%" width="20%" alt="background" />
                </div>
                <Grid container className={classes.gridContainer}>
                    <Grid item sm={12} xs={12} className={classes.gridItem}>
                        <Button className='button-image__logo' variant="text">
                            <Link style={{ textDecoration: "none" }} to='/'>
                                <img height="100%" width="100%" src={Assets.favicon} alt="logo" />
                            </Link>
                        </Button>
                    </Grid>
                    <Grid item sm={12} xs={12} className={classes.gridItem}>
                        <Typography variant="h1"> Login </Typography>
                    </Grid>
                    <Grid item sm={12} xs={12} className={classes.gridItem}>
                        <FullWidthTabs />
                    </Grid>

                    {/* ******************************************************************** */}

                    {/* ****************************************************************** */}
                    <Grid item sm={12} xs={12} className={classes.gridItem} >
                        <Typography variant="caption" >
                            <Link to='/register'>
                                Don't have an account? Register
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
                <div>
                    <img src={Assets.DancingDoodle} height="20%" width="20%" alt="background" />
                    <img src={Assets.DogJumpDoodle} height="20%" width="20%" alt="background" />
                    <img src={Assets.DumpingDoodle} height="20%" width="20%" alt="background" />
                    <img src={Assets.CoffeeDoddle} height="20%" width="20%" alt="background" />
                    <img src={Assets.ReadingDoodle} height="20%" width="20%" alt="background" />
                </div>
            </Container>
        </div>
    )
}

export default Login
