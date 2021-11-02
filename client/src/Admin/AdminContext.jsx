import React, { createContext, useState, useContext, useEffect } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [payload, setPayload] = useState();

    const updateOrg = (item) => {
        setPayload(item)
    }

    const values = { updateOrg, payload }

    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    )
}

const useUpdate = () => useContext(DataContext);

export { useUpdate, DataProvider };
