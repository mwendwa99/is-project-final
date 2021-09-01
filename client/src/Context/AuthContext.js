/* eslint-disable import/no-anonymous-default-export */
import { useState, useEffect, createContext } from 'react';
import AuthService from '../Service/AuthService';

// auth context provider
export const AuthContext = createContext();

// wrap components(children) to context provider
export default ({ children }) => {
    // user logged in?
    const [user, setUser] = useState(null);
    // user authenticated?
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // is there data from backend?
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        AuthService.isAuthenticated().then(data => {
            // map user to car number plate
            setUser(data.plate);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        })
    }, []);

    return (
        <div>
            {!isLoaded ? <h1>Loading...</h1> :
                <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
                    {children}
                </AuthContext.Provider>
            }
        </div>
    )
};