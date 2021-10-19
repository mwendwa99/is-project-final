import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Assets from '../Assets/Index';
import { makeStyles, InputBase, Typography } from '@material-ui/core';
import CustomMap from './Map';
import { useOrg } from '../Context/AuthContext';

const UseStyle = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
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
    const [place, setPlace] = useState('');
    const [location] = useState({ id: '', locationName: '', locationData: '' });

    return (
        <div className={classes.wrapper}>
            <form
                className={classes.root} >
                <InputBase
                    autoFocus='true'
                    type="text"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    placeholder="Search here..."
                />
                <div className={classes.searchIcon} >
                    <button type="submit">
                        <img height="200%" width="200%" src={Assets.search} alt="" />
                    </button>
                </div>
            </form >
            <div >
                <CustomMap locationDataObject={location} />
            </div>
        </div>
    );
};

export default TextFields;
