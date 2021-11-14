import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useOrgContext } from '../../Context/OrgContext';
import Geocode from "react-geocode";

const MapContext = createContext();
Geocode.setApiKey(process.env.REACT_APP_GMAP_KEY);

const MapContextProvider = ({ children }) => {
    const [locations, setLocations] = useState([]);
    const [error, setError] = useState(null);
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

    // request organization locations
    const { spots } = useOrgContext();

    // function to convert address to geocode
    const geoCode = async (location) => {
        Geocode.fromAddress(location).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                setCoordinates({ lat, lng });
                // push to coodinates array
                setLocations([...locations, { location, lat, lng }]);
            },
            (error) => {
                setError({ message: 'location does not exist', error: error });
            }
        )
    };

    useEffect(() => {
        // map spots to locations
        spots.map(spot => {
            // map spots to name and address
            const { location } = spot;
            setLocations(spot);
            // return object with name and address
            geoCode(location);
        });
    }, [spots]);

    // geoCode(location);

    console.log(locations);




    const values = {
        coordinates,
        error,
    }

    return (
        <MapContext.Provider value={values}>
            {children}
        </MapContext.Provider>
    );
};

const useMapContext = () => {
    return useContext(MapContext);
}

export { MapContextProvider, useMapContext };