import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Assets from '../Assets/Index';
import { makeStyles, InputBase, Typography } from '@material-ui/core';
import CustomMap from './Map';
import ReactSearchBox from 'react-search-box';
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
    const [location, setLocation] = useState({ id: '', locationName: '', locationData: '' });
    const { orgDetails } = useOrg();

    // get single location names into an array
    let data = orgDetails.map((item) => item.location);

    // const formSubmit = (e) => {
    //     e.preventDefault();
    //     // get spot
    //     axios.request(options).then(function (response) {
    //         setLocation(
    //             {
    //                 locationId: response.data.results[0].id,
    //                 locationName: response.data.results[0].address,
    //                 locationData: response.data.results[0].location,
    //             }
    //         );
    //     }).catch(function (error) {
    //         console.error(error);
    //         alert(error);
    //     });
    // }

    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://trueway-places.p.rapidapi.com/FindPlaceByText',
    //         params: { text: `${place}`, language: 'en' },
    //         headers: {
    //             'x-rapidapi-host': 'trueway-places.p.rapidapi.com',
    //             'x-rapidapi-key': process.env.REACT_APP_RAPID_KEY
    //         }
    //     };

    //     axios.request(options).then(function (response) {
    //         setLocation(
    //             {
    //                 locationId: response.data.results[0].id,
    //                 locationName: response.data.results[0].address,
    //                 locationData: response.data.results[0].location,
    //             }
    //         );
    //     }).catch(function (error) {
    //         console.error(error);
    //         alert(error);
    //     });
    // }, []);

    const onChange = (data, event) => {

        return data.filter((item) => {
            const locationName = item
            return locationName.includes(event)
        })

    }
    console.log('locale', data)


    return (
        <div className={classes.wrapper}>
            {/* <Typography variant='subtitle2'>{location ? location.locationName : 'waiting'} </Typography> */}
            <ul  >
                {data.map((post, i) => (
                    <li key={i} style={{ color: 'white' }} >
                        <Typography variant='h1' style={{ color: 'white' }}>{post.name}</Typography>
                    </li>
                ))}
            </ul>
            <form
                //  onSubmit={formSubmit} 
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
