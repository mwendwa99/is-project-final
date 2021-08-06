import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button, Container, makeStyles, InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
}))

const Register = () => {

    const classes = UseStyle();
    const [plate, setPlate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState([]);

    // sumbit func
    // const submit = async (e) => {
    //     // e.preventDefault();
    //     const response = await fetch('http://localhost:5000/user/user-data', {
    //         method: 'POST',
    //         header: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             plate, email, password
    //         })
    //     });
    //     const content = await response.json();
    //     console.log(content)
    // }

    useEffect(() => {
        fetch('http://localhost:5000/user/user-data')
            .then((result) => result.json())
            .then((email) => setEmail(email.name))
    }, [])


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
                    <form className={classes.inputSection} >
                        <Grid item sm={12} xs={12} className={classes.gridItem}>
                            <Grid container>
                                <Grid item sm={12} xs={12} className={classes.gridItem}>
                                    <InputBase type="text" placeholder="number plate"
                                        onChange={e => setPlate(e.target.value)}
                                    />
                                    <div className={classes.plateIcon} >
                                        <img height="100%" width="100%" src={Assets.plate} alt="number" />
                                    </div>
                                </Grid>
                                <Grid item sm={12} xs={12} className={classes.gridItem}>
                                    <InputBase type="text" placeholder="email"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    <div className={classes.plateIcon} >
                                        <img height="100%" width="100%" src={Assets.id} alt="email" />
                                    </div>
                                </Grid>
                                <Grid item sm={12} xs={12} className={classes.gridItem}>
                                    <InputBase type="password" placeholder="password"
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                    <div className={classes.plateIcon} >
                                        <img height="100%" width="100%" src={Assets.lock} alt="password" />
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form >
                    {/* <Grid item sm={12} xs={12} className={classes.gridItem} >
                        <form onSubmit={submit} className={classes.inputSection} >
                            <InputBase autoFocus='true' type="text" placeholder="email"
                                onChange={e => setEmail(e.target.value)}
                            />
                            <div className={classes.plateIcon} >
                                <img height="100%" width="100%" src={Assets.id} alt="email" />
                            </div>
                        </form >
                    </Grid>
                    <Grid item sm={12} xs={12} className={classes.gridItem} >
                        <form onSubmit={submit} className={classes.inputSection} >
                            <InputBase autoFocus='true' type="password" placeholder="password"
                                onChange={e => setPassword(e.target.value)}
                            />
                            <div className={classes.plateIcon} >
                                <img height="100%" width="100%" src={Assets.lock} alt="password" />
                            </div>
                        </form >
                    </Grid> */}
                    <Grid item xs={12} sm={12} className={classes.gridItem}>
                        <div>
                            <Button variant='contained' type='submit' size="small">
                                REGISTER
                            </Button>
                        </div>
                    </Grid>
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
