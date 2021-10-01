import React, { useState, useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { ContactSupportRounded } from '@material-ui/icons';
import { useOrg } from '../Context/AuthContext';

const mapStyle = {
    height: "100%",
    width: "100%"
}

// const locationNames = [{
//     "query": ''
// }];


export function CustomMap({ google, locationDataObject }) {

    const [apiRes, setApiRes] = useState()
    const [geoCode, setGeoCode] = useState({ lat: '', lng: '' })

    const { orgDetails } = useOrg();

    // console.log('this is the details', orgDetails);


    // let data = orgDetails.map((item) => (
    //     query:{
    //         "batch":[
    //             "query":{item.location}
    //         ]
    //     }
    // )
    // )
    // console.log(data)


    // orgDetails.map((item)=>({
    // query:{item.location}
    // }))
    // orgDetails.map((item) => ({ locationNames: item.location }))

    // console.log('this is the location', locationNames);

    const params = {
        access_key: '1ef34865ebeb328d83af2a87db07123c',
        query: {
            "batch": [
                // "query": `${}`
            ]
        },
        country: 'KE',
        region: 'Nairobi'
    }

    useEffect(() => {

        axios.get('http://api.positionstack.com/v1/forward', { params })
            .then((res) => {
                setApiRes(res.data)
            })
            .catch(error => {
                console.log(error);
            });

    }, [orgDetails, apiRes])

    // console.log('this is the res', apiRes);



    // console.log(locationNames)


    // 1.2921° S, 36.8219° E
    return (
        <Grid container className="map__section">
            {/* <h1> {data[0]} </h1> */}
            <Grid item className="map__section--gmap_canvas" md={12}>
                <Map
                    google={google}
                    style={mapStyle}
                    mapTypeId='roadmap'
                    initialCenter={{ lat: -1.283721, lng: 36.822759 }}
                    zoom={!locationDataObject ? 14 : 15.5}
                >
                    {/* {
                        locationDataObject.locationData ? <Marker position={locationDataObject.locationData} />
                            :
                            data.map((item, id) =>
                                <Marker key={id} position={geoCode} />
                            )

                    } */}
                </Map>
            </Grid>
        </Grid>
    )
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GMAP_KEY
})(CustomMap)