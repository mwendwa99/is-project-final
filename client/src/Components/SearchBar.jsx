import React, { useState } from 'react';
import axios from 'axios';
import Assets from '../Assets/Index';
import { makeStyles, InputBase, Typography } from '@material-ui/core';
import CustomMap from './Map';

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
    const [location, setLocation] = useState({ id: '', locationName: '', locationData: '' });


    const options = {
        method: 'GET',
        url: 'https://trueway-places.p.rapidapi.com/FindPlaceByText',
        params: { text: `${place}`, language: 'en' },
        headers: {
            'x-rapidapi-host': 'trueway-places.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_KEY
        }
    };

    const formSubmit = (e) => {
        e.preventDefault();
        // get spot
        axios.request(options).then(function (response) {
            console.log(response.data.results);
            setLocation(
                {
                    locationId: response.data.results[0].id,
                    locationName: response.data.results[0].address,
                    locationData: response.data.results[0].location,
                }
            );
        }).catch(function (error) {
            console.error(error);
            alert(error);
        });
    }

    // console.log(`this is location from api:${location}`)
    return (
        <div className={classes.wrapper}>
            <Typography variant='subtitle2'>{location ? location.locationName : 'waiting'} </Typography>
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
            <div >
                <CustomMap locationDataObject={location} />
            </div>
        </div>
    );
};

export default TextFields;
