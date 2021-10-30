import React, { useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { useOrg } from '../Context/AuthContext';

// refactor to useRef()
const locationNames = {};

export function CustomMap({ google, locationDataObject }) {

    const { orgDetails, payload, geoData } = useOrg();

    // map details from mongo to array object
    let data = orgDetails.map((item, id) =>
        locationNames['query'] = item.location
    );
    useEffect(() => {
        // map looped organization locations to api params
        const params = {
            access_key: process.env.REACT_APP_GEO_KEY,
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
    // return each value of array in its own array
    // truncate array to only have lat and long
    var geoDataArray = Object.keys(payload).map((i) => {
        return Object.values(payload[i]).slice(0, 2)
    }
    );

    return (
        <Grid container className="map__section">
            <Grid item className="map__section--gmap_canvas" md={12}>
                <Map
                    google={google}
                    mapTypeId='roadmap'
                    initialCenter={{ lat: -1.283721, lng: 36.822759 }}
                    zoom={17.5}
                >
                    {
                        geoDataArray ?
                            geoDataArray.map((item, id) =>

                                <Marker key={id}
                                    position={{ lat: item[0], lng: item[1] }}
                                />
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