import React, { createContext, useContext, useState } from "react";
import axios from 'axios';
const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [userLoggedIn, setUserLoggedIn] = useState();
    const [adminLoggedIn, setAdminLoggedIn] = useState();

    const login = async (email) => setUserLoggedIn(email);
    const logout = async () => setUserLoggedIn();
    const adminLogin = async (token) => setAdminLoggedIn(token);
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
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth }