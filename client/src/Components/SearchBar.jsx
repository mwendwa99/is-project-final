import React from 'react';
import TextField from '@material-ui/core/TextField';
import { roundTextFieldStylesHook } from '@mui-treasury/styles/textField/round';

import { assets } from '../Assets/Index';
import { makeStyles } from '@material-ui/core';

const UseStyle = makeStyles((theme) => ({
    root: {
        position: "absolute",
        right: 0
    },
}));
const TextFields = () => {

    const classes = UseStyle();

    const inputBaseStyles = roundTextFieldStylesHook.useInputBase();
    return (
        <div >
            <TextField
                placeholder={'Search...'}
                margin={'normal'}
                InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
            />
            {/* <div className={classes.root}>
                <img src={assets.search} alt="" />
            </div> */}
        </div>
    );
};

export default TextFields