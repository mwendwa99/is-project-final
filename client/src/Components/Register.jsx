import React, { useState } from 'react';
import { Grid, Typography, Button, Container, makeStyles, InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios'

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
        padding: theme.spacing(0.5),
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

const postUser = 'user/register-user';

const Register = () => {

    const classes = UseStyle();
    const [numberPlate, setNumberPlate] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    // default axios configs
    axios.defaults.headers.common = {
        "Content-Type": "application/json"
    }

    // map values to backend
    const formSubmit = (e) => {
        e.preventDefault();
        const formData = {
            plate: numberPlate,
            email: userEmail,
            password: userPassword
        }
        console.log(formData);
        axios.post(`${postUser}`,
            formData,
            {
                headers: {
                    // 'Content-Type': 'application/x-www-form-urlencoded'
                    "Content-Type": "application/json"
                }
            }
        )
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(`error in post data ${err}`)
            })
    }

    // form validation
    const formValidate = () => {
        if (numberPlate.length > 0 && userPassword.length > 0 && userEmail > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    // clear form
    // const clearForm = () => {
    //     alert(`user has been registered!`);
    //     // if (numberPlate && userEmail && userPassword) {
    //     //     setNumberPlate('');
    //     //     setUserEmail('');
    //     //     setUserPassword('');
    //     // }

    // }

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
                    {/* ******************************************************************** */}
                    <form id="register-form" onSubmit={formSubmit} >
                        <Grid container >
                            <Grid item sm={12} xs={12} className={classes.inputSection}>
                                <InputBase type="text" placeholder="number plate" value={numberPlate}
                                    onChange={e => setNumberPlate(e.target.value)}
                                />
                                <div className={classes.plateIcon} >
                                    <img height="100%" width="100%" src={Assets.plate} alt="number" />
                                </div>
                            </Grid>
                            <Grid item sm={12} xs={12} className={classes.inputSection}>
                                <InputBase type="text" placeholder="email" value={userEmail}
                                    onChange={e => setUserEmail(e.target.value)}
                                />
                                <div className={classes.plateIcon} >
                                    <img height="100%" width="100%" src={Assets.id} alt="email" />
                                </div>
                            </Grid>
                            <Grid item sm={12} xs={12} className={classes.inputSection}>
                                <InputBase type="password" placeholder="password" value={userPassword}
                                    onChange={e => setUserPassword(e.target.value)}
                                />
                                <div className={classes.plateIcon} >
                                    <img height="100%" width="100%" src={Assets.lock} alt="password" />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} className={classes.gridItem}>
                                <div>
                                    <Button
                                        disabled={!formValidate()}
                                        // onClick={clearForm()}
                                        variant='contained' type='submit' size="small">
                                        REGISTER
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </form >
                    {/* ****************************************************************** */}
                    <Grid item sm={12} xs={12} className={classes.gridItem} >
                        <Typography variant="caption" >
                            <Link to='/login'>
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
