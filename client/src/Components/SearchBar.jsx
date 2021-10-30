import React, { useState } from 'react';
import axios from 'axios';
import Assets from '../Assets/Index';
import { makeStyles, TextField, Grid, InputAdornment, Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import CustomMap from './CustomMap';
import { useOrg } from '../Context/AuthContext';

const UseStyle = makeStyles((theme) => ({
    gridContainer: {
        display: "flex",
        flexDirection: 'column',
    },
    textField: {
        "& .MuiFilledInput-root": {
            padding: theme.spacing(1),
            background: "#edf5e0",
            borderRadius: '5rem',
        }
    },
    labelRoot: {
        fontSize: '1.2rem',
    },
}));

const TextFields = () => {
    const classes = UseStyle();
    const [place, setPlace] = useState('');

    return (
        <Grid container className={classes.gridContainer}>
            <Grid item sm={11} >
                <TextField
                    fullWidth
                    className={classes.textField}
                    variant='filled'
                    autoFocus
                    type="text"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    label="Search here"
                    InputLabelProps={{
                        classes: { root: classes.labelRoot }
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button variant='text' >
                                    <Search />
                                </Button>
                            </InputAdornment>
                        ),
                        disableUnderline: true
                    }}
                />
            </Grid>
            <CustomMap />
        </Grid>
    );
};

export default TextFields;
