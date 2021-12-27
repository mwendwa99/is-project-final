import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
    root: {
        '& > *': {
            width: '25ch',
        },
    },
}));

export default function TextInput({ sendDataToParent, spaces, initialValue }) {
    const classes = useStyles();
    const [value, setValue] = useState()
    const inputProps = {
        min: 1,
        max: spaces,
    };
    // send data to spotDetails
    sendDataToParent(value)

    return (
        <TextField className={classes.root}
            id="filled-basic"
            variant="outlined"
            required
            type="number"
            inputProps={inputProps}
            InputProps={{ disableUnderline: true }}
            placeholder='number of spaces'
            value={!initialValue ? 1 : initialValue}
            onChange={(e) => setValue(e.target.value)}
            size="large"
            margin="normal" />
    );
}
