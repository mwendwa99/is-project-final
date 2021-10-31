import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles, TextField, Grid, InputAdornment, Button, Typography, Divider, List, ListItem, ListItemText, ListItemAvatar, Avatar, Fab, ListItemIcon, IconButton } from '@material-ui/core';
import { DirectionsCar, Search } from '@material-ui/icons';
import CustomMap from './CustomMap';

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
        // borderRadius: '0 0 150px 150px',
        borderRadius: '5rem',
        margin: '1rem',
        // height: '5px',
        // borderTopLeftRadius: '2rem',
        background: "#edf5e0",
    }
}));

const SearchBar = ({ organizationList }) => {
    const classes = UseStyle();
    const [input, setInput] = useState('');
    console.log(organizationList)
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
                    input ? organizationList.filter((val) => {
                        if (input == "") {
                            return val
                        } else if (val.name.toLowerCase().includes(input.toLowerCase())) {
                            return val
                        }
                    }).map((item, index) => {
                        return (
                            <List item className={classes.locations} key={index} >
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Fab><DirectionsCar /></Fab>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={item.location} secondary={item.name} />
                                    <ListItemText primary={`@${item.price} Kes`} secondary={`spaces: ${item.spaces}`} />
                                    <ListItemIcon>
                                        <IconButton size='medium' ><Search /></IconButton>
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
