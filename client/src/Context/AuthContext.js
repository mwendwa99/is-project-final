import React, { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

const AuthContext = createContext({});
const OrgContext = createContext();
const UserContext = createContext();

const AuthProvider = ({ children }) => {
    const [userLoggedIn, setUserLoggedIn] = useState();
    const [adminLoggedIn, setAdminLoggedIn] = useState();
    const [availableSpace, setAvailableSpace] = useState();

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
    const [orgDetails, setOrgDetails] = useState();

    useEffect(() => {
        axios.get('/get-org')
            .then((res) => setOrgDetails(res.data))
            .catch((err) => console.log(err))
    }, []);
    const orgValue = {
        orgDetails,
    }
    return (
        <OrgContext.Provider value={orgValue}>
            {children}
        </OrgContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);
const useOrg = () => useContext(OrgContext);

export { AuthProvider, useAuth, OrgProvider, useOrg }