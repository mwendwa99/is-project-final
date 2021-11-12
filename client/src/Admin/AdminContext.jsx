import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [payload, setPayload] = useState();
    const [organizations, setOrganizations] = useState([]);

    // ??? what does this do?
    const updateOrg = (item) => {
        setPayload(item);
    };

    // get all organizations
    const getOrg = () => {
        axios.get('get-org')
            .then((response) => {
                setOrganizations(response.data.data);
            }).catch((error) => console.log(`error in fetching organization: ${error}`))
    };


    const values = { updateOrg, payload, getOrg, organizations, setPayload };

    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    )
}

const useUpdate = () => useContext(DataContext);

export { useUpdate, DataProvider };
