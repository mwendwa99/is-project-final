import React, { useState, useEffect } from 'react';
import {
    makeStyles, Typography, Button, ListItemIcon,
    List, ListItem, ListItemText
} from '@material-ui/core';
import { Money, Favorite } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Assets from '../Assets/Index'
import { useSavedValue } from '../Context/AuthContext';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    grid: {
        display: "flex", flexDirection: "row",
        justifyContent: 'space-around',
    },
    gridItem: {
        display: "flex", flexDirection: "column",
        backgroundColor: '#F8F0C6',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        borderRadius: "10px",
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();
    const [initialList, setInitialList] = useState([]);
    const [clickedIndex, setClickedIndex] = useState([]);

    // data from mongo
    const [data, setData] = useState();

    const { savedSpot } = useSavedValue();
    const history = useHistory();


    // on page load get organization details
    useEffect(() => {
        axios.get('/get-org')
            .then((response) => {
                let res = (response.data)
                setInitialList(res)
            }).catch((error) => console.log(`error in fetch Spots ${error}`));

    }, []);

    // function to get org with specific id
    const saveOnClick = (id) => {
        axios.get(`/get-org/${id}`)
            .then((response) => setData(response.data))
            .catch((error) => console.log(error))
        // push data to context
        savedSpot(data);
        // go next screen
        navigateToDetailsPage(data)
    }
    // on successful data map push to details page
    const navigateToDetailsPage = (data) => {
        if (data) {
            history.push('/details')
        }
    }

    // map each value of mapped array to an oject based on their index
    // const addToSpots = (index, name, location, features, description, spaces, price, id) => () => {
    //     setClickedIndex(() => ([{
    //         // ...state, // <-- copy previous state
    //         [index]: {
    //             name: name,
    //             location: location,
    //             spaces: spaces,
    //             price: price,
    //             features: features,
    //             description: description,
    //         }// <-- update value by index key
    //     }]));
    // };
    // savedSpot(clickedIndex);
    // setDataFunc(clickedIndex)
    // console.log('initialList', initialList)

    return (
        <Grid wrap='nowrap'
            container
            spacing={2}
            className={classes.grid}
            alignItems="center"
            justify="center" >
            {
                initialList.map((item, index) =>
                    <Grid item className={classes.gridItem} key={item._id} >
                        <img height="100%" width="100%" src={Assets.parking} alt="parking" />
                        <ListItem >
                            <ListItemText disableTypography='true'>
                                <Typography variant="body2" >{!item.name ? 'loading...' : item.name} </Typography>
                                <Typography variant="subtitle" > {!item.location ? 'loading...' : item.location} </Typography>
                                <ul className='user-list' >
                                    <li>
                                        <div style={{ display: 'flex', alignItems: "center" }} >
                                            <Money />
                                            <Typography variant="caption" >price: KES {!item.price ? 'loading...' : item.price}</Typography>
                                        </div>
                                    </li>
                                    <li>
                                        <Typography variant="caption" >free spots: {!item.spaces ? 'loading...' : item.spaces} </Typography>
                                    </li>
                                </ul>
                            </ListItemText>
                        </ListItem>
                        <Button
                            onClick={
                                // addToSpots(index, item.name, item.location, item.description, item.features, item.spaces, item.price)
                                () => saveOnClick(item._id)
                            }
                            variant="contained" size="small" >
                            <Favorite button /> Save Me!
                        </Button>
                    </Grid >
                )
            }
        </Grid>
    )
}
