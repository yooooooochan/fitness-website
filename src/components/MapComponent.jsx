import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Mapbox = () => {
    return (
        <Map
            center={{ lat: 37.294, lng: 126.976 }}
            style={{ width: "100%", height: "500px" }}
        >
            <MapMarker position={{ lat: 37.294, lng: 126.976 }} />
        </Map>
    );
};

export default Mapbox;
