import React from 'react';
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

export default function TextInput() {
    const classes = useStyles();
    const inputProps = {
        min: 0,
        max: 5,
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="filled-basic"
                type="number"
                inputProps={inputProps}
                InputProps={{ disableUnderline: true }}
                placeholder='number of spaces'
                size="large"
                margin="none" />
        </form>
    );
}
