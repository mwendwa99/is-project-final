import React from 'react';

import Assets from '../Assets/Index';
import { makeStyles, InputBase } from '@material-ui/core';

const UseStyle = makeStyles((theme) => ({
    root: {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: " 15px",
        display: "flex",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        background: '#EDF5E0',
    },
    searchIcon: {
        height: "30px",
        width: "30px",
    },
}));
const TextFields = () => {

    const classes = UseStyle();

    return (
        <form className={classes.root} >
            <InputBase autoFocus='true' type="text" placeholder="Search here..." />
            <div className={classes.searchIcon} >
                <img height="100%" width="100%" src={Assets.search} alt="" />
            </div>
        </form >
    );
};

export default TextFields