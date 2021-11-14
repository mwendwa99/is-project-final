import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import mapStyles from './mapStyles';

const libraries = ['places'];
const mapContainerStyle = {
    width: '100%',
    height: '30rem',
};
const center = {
    lat: -1.2850,
    lng: 36.8219
};
const options = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: mapStyles,
};


const Map = ({ search }) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GMAP_KEY,
        libraries,
    });

    const [markers, setMarkers] = useState([]);

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading Maps';

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={16}
            options={options}
            center={center}
        ></GoogleMap>
    )
}


export default Map;