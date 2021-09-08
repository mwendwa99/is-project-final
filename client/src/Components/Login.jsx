import React, { useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button, Container, makeStyles, InputBase } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../Context/AuthContext';

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
        flexDirection: 'column'
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
}));

const loginUser = 'api/login-user';

const Login = () => {

    const classes = UseStyle();
    const { login } = useAuth()
    const [details, setDetails] = useState({ email: "", password: "" });

    const formSubmit = e => {
        e.preventDefault();
        const data = {
            email: details.email,
            password: details.password
        }
        axios.post(`${loginUser}`, data)
            .then(res => {
                localStorage.setItem('token', res.data.token);
            })
            .catch(err => alert(err))
    };

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
                        {/* {(error !== '') ? (
                            <Typography align='center' variant='overline'>{error}</Typography>
                        ) : ("")} */}
                    </Grid>
                    {/* ******************************************************************** */}
                    <form id="register-form" onSubmit={formSubmit} >
                        <Grid container >
                            <Grid item sm={12} xs={12} className={classes.inputSection}>
                                <InputBase type="email" placeholder="email"
                                    value={details.email}
                                    onChange={e => setDetails({ email: e.target.value })}
                                />
                                <div className={classes.plateIcon} >
                                    <img height="100%" width="100%" src={Assets.id} alt="email" />
                                </div>
                            </Grid>
                            {/* <Grid item sm={12} xs={12} className={classes.inputSection}>
                                <InputBase type="text" placeholder="number plate"
                                    value={details.plate}
                                    onChange={e => setDetails({plate: e.target.value })}
                                />
                                <div className={classes.plateIcon} >
                                    <img height="100%" width="100%" src={Assets.plate} alt="number plate" />
                                </div>
                            </Grid> */}
                            <Grid item sm={12} xs={12} className={classes.inputSection}>
                                <InputBase type="password" placeholder="password"
                                    value={details.password}
                                    onChange={e => setDetails({ password: e.target.value })}
                                />
                                <div className={classes.plateIcon} >
                                    <img height="100%" width="100%" src={Assets.lock} alt="password" />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} className={classes.gridItem}>
                                <div>
                                    <Button
                                        // onClick={login}
                                        variant='contained' type='submit' size="small">
                                        LOGIN
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </form >
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
