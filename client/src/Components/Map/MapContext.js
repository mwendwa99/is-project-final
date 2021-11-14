import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useOrgContext } from '../../Context/OrgContext';

const MapContext = createContext();

const MapContextProvider = ({ children }) => {
    const [locations, setLocations] = useState(null);
    const [coords, setCoords] = useState(null);

    // request organization locations
    const { spots } = useOrgContext();
    console.log('spots', spots);

    useEffect(() => {
        // map spots to locations
        const locations = spots.map(spot => {
            return {
                name: spot.name,
                location: spot.location,
                id: spot._id
            }
        });
        console.log('locations', locations);
    }, [])



    const values = {
        locations,
        setLocations,
        coords,
        setCoords

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