import React, { createContext, useContext, useState, useEffect, useReducer } from "react";
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
    const [orgDetails, setOrgDetails] = useState([]);
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
    const [userSpot, setUserSpot] = useState([]);
    console.log('state', userSpot);

    // function to update user saves to backend
    const savedSpot = async (data) => {
        // axios post

    }

    return (
        <UserContext.Provider value={[userSpot, setUserSpot]}>
            {children}
        </UserContext.Provider>
    )
}


const useAuth = () => useContext(AuthContext);
const useOrg = () => useContext(OrgContext);
const UserStateValue = () => useContext(UserContext);

export { AuthProvider, useAuth, OrgProvider, useOrg, UserStateValue, UserProvider }