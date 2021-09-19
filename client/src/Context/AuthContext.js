import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [adminLoggedIn, setAdminLoggedIn] = useState(false);

    const login = async () => setUserLoggedIn(true);
    const logout = async () => setUserLoggedIn(false);
    const adminLogin = async () => setAdminLoggedIn(true);
    const adminLogout = async () => setAdminLoggedIn(false);

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