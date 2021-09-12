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
