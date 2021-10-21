import React, { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

const AuthContext = createContext({});
const OrgContext = createContext();
const UserContext = createContext();

const AuthProvider = ({ children }) => {
    const [userLoggedIn, setUserLoggedIn] = useState();
    const [adminLoggedIn, setAdminLoggedIn] = useState();

    const login = async (user) => setUserLoggedIn(user);
    const logout = async () => setUserLoggedIn();
    const adminLogin = async (admin) => setAdminLoggedIn(admin);
    const adminLogout = async () => setAdminLoggedIn();


    const authContextValue = {
        login,
        userLoggedIn,
        logout,
        adminLogin,
        adminLoggedIn,
        adminLogout,
    };
    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
};

const OrgProvider = ({ children }) => {
    // details from backend
    const [orgDetails, setOrgDetails] = useState([]);

    // api response from positionstack
    // position stack
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        axios.get('/get-org')
            .then((res) => setOrgDetails(res.data))
            .catch((err) => console.log(err))
    }, []);

    const geoData = async (data) => {
        Object.keys(data).map((i) =>
            setPayload(data[i])
        );
    }
    const orgValue = { orgDetails, geoData, payload }

    return (
        <OrgContext.Provider value={orgValue}>
            {children}
        </OrgContext.Provider>
    )
}

const UserProvider = ({ children }) => {
    const [userSavedSpot, setUserSavedSpot] = useState([]);
    const [userSelectedSpot, setUserSelectedSpot] = useState();

    // function to update user saves to backend
    const savedSpot = async (data) => {
        // axios post
        setUserSavedSpot(data);
    }
    // function to update specific user saves with email
    // my naming convention is terrible
    // will refactor at the end of all this
    const selectedSpot = (spot) => {
        setUserSelectedSpot(spot);
    }
    const values = {
        savedSpot,
        userSavedSpot,
        selectedSpot,
        userSelectedSpot,
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}


const useAuth = () => useContext(AuthContext);
const useOrg = () => useContext(OrgContext);
const useSavedValue = () => useContext(UserContext);

export { AuthProvider, useAuth, OrgProvider, useOrg, useSavedValue, UserProvider }