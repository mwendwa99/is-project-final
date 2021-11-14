import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import mapStyles from './mapStyles';
import { useMapContext } from './MapContext';

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

    const { coordinates } = useMapContext();
    const [markers, setMarkers] = useState([]);
    // const pos = coordinates.toAr
    // // put coordinates into an array
    // const pos = [coordinates.lat, coordinates.lng];

    // console.log(pos);

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading Maps';

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={16}
            options={options}
            center={center}
        // setMarkers={coordinates}
        >
            <Marker
                position={{ lat: coordinates.lat, lng: coordinates.lng }}
                onClick={() => {
                    console.log('You clicked me!');
                }}
            />
        </GoogleMap>
    )
}


export default Map;