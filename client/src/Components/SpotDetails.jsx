import React, { useState } from 'react';
import {
    Typography, Grid, Button, Container, makeStyles,
    TableBody, TableRow, TableCell, Table, TableContainer, Fade
} from '@material-ui/core';
import Date from './Inputs/Date';
import TextInput from './Inputs/TextInput';

const UseStyle = makeStyles((theme) => ({
    root: {
        height: "100%",
        background: "#EDF5E0",
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        marginTop: theme.spacing(1),
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
        height: "20rem",
    },
    priceCard: {
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
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
    const [initialValue, setInitialValue] = useState();

    let userSpot = Object.keys(data).map((i) => {
        return Object.values(data[i])
    }
    );

    // pull data from TextInput component
    const pullDataFromChild = (data) => {
        setInitialValue(data)
    }

    return (
        <Fade in timeout={1500}>
            <div className='body__section'>
                {
                    userSpot.map((item) =>
                        item.map((value, index) =>
                            <Container maxWidth='md' className={classes.root} key={index}>
                                <Grid container className={classes.gridContainer}>
                                    <Grid item sm={12}>
                                        <div className={classes.imageContainer}>
                                            <img
                                                src="https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg"
                                                style={{ borderRadius: "20px" }}
                                                height="100%" width="100%" alt="" />
                                        </div>
                                    </Grid>
                                </Grid>
                                <form>
                                    <Grid container className={classes.gridContainer}>
                                        <Grid item sm={12} >
                                            <Grid container className={classes.gridItem}  >
                                                <Grid item sm={12}>
                                                    <Typography >
                                                        {value.name}, {value.location}
                                                    </Typography>
                                                </Grid>
                                                <Grid item sm={12} className={classes.priceCard}>
                                                    <Table size='large'  >
                                                        <TableContainer  >
                                                            <TableBody>
                                                                <TableRow
                                                                    key={index}

                                                                >
                                                                    <TableCell>
                                                                        <Typography variant='h5'>price: </Typography>
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <Typography variant='h6'>
                                                                            {
                                                                                initialValue ?
                                                                                    value.price * initialValue
                                                                                    : value.price
                                                                            }
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
                                                                            sendDataToParent={pullDataFromChild}
                                                                        />
                                                                    </TableCell>
                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell component='th' scope='row'>
                                                                        <Typography variant='h5'>Description:</Typography>
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <Typography variant='h6'>{value.description}</Typography>
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
                                                                    <TableCell><Date /></TableCell>
                                                                </TableRow>
                                                            </TableBody>
                                                        </TableContainer>
                                                    </Table>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <div><Button variant='contained' type='submit' size="small"> proceed to pay </Button></div>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Container>
                        )
                    )
                }
            </div >
        </Fade>
    )
}

export default SpotDetails
