import { Button, Container, Fade, Grid, InputAdornment, TextField, Typography, makeStyles } from '@material-ui/core';
import { Description, DirectionsCar, Domain, Notes, Payment, Room } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Assets from '../Assets/Index';
import { useUpdate } from './AdminContext'

const useStyles = makeStyles((theme) => ({
    orgGridItem: {
        display: 'flex',
        flexDirection: 'column',
    },
    formField: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
        backgroundColor: '#EDF5E0',
        padding: theme.spacing(1),
        '& > *': {
            margin: '0.5rem',
            width: '25ch',
        },
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
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [spaces, setSpaces] = useState(0);
    const [features, setFeatures] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
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
        const data = { name: name, location: location, spaces: spaces, features: features, description: description, price: price }
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
                <form onSubmit={formSubmit} className={classes.formField} noValidate autoComplete="off">
                    <Grid item sm={6}>
                        <Typography align='center' variant='h1'>
                            {!payload ? "Enter details about your organization" : `Update ${payload.name}`}
                        </Typography>
                        <img src={Assets.CoffeeDoddle} alt="" />
                    </Grid>
                    <Grid item sm={6} className={classes.orgGridItem}>
                        <Typography variant='h1' align='center' color='secondary'>{status}</Typography>
                        <TextField value={name} onChange={(e) => setName(e.target.value)} fullWidth className={classes.textField} variant='filled' type="text" placeholder='E.g. Place xyz' label="organization name"
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
                        <TextField fullWidth className={classes.textField} variant='filled' type="text" placeholder='E.g. Mama Ngina St.' label="location"
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
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <TextField fullWidth className={classes.textField} variant='filled' type="number" placeholder='max of 50' label="spaces"
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
                            value={spaces}
                            onChange={(e) => setSpaces(e.target.value)}
                        />
                        <TextField fullWidth className={classes.textField} variant='filled' type="text" placeholder='E.g. Security' label="features"
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
                            value={features}
                            onChange={(e) => setFeatures(e.target.value)}
                        />
                        <TextField fullWidth className={classes.textField} variant='filled' type="text" placeholder='E.g. suitable for all cars' label="description"
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
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <TextField fullWidth className={classes.textField} variant='filled' type="number" placeholder='E.g. 300' label="price"
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
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <Button type='submit' variant='contained'>
                            {!payload ? 'Submit' : 'Update'}
                        </Button>
                    </Grid>
                </form>
            </Container>
        </Fade>
    )
};


export default OrgPage
