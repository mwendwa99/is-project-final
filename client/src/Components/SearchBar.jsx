import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles, TextField, Grid, InputAdornment, List, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemIcon, IconButton } from '@material-ui/core';
import { DirectionsCar, KeyboardArrowRight, Search } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import { useOrgContext } from '../Context/OrgContext';
import CustomMap from './CustomMap';
import { useSavedValue } from '../Context/AuthContext';

const UseStyle = makeStyles((theme) => ({
    gridContainer: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    },
    textField: {
        "& .MuiFilledInput-root": {
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            padding: theme.spacing(1),
            background: "#edf5e0",
            borderRadius: '2rem',
        }
    },
    labelRoot: {
        fontSize: '1.2rem',
    },
    locations: {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: '5rem',
        marginTop: '1rem',
        background: "#edf5e0",
    },
    listItem: {
        borderRadius: '5rem',
    },
}));

const SearchBar = () => {
    const classes = UseStyle();
    const [input, setInput] = useState('');
    const { spots, getOrgById, orgById, userSpot, userSpotData } = useOrgContext();

    // data from mongo
    const [data, setData] = useState();
    // const { savedSpot } = useSavedValue();
    const history = useHistory();

    // listener to go to next page
    // useEffect(() => {
    //     if (userOrg) {
    //         history.push('/details')
    //     }
    // }, [orgById]);

    // function to get org with specific id
    const saveOnClick = async (id, data) => {
        getOrgById(id);
        // if (await orgById) {
        //     userSpotData(data)
        //     if (userSpot) {
        //         console.log('qa', userSpot)
        //         history.push('/details');
        //     }
        // }
        // setData(val);
        // console.log(val);
        // axios.get(`/get-org/${savedSpotId}`)
        //     .then((response) => {
        //         if (response) {
        //             setData(response.data)
        //         }
        //     })
        //     .catch((error) => console.log(error));

    }
    // push data to context
    // savedSpot(data);

    return (
        <Grid container className={classes.gridContainer}>
            <Grid item sm={12} >
                <TextField
                    fullWidth
                    className={classes.textField}
                    variant='filled'
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    label="Search location"
                    InputLabelProps={{
                        classes: { root: classes.labelRoot }
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Search />
                            </InputAdornment>
                        ),
                        disableUnderline: true
                    }}
                />
                {
                    input ? spots.filter((val) => {
                        if (input == "") {
                            return val
                        } else if (val.location.toLowerCase().includes(input.toLowerCase())) {
                            return val
                        }
                    }).map((item, index) => {
                        return (
                            <List item className={classes.locations} key={index} >
                                <ListItem className={classes.listItem}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <DirectionsCar />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={item.location} secondary={item.name} />
                                    <ListItemText primary={`@${item.price} Kes`} secondary={`spaces: ${item.spaces}`} />
                                    <ListItemIcon onClick={() => saveOnClick(item._id, item)}>
                                        <IconButton size='large' ><KeyboardArrowRight /></IconButton>
                                    </ListItemIcon>
                                </ListItem>
                            </List>
                        )
                    }) : null
                }
                <Grid item sm={12}>
                    <CustomMap />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SearchBar;
