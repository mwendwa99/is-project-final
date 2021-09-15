import React, { useState } from 'react';
import { Grid, Typography, Button, Container, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RegisterTabs from './Inputs/RegisterTabs';

import Assets from '../Assets/Index'

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
        flexDirection: 'column',
    },
    inputSection: {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: " 15px",
        display: "flex",
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.5),
        background: '#C4C4C4',
    },
    plateIcon: {
        height: "30px",
        width: "30px",
    },
}));

const postUser = 'api/register-user';

const Register = () => {

    const classes = UseStyle();
    const [numberPlate, setNumberPlate] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    // map values to backend
    const formSubmit = (e) => {
        e.preventDefault();
        const data = {
            plate: numberPlate,
            email: userEmail,
            password: userPassword
        }
        console.log(data);
        axios.post(`${postUser}`, data)
            .then(res => console.log(res))
            .catch(error => alert(error))
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
                                <img height="100%" width="100%" src={Assets.user} alt="user" />
                            </Link>
                        </Button>
                    </Grid>
                    <Grid item sm={12} xs={12} className={classes.gridItem}>
                        <Typography variant="h1"> Register </Typography>
                    </Grid>
                    <Grid item sm={12} xs={12} className={classes.gridItem}>
                        <RegisterTabs />
                    </Grid>
                    {/* ******************************************************************** */}

                    {/* ****************************************************************** */}
                    <Grid item sm={12} xs={12} className={classes.gridItem} >
                        <Typography variant="caption" >
                            <Link to='/'>
                                Already have an account? login
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

export default Register
