import React from 'react';
import {
    Typography, Grid, Button, Container, makeStyles,
    TableBody, TableRow, TableCell, Table, TableContainer
} from '@material-ui/core';
import Assets from '../Assets/Index';
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
    },
    gridContainer: {
        padding: theme.spacing(0.5),
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


const SpotDetails = ({ userSavedSpot = [] }) => {
    const classes = UseStyle();

    console.log('DETAILS', userSavedSpot);


    return (
        <div className='body__section'>
            <Container maxWidth='md' className={classes.root}>
                <Grid container className={classes.gridContainer}>
                    <Grid item sm={12}>
                        <div className={classes.imageContainer}>
                            <img src={Assets.parking} style={{ borderRadius: "20px" }} height="100%" width="100%" alt="" />
                        </div>
                    </Grid>
                </Grid>
                <Grid container className={classes.gridContainer}>
                    <Grid item sm={6} xs={6} >
                        <Grid container >
                            <Grid item xs={12}><Typography>, </Typography></Grid>
                            <Grid item xs={4} style={{ paddingTop: "0.5rem" }}>
                                <Typography>Features</Typography>
                            </Grid>
                            <Grid item xs={8} style={{ padding: "1rem" }}>
                                <ul>
                                    <li><Typography variant="subtitle">examples</Typography></li>
                                    <li><Typography variant="subtitle">examples</Typography></li>
                                    <li><Typography variant="subtitle">examples</Typography></li>
                                    <li><Typography variant="subtitle">examples</Typography></li>
                                    <li><Typography variant="subtitle">examples</Typography></li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={6}
                        className={classes.priceCard}
                    >

                        <Table size='small'>
                            <TableContainer>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <Typography variant='subtitle2'>price: </Typography>
                                        </TableCell>
                                        <TableCell>300</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component='th' scope='row'>
                                            <Typography variant='subtitle2'>spaces:</Typography>
                                        </TableCell>
                                        <TableCell><TextInput /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography variant='subtitle2'>Day:</Typography>
                                        </TableCell>
                                        <TableCell><Date /></TableCell>
                                    </TableRow>
                                </TableBody>
                            </TableContainer>
                        </Table>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <div><Button variant='contained' size="small"> proceed to pay </Button></div>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

export default SpotDetails
