import React from 'react'
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap
} from 'react-google-maps'
//-0.2412458217748353, -78.52975291189183
const Map =(props)=>{
    return(
        <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat:-0.2412458217748353, lng:-78.52975291189183}}
        >

        </GoogleMap>

    );
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
);