import React, { useState, useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { ContactSupportRounded } from '@material-ui/icons';

const mapStyle = {
    height: "100%",
    width: "100%"
}

const locationNames = [];

export function CustomMap({ google, availableSpace, locationDataObject }) {

    const [loc, setLoc] = useState()
    const [geoCode, setGeoCode] = useState({ lat: '', lng: '' })


    useEffect(() => {
        const params = {
            access_key: '1ef34865ebeb328d83af2a87db07123c',
            query: 'Tom Mboya St',
            country: 'KE',
            region: 'Nairobi'
        }
        axios.get('http://api.positionstack.com/v1/forward', { params })
            .then((res) => {
                // setData(res.data.data[0])
                setGeoCode({ lat: res.data.data[0].latitude, lng: res.data.data[0].longitude })
            })
            .then(
                // if (await availableSpace) {
                availableSpace.map((item,) =>
                    locationNames.push(item.location)
                )
                // }
            )
            .catch(error => {
                console.log(error);
            });

    }, [availableSpace])

    console.log(locationNames)


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