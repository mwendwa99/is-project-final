import React, { useState } from 'react';
import { TextField, Grid, InputAdornment, List, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemIcon, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { DirectionsCar, KeyboardArrowRight, Search } from '@mui/icons-material';
// import { useHistory } from 'react-router-dom';

// import { useOrgContext } from '../../../Context/OrgContext';
import Map from '../Map/Map';

const UseStyles = makeStyles(() => ({
    gridContainer: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    },
    textField: {
        "& .MuiFilledInput-root": {
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            padding: '0.5rem',
            background: "#edf5e0",
            borderRadius: '2rem',
        }
    },
    labelRoot: {
        fontSize: '1rem',
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
    const classes = UseStyles();
    const [input, setInput] = useState('');
    // const { spots, getOrgById } = useOrgContext();
    const [search, setSearch] = useState('');
    // const history = useHistory();

    // function to get org with specific id
    // const saveOnClick = (id) => {
    //     getOrgById(id);
    //     history.push('/details');
    // }


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
                                <IconButton onClick={(e) => setSearch(input)}>
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        ),
                        disableUnderline: true
                    }}
                />
                {/* {
                    // eslint-disable-next-line array-callback-return
                    input ? spots.filter((val) => {
                        if (input === "") {
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
                                    <ListItemIcon onClick={() => saveOnClick(item._id)}>
                                        <IconButton size='large' ><KeyboardArrowRight /></IconButton>
                                    </ListItemIcon>
                                </ListItem>
                            </List>
                        )
                    }) : null
                } */}
                <Grid item sm={12}>
                    <Map search={search} />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SearchBar;
