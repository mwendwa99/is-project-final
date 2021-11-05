import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

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


const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }