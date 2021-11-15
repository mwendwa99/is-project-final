import React, { useEffect, useState } from 'react'
import { Button, Container, Fade, Grid, InputAdornment, TextField, Typography, makeStyles } from '@material-ui/core';
import { Description, DirectionsCar, Domain, Notes, Payment, Room } from '@material-ui/icons';
import axios from 'axios';

import Assets from '../Assets/Index';
import { useUpdate } from './AdminContext'

const useStyles = makeStyles((theme) => ({
    orgGridItem: {
        display: 'flex',
        flexDirection: 'column',
    },
    gridContainer: {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
        backgroundColor: '#EDF5E0',
        padding: theme.spacing(1),
    },
    textField: {
        "& .MuiFilledInput-root": {
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            padding: '0.5rem',
            marginBottom: '0.5rem',
            marginTop: '0.5rem',
        }
    },
    labelRoot: {
        fontSize: '1.2rem',
    },
}));

const OrgPage = ({ Component }) => {
    const classes = useStyles();
    const [status, setStatus] = useState('');
    const [id, setId] = useState();

    // get context value
    const { payload, setPayload } = useUpdate();
    useEffect(() => {
        if (payload) {
            setId(payload._id)
        }
    }, [payload])

    // post details to db
    const formSubmit = (e) => {
        e.preventDefault();
        const { name, location, spaces, features, description, price } = e.target.elements;
        const data = {
            name: name.value,
            location: location.value,
            spaces: spaces.value,
            features: features.value,
            description: description.value,
            price: price.value
        };
        if (!payload) {
            axios.post('register-org', data)
                .then()
                .catch(error => alert(error))
            Component('Your Parking Spaces')
        } else {
            axios.put(`update-org/${id}`, data)
                .then(() => setStatus('Successful update!'))
                .then(() => Component('Your Parking Spaces'))
                .catch((err) => setStatus(err));
            setPayload(null);
            Component('Your Parking Spaces')
        }
    }

    return (
        <Fade in timeout={1000}>
            <Container maxWidth='lg' style={{ height: '100vh' }}>
                <form onSubmit={formSubmit} autoComplete='off'>
                    <Grid container className={classes.gridContainer}>
                        <Grid item sm={6}>
                            <Typography align='center' variant='h1'>
                                {!payload ? "Enter details about your organization" : `Update ${payload.name}`}
                            </Typography>
                            <img src={Assets.CoffeeDoddle} alt="" />
                        </Grid>
                        <Grid item sm={6} className={classes.orgGridItem}>
                            <Typography variant='h1' align='center' color='secondary'>{status}</Typography>
                            <TextField
                                className={classes.textField}
                                fullWidth
                                variant='filled' type="text" placeholder='E.g. Place xyz' label="name" id="name"
                                required
                                InputLabelProps={{
                                    classes: { root: classes.labelRoot }
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Domain />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField fullWidth className={classes.textField}
                                variant='filled' type="text" placeholder='E.g. Mama Ngina St.' id="location" label="location"
                                required
                                InputLabelProps={{
                                    classes: { root: classes.labelRoot }
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Room />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField fullWidth className={classes.textField}
                                variant='filled' type="number" placeholder='max of 50' id="spaces" label="spaces"
                                required
                                InputLabelProps={{
                                    classes: { root: classes.labelRoot }
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <DirectionsCar />
                                        </InputAdornment>
                                    ),
                                    inputProps: {
                                        min: 1,
                                        max: 50,
                                    }
                                }}
                            />
                            <TextField fullWidth className={classes.textField}
                                variant='filled' type="text" placeholder='E.g. Security' label="features" id="features"
                                required
                                InputLabelProps={{
                                    classes: { root: classes.labelRoot }
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Notes />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField fullWidth className={classes.textField}
                                variant='filled' type="text" placeholder='E.g. suitable for all cars' label="description" id="description"
                                required
                                InputLabelProps={{
                                    classes: { root: classes.labelRoot }
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Description />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField fullWidth className={classes.textField}
                                variant='filled' type="number" placeholder='E.g. 300' label="price" id="price"
                                required
                                InputLabelProps={{
                                    classes: { root: classes.labelRoot }
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Payment />
                                        </InputAdornment>
                                    ),
                                    inputProps: {
                                        min: 1,
                                        max: 1000,
                                    }
                                }}
                            />
                            <Button type='submit' variant='contained'>
                                {!payload ? 'Submit' : 'Update'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Fade>
    )
};


export default OrgPage
