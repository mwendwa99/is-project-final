import React, { useState } from 'react';
import axios from 'axios';
import Assets from '../Assets/Index';
import { makeStyles, InputBase } from '@material-ui/core';
import Map from './Map';

const UseStyle = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between',
        // padding: theme.spacing(1),
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
    // const locationDetails = useContext(locationContext)
    const classes = UseStyle();
    const [place, setPlace] = useState('');
    const [location, setLocation] = useState('');


    const options = {
        method: 'GET',
        url: 'https://trueway-places.p.rapidapi.com/FindPlaceByText',
        params: { text: `${place}`, language: 'en' },
        headers: {
            'x-rapidapi-host': 'trueway-places.p.rapidapi.com',
            'x-rapidapi-key': PROCESS.ENV.REACT_RAPID_API_KEY
        }
    };

    const formSubmit = (e) => {
        e.preventDefault();
        // get spot
        axios.request(options).then(function (response) {
            console.log(response.data.results[0]);
            setLocation(response.data.results[0]);
        }).catch(function (error) {
            console.error(error);
            alert(error);
        });
    }

    return (
        <div className={classes.wrapper}>
            <form onSubmit={formSubmit} className={classes.root} >
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
            {/* <Map location={location} /> */}
        </div>
    );
};

export default TextFields;
