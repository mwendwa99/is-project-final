import React, { useState } from 'react';
import {
    Typography, Grid, Button, Container, makeStyles,
    TableBody, TableRow, TableCell, Table, TableContainer, Fade
} from '@material-ui/core';
import Date from './Inputs/Date';
import TextInput from './Inputs/TextInput';
import { useHistory } from 'react-router';
import { useSavedValue } from '../Context/AuthContext';
import Assets from '../Assets/Index';

const UseStyle = makeStyles((theme) => ({
    root: {
        height: "100%",
        // backgroundImage: Assets.repeatingChevrons,
        backgroundColor: '#ddffaa',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpolygon fill='%23AE9' points='120 120 60 120 90 90 120 60 120 0 120 0 60 60 0 0 0 60 30 90 60 120 120 120 '/%3E%3C/svg%3E")`,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        marginTop: theme.spacing(1),
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    gridContainer: {
        padding: theme.spacing(0.5),
    },
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        height: "10rem",
        // position: 'absolute',
    },
    priceCard: {
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        backgroundColor: '#EDF5E0',
        padding: theme.spacing(3),
    },
    inputForm: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
}))


const SpotDetails = ({ data }) => {
    const classes = UseStyle();
    const user = localStorage.getItem('email');
    const [initialValue, setInitialValue] = useState();
    const [dateValue, setDateValue] = useState();
    const history = useHistory();
    const { selectedSpot } = useSavedValue()
    const [formData, setFormData] = useState({
        user: '',
        name: '',
        price: '',
        spaces: '',
        description: '',
        features: '',
        day: '',
    })
    let userSpot = Object.keys(data).map((i) => { return Object.values(data[i]) });

    // push data to Spots.jsx
    const pushDataFunc = (data) => {
        if (data) {
            history.push('/saved')
        }
    }
    // pull data from TextInput component
    const pullDataFromChild = (data) => { setInitialValue(data) }

    // pull data from Date component
    const pullDate = (date) => { setDateValue(date) }

    const onClickFunc = (name, location, features, description, price) => {
        setFormData({
            email: user,
            name: name,
            location: location,
            spaces: initialValue,
            price: price,
            description: description,
            features: features,
            day: dateValue,
        })
    }
    selectedSpot(formData)
    pushDataFunc(formData.name)

    return (
        <Fade in timeout={1500}>
            <div className='body__section'>
                {
                    userSpot.map((item) =>
                        item.map((value, index) => {
                            return <Container maxWidth='lg' className={classes.root} key={index}>
                                <div className={classes.imageContainer}>
                                    <img src={Assets.driver} height="100%" width="100%" alt="cars" />
                                </div>
                                <Grid container className={classes.gridContainer}>
                                    <Grid item sm={12}>
                                        <Grid container className={classes.gridItem}>
                                            <Grid item sm={12}>
                                                <Typography gutterBottom variant='h3'>
                                                    <b>{value.name}, {value.location}</b>
                                                </Typography>
                                            </Grid>
                                            <Grid item sm={12} className={classes.priceCard}>
                                                <Table size='large'>
                                                    <TableContainer>
                                                        <TableBody>
                                                            <TableRow
                                                                key={index}

                                                            >
                                                                <TableCell>
                                                                    <Typography variant='h5'>price: </Typography>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Typography variant='h6'>
                                                                        {initialValue ?
                                                                            value.price * initialValue
                                                                            : value.price}
                                                                    </Typography>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell component='th' scope='row'>
                                                                    <Typography variant='h5'>spaces:</Typography>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <TextInput
                                                                        spaces={value.spaces}
                                                                        initialValue={initialValue}
                                                                        sendDataToParent={pullDataFromChild} />
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell component='th' scope='row'>
                                                                    <Typography variant='h5'>Description:</Typography>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Typography variant='h6'>
                                                                        {value.description}
                                                                    </Typography>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell component='th' scope='row'>
                                                                    <Typography variant='h5'>Features:</Typography>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Typography variant='h6'>{value.features}</Typography>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>
                                                                    <Typography variant='h5'>Day:</Typography>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Date sendDate={pullDate} />
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </TableContainer>
                                                </Table>
                                                <Button
                                                    onClick={
                                                        () => onClickFunc(value.name, value.location, value.features, value.description, value.price)
                                                    }
                                                    variant='contained' type='submit' size="small">
                                                    save this spot
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    {/* <Grid item sm={4}> */}
                                    {/* </Grid> */}
                                </Grid>
                            </Container>;
                        }
                        )
                    )
                }
            </div >
        </Fade>
    )
}

export default SpotDetails
