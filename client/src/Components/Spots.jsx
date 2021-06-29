import React from 'react';
import { makeStyles, Container, Typography, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import Assets from '../Assets/Index'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "3rem",
        padding: "1rem",
        width: "100%",
        height: "20rem",
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: "18rem",
        width: "100%",
        borderRadius: "20px",
    },
    itemPaperImage: {
        width: "100%",
        height: "9rem",
        borderRadius: "20px 20px 0 0",
        overflow: "hidden",
    },
    itemPaperDescription: {
        padding: theme.spacing(1),
        backgroundColor: "#F8F0C6",
        width: "100%",
        borderRadius: "0 0 20px 20px",
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <Container className={classes.root} >
            <Grid container style={{
                display: "flex",
                flexDirection: "column",
            }} >
                <Grid item sm={12}>
                    <Paper className={classes.itemPaperImage}>
                        <img height="100%" width="100%" src={Assets.parking} alt="parking" />
                    </Paper>
                </Grid>
                <Grid style={{ height: "100%" }} item sm={12}>
                    <Paper className={classes.itemPaperDescription}>
                        <Typography variant="body2" > spot available at posta, Nairobi. </Typography>
                        <Typography variant="caption" > posta, Nairobi. </Typography>
                        <Grid container >
                            <Grid item sm={5}>
                                <div style={{ display: 'flex', alignItems: "center" }} >
                                    <img width="20%" height="20%" src={Assets.money} alt="money icon" />
                                    <Typography variant="caption" >Kes: 150</Typography>
                                </div>
                            </Grid>
                            <Grid item sm={7} >
                                <Typography variant="caption" >spots-free: 10</Typography>
                            </Grid>
                            <Grid item sm={12} xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <div><Button variant='contained' size="small">
                                    <Link to='/details' style={{ textDecoration: "none" }}>
                                        Save Me!
                                    </Link>
                                </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container >
    );
}
