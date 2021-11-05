import { createContext, useContext, useState } from 'react';
import axios from 'axios';

// create context provider
const ControllerContext = createContext();

export const ControllerProvider = ({ children }) => {
    const [bookings, setBookings] = useState([]);
    const [message, setMessage] = useState(null);
    const email = localStorage.getItem('email');

    const getBookings = () => {
        axios.get(`/get-controller/${email}`)
            .then((response) => setBookings(response.data))
            .catch((message) => setMessage(message));
    };

    const deleteBooking = async (id) => {
        axios.delete(`/delete-controller/${id}`)
            .then((response) => getBookings())
            .catch((error) => setMessage('failed to delete!'));
        setMessage('deleted successfully!');
    };

    const values = {
        bookings,
        message,
        deleteBooking,
        getBookings
    };

    return (
        <ControllerContext.Provider value={values}>
            {children}
        </ControllerContext.Provider>
    );
};

export const useController = () => useContext(ControllerContext);
