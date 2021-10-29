import React, { useState, useEffect } from 'react';
import {
    Typography, Grid, Button, Container, makeStyles,
    TableBody, TableRow, TableCell, Table, TableContainer, Fade, Divider
} from '@material-ui/core';
import Date from './Inputs/Date';
import TextInput from './Inputs/TextInput';
import { useHistory } from 'react-router';
import { useSavedValue } from '../Context/AuthContext';
import axios from 'axios';

import Assets from '../Assets/Index';

const UseStyle = makeStyles((theme) => ({
    root: {
        height: "100%",
        backgroundColor: '#ddffaa',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpolygon fill='%23AE9' points='120 120 60 120 90 90 120 60 120 0 120 0 60 60 0 0 0 60 30 90 60 120 120 120 '/%3E%3C/svg%3E")`,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridContainer: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceCard: {
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        padding: theme.spacing(5),
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#EDF5E0',
    },
    typography: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        alignItems: 'center'
    }
}))


const SpotDetails = () => {
    const classes = UseStyle();
    const user = localStorage.getItem('email');
    const [initialValue, setInitialValue] = useState();
    const [dateValue, setDateValue] = useState();
    const history = useHistory();
    const { userSavedSpot } = useSavedValue()
    // const [formData, setFormData] = useState({
    //     spotId: '',
    //     email: '',
    //     name: '',
    //     price: '',
    //     spaces: '',
    //     description: '',
    //     features: '',
    //     day: '',
    // })
    const { _id, name, location, price, spaces, description, features } = userSavedSpot;

    // useEffect(()=>{
    //     postToDb();
    // },[])

    // pull data from TextInput component
    const pullDataFromChild = (data) => { setInitialValue(data) }

    // pull data from Date component
    const pullDate = (date) => { setDateValue(date) }

    const sendTodbonClick = (id, name, location, features, description, price) => {
        const formData = {
            spotId: id,
            email: user,
            name: name,
            location: location,
            spaces: parseInt(initialValue) || 1,
            price: initialValue ? price * initialValue : price,
            description: description,
            features: features,
            day: dateValue,
        };
        // send formdata object to backend
        postToDb(formData);
        // on my spot page consume this object from backend since its all from one user
        // backend create algorithm to subtract spaces left
        // admin page create "activity tab" admin will see user's bookings
    }
    const postToDb = async (formData) => {
        axios.post('/post-controller', formData)
            .then(() => history.push('/saved'))
            .catch((error) => console.log(error))
    }

    // console.log('wefsffa', formData);
    // selectedSpot(formData)
    // pushDataFunc(formData.name)

    return (
        <Fade in timeout={1000}>
            <div className='body__section'>
                <Container maxWidth='lg' className={classes.root}>
                    <img src={Assets.driver} height="10%" width="10%" alt="cars" />
                    <Grid container className={classes.gridContainer}>
                        <Grid item sm={12}>
                            <Typography gutterBottom variant='h3'>
                                <b>{name + ', ' + location}</b>
                            </Typography>
                        </Grid>
                        <Grid item sm={10}>
                            <Grid container className={classes.priceCard}>
                                <Grid item sm={12}>
                                    <Typography variant='h1' className={classes.typography}>
                                        Price: <Typography variant='h5'>{initialValue ? price * initialValue : price}</Typography>
                                    </Typography>
                                    <Divider />
                                    <Typography variant='h1' className={classes.typography}>
                                        Spaces: <Typography variant='h5'><TextInput
                                            spaces={spaces}
                                            initialValue={initialValue}
                                            sendDataToParent={pullDataFromChild}
                                        /></Typography>
                                    </Typography>
                                    <Divider />
                                    <Typography variant='h1' className={classes.typography}>
                                        Description:   <Typography variant='h5'>{description}</Typography>
                                    </Typography>
                                    <Divider />
                                    <Typography variant='h1' className={classes.typography}>
                                        Features: <Typography variant='h5'>{features}</Typography>
                                    </Typography>
                                    <Divider />
                                    <Typography variant='h1' className={classes.typography}>
                                        Date: <Typography variant='h5'><Date sendDate={pullDate} /></Typography>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Button
                                onClick={() => sendTodbonClick(_id, name, location, features, description, price)}
                                variant='contained' size="large">
                                save this spot
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </div >
        </Fade>
    )
}

export default SpotDetails
