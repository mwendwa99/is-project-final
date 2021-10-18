import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
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
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="filled-basic"
                type="number"
                inputProps={inputProps}
                InputProps={{ disableUnderline: true }}
                placeholder='number of spaces'
                value={!initialValue ? 1 : initialValue}
                onChange={(e) => setValue(e.target.value)}
                size="large"
                margin="none" />
        </form>
    );
}
