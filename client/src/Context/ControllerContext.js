import { createContext, useContext, useState } from 'react';
import axios from 'axios';

// create context provider
const ControllerContext = createContext();

export const ControllerProvider = ({ children }) => {
    const [bookings, setBookings] = useState([]);
    const [message, setMessage] = useState(null);
    const [update, setUpdate] = useState(false);
    const email = localStorage.getItem('email');

    // grab id of the spot to be edited from SavedSpot.jsx
    const [bookingId, setBookingId] = useState(null);

    // get all bookings for emails
    const getBookings = async () => {
        try {
            const res = await axios.get(`/get-controller/${email}`);
            setBookings(res.data);
        } catch (err) {
            setMessage(err);
        }
    };

    // update a spot
    const updateBooking = (booking) => {
        axios.put(`/update-controller/${bookingId}`, booking)
            .then((response) => {
                // setMessage(response.data);
                getBookings();
            })
            .catch((message) => setMessage(message));
        setUpdate(false);
    };  // end updateBooking

    // delete booking
    const deleteBooking = (id) => {
        axios.delete(`/delete-controller/${id}`)
            .then((response) => getBookings())
            .catch((error) => setMessage('failed to delete!'));
        setMessage('deleted successfully!');
    };

    const values = {
        bookings,
        message,
        update,
        setBookingId,
        setUpdate,
        updateBooking,
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
