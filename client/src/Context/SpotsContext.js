// this file contains the spots each user selects on the home page
import { useState, createContext, useContext } from 'react';

// context for the spots
const SpotsContext = createContext();

// Provider for the spots
export const SpotsProvider = ({ children }) => {
    const [userSavedSpot, setUserSavedSpot] = useState([]);

    // function to update user saves to backend
    const savedSpot = async (data) => {
        // axios post
        setUserSavedSpot(data);
    };
    const values = { savedSpot, userSavedSpot }
    return (
        <SpotsContext.Provider value={values}>
            {children}
        </SpotsContext.Provider>
    )
}


// Consumer for the spots