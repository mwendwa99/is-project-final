import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const AuthProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(false);

    const login = () => sleep(1).then(() => setLoggedIn(true))
    const logout = () => sleep(1).then(() => setLoggedIn(false))

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