import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function Date({ sendDate }) {
    const classes = useStyles();
    const [date, setDate] = useState();

    sendDate(date);

    return (
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                label="Date"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{ disableUnderline: true }}
                onChange={(e) => setDate(e.target.value)}
            />
        </form>
    );
}
