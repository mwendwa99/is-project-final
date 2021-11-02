import React, { useEffect, useState } from 'react';
import axios from 'axios';

// receive id
// receive type user or admin
// receive payload
// make a backend call to respective api with id
// send api call to update

const UseUpdate = (payload) => {
    const [response, setResponse] = useState();
    const [error, setError] = useState();

    const { _id: id, type } = payload;
    console.log('id', type)
    // useEffect(() => {
    //     let mounted = true;
    //     if (type === 'admin') {
    //         axios.put(`update-org/${id}`, payload)
    //             .then((res) => setResponse(res.data))
    //             .catch((err) => setError(err))
    //     }
    //     // if (type === 'user') {
    //     //     axios.put(`update-user${id}`, payload)
    //     //         .then((res) => setResponse(res.data))
    //     //         .catch((err) => setError(err))
    //     // }
    //     return function cleanup() {
    //         mounted = false
    //     }
    // }, []);
    // console.log(response)
    return { response, error }

}

export default UseUpdate;
