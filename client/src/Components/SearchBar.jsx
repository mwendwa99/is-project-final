import React from 'react';

import { assets } from '../Assets/Index';
import { makeStyles, Button, InputBase } from '@material-ui/core';

const UseStyle = makeStyles((theme) => ({
    root: {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: " 15px",
        width: "80%",
        marginTop: theme.spacing(3)
    },
}));
const TextFields = () => {

    const classes = UseStyle();

    return (
        <form className={classes.root} >
            <InputBase autoFocus='true' type="text" placeholder="Search..." />
            <Button
                disableFocusRipple="true"
                variant='text'
                disableElevation="true"
                size="small"
                disableRipple="true"
                className='search__button'>
                <img src={assets.search} alt="" />
            </Button>

        </form>
    );
};

export default TextFields