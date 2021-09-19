import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Grid } from '@material-ui/core';

const mapStyle = {
    height: "100%",
    width: "100%"
}

export function CustomMap({ google, locationDataObject }) {

    // 1.2921° S, 36.8219° E
    console.log(`this is the locations data :${locationDataObject.locationName}`)

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
                        locationDataObject.locationData ? <Marker position={locationDataObject.locationData} />
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