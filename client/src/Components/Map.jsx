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

const locationNames = {};
// const geoCodes = {};

export function CustomMap({ google, locationDataObject }) {

    const { orgDetails, payload, geoData } = useOrg();
    const [geoCodes, setGeoCodes] = useState()

    // map details from mongo to array object
    let data = orgDetails.map((item, id) =>
        locationNames['query'] = item.location
    );
    useEffect(() => {
        // map looped organization locations to api params
        const params = {
            access_key: '1ef34865ebeb328d83af2a87db07123c',
            query: {
                "batch": `${data}`
            },
            country: 'KE',
            region: 'Nairobi'
        }
        // get geocode data of organizations
        axios.get('http://api.positionstack.com/v1/forward', { params })
            .then((res) => {
                geoData(res.data)
            })
            .catch(error => {
                console.log(error);
            });

    }, [])

    // consume geo data from global state
    var geoDataArray = Object.keys(payload).map(function (i) {
        return payload[i];
    });
    console.log('with map', geoDataArray)

    return (
        <Grid container className="map__section">
            <Grid item className="map__section--gmap_canvas" md={12}>
                <Map
                    google={google}
                    style={mapStyle}
                    mapTypeId='roadmap'
                    initialCenter={{ lat: -1.283721, lng: 36.822759 }}
                    zoom={!locationDataObject ? 14 : 15.5}
                >
                    {
                        geoDataArray ?
                            geoDataArray.map((item, id) =>
                                <Marker key={id} position={{ lat: item.latitude, lng: item.longitude }} />
                            )
                            : ''

                    }
                </Map>
            </Grid>
        </Grid>
    )
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GMAP_KEY
})(CustomMap)