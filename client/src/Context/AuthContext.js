import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(false);

    const login = async () => setLoggedIn(true)
    const logout = async () => setLoggedIn(false)

    const authContextValue = {
        login,
        loggedIn,
        logout
    };
    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
};
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth }