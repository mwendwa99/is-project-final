import React from 'react';
import { Typography } from '@material-ui/core';

const Map = () => {
    return (
        <div className='map__section' >
            <Typography variant="h1" >Spots available...</Typography>
            <div className="map__section--frame">
                <div className="map__section--mapouter">
                    <div className="map__section--gmap_canvas">
                        <iframe
                            title="cbd map"
                            width="870"
                            height="340"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=nairobi%20cbd&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                        <a href="https://putlocker-is.org"></a>
                        <br />
                        <a href="https://www.embedgooglemap.net">build custom google map</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map
