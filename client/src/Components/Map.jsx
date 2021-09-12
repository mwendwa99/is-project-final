import React, { useContext } from 'react';
import { Typography, Grid } from '@material-ui/core';

const Map = async ({ location }) => {

    // const lat = await location.location.lat;
    // const lng = await location.loaction.lng;
    // const id = await location.id;

    return (
        <Grid md={12} container className='map__section' >
            <Grid item md={12} className="map__section--gmap_canvas">
                {/* <iframe
                    // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7981.413414388601!2d36.82505041202057!3d-1.2848777839570296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d714b90b4d%3A0xf58d8f9b297c294c!2sCentral%20Business%20District%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1624621161831!5m2!1sen!2ske"
                    // src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCE-8MVTOm3dq0IRhNgLY9Emxj7-rTnyjo&q=id` allowfullscreen
                    src="https://www.google.com/maps/embed/v1/search?q=Kimathi%20Street%2C%20Nairobi%2C%20Kenya&key=AIzaSyDfVZjxczlutXmsTMZVcQILHDe4jAjbkWk"
                    title="cbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0, overflow: 'auto' }}
                    allowfullscreen=""
                    loading="eager">
                </iframe> */}
            </Grid>
        </Grid>
    )
}

export default Map
