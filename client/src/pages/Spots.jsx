import React, { useEffect, useState } from 'react';
import {
    Typography, Button, ListItem, ListItemText, Container, Grid
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Money, Favorite } from '@mui/icons-material';
import Assets from '../Assets/Index'
import { useNavigate } from 'react-router-dom';

// import { useOrgContext } from '../Context/OrgContext';
import { getRandomImage } from '../image/RandomImage';

const useStyles = makeStyles(() => ({
    grid: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-around',
        backgroundColor: '#05386b',
        padding: '0.5rem',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: "10px",
        backgroundImage: Assets.pattern,
    },
    gridItem: {
        backgroundColor: '#EDF5E0',
        padding: '0.5rem',
        margin: '0.5rem',
        borderRadius: "10px",
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
}));

export default function Spots() {
    const classes = useStyles();
    // const { spots, getOrgById } = useOrgContext();
    const [spotList, setSpotList] = useState([]);

    console.log("random", getRandomImage());

    // data from mongo
    const history = useNavigate();

    // useEffect(() => {
    //     setSpotList(spots);
    // }, [spots])

    // function to get org with specific id
    // const saveOnClick = (id) => {
    //     getOrgById(id);
    //     history.push('/details');
    // }

    return spotList ? (
        <Container maxWidth='xl'>
            <Grid
                container
                className={classes.grid}
                alignItems="center"
                justifyContent="center" >
                {
                    spotList.map((item, index) =>
                        <Grid item sm={3} className={classes.gridItem} key={index} >
                            <img height={200} width="100%" src={getRandomImage()} alt="parking" />
                            <ListItem >
                                <ListItemText disableTypography>
                                    <Typography variant="body2" >{!item.name ? 'loading...' : item.name} </Typography>
                                    <Typography variant="subtitle1" > {!item.location ? 'loading...' : item.location} </Typography>
                                    <ul className='user-list' >
                                        <li>
                                            <div style={{ display: 'flex', alignItems: "center" }} >
                                                <Money />
                                                <Typography variant="caption" >price: KES {!item.price ? 'loading...' : item.price}</Typography>
                                            </div>
                                        </li>
                                        <li>
                                            <Typography variant="caption" >free spots: {item.spaces} </Typography>
                                        </li>
                                    </ul>
                                </ListItemText>
                            </ListItem>
                            <Button
                                // onClick={() => saveOnClick(item._id)}
                                variant="contained" size="small" >
                                <Favorite /> Save Me!
                            </Button>
                        </Grid >
                    )
                }
            </Grid>
        </Container>
    ) : (
        <div>
            <Typography variant="h5" >loading...</Typography>
        </div>
    )
}
