import React from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { assets } from '../Assets/Index'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "yellow",
        margin: "1rem",
        padding: "1rem",
        width: "100%",
        height: "20rem",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: "18rem",
        width: "100%",
        borderRadius: "30px",
    },
    itemContainer: {
        // display: "flex",
    },
    itemPaperImage: {
        width: "100%",
        height: "9rem",
        borderRadius: "30px 30px 0 0",
        overflow: "hidden",
    },
    itemPaperDescription: {
        padding: theme.spacing(1),
        width: "100%",
        height: "9rem",
        borderRadius: "0 0 30px 30px",
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Grid sm={12} className={classes.itemContainer}>
                        <Paper className={classes.itemPaperImage}>
                            <img height="100%" width="100%" src={assets.parking} alt="parking" />
                        </Paper>
                    </Grid>
                    <Grid sm={12}>
                        <Paper className={classes.itemPaperDescription}>
                            <Typography variant="body2" > spot available at posta, Nairobi. </Typography>
                            <Typography variant="caption" > posta, Nairobi. </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>spot 2</Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>spot 3</Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
