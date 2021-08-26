import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, Container, makeStyles, InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Assets from '../Assets/Index'

const UseStyle = makeStyles((theme) => ({
    root: {
        height: "100%"
    },
    gridContainer: {
        background: '#EDF5E0',
        padding: theme.spacing(1),
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
    },
    gridItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(1),
    },
    inputSection: {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: " 15px",
        display: "flex",
        margin: theme.spacing(1),
        padding: theme.spacing(0.5),
        background: '#C4C4C4',
    },
    plateIcon: {
        height: "30px",
        width: "30px",
    },
}))

const Login = () => {

    const classes = UseStyle();


    const [plate, setPlate] = useState('');
    const [password, setPassword] = useState('');

    // form validation
    const formValidate = () => {
        if (plate.length > 0 && password.length > 0) {
            return true;
        } else {
            return false;
        }
    }

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
                                <img height="100%" width="100%" src={Assets.favicon} alt="favicon" />
                            </Link>
                        </Button>
                    </Grid>
                    <Grid item sm={12} xs={12} className={classes.gridItem}>
                        <Typography variant="h1"> Login </Typography>
                    </Grid>
                    <Grid item sm={12} xs={12} className={classes.gridItem}>
                        <form className={classes.inputSection} >
                            <InputBase value={plate} onChange={(e) => setPlate(e.target.value)}
                                autoFocus='true' type="text" placeholder="number plate" />
                            <div className={classes.plateIcon} >
                                <img height="100%" width="100%" src={Assets.plate} alt="number" />
                            </div>
                        </form >
                    </Grid>
                    <Grid item sm={12} xs={12} className={classes.gridItem} >
                        <form className={classes.inputSection} >
                            <InputBase value={password} onChange={(e) => setPassword(e.target.value)}
                                type="password" placeholder="password" />
                            <div className={classes.plateIcon} >
                                <img height="100%" width="100%" src={Assets.lock} alt="password" />
                            </div>
                        </form >
                    </Grid>
                    <Grid item xs={12} sm={12} className={classes.gridItem}>
                        <div>
                            <Button
                                component='button'
                                disabled={!formValidate()}
                                variant='contained'
                                type='submit'
                                size="small">
                                LOGIN
                            </Button>
                        </div>
                    </Grid>
                    <Grid item sm={12} xs={12} className={classes.gridItem} >
                        <Typography variant="caption" >
                            <Link to='/register'>
                                don’t have an account? register
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
