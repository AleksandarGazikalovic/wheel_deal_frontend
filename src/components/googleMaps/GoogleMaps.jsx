// GoogleMaps.jsx

import React, { useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import "./googleMaps.css";

const GoogleMaps = ({ selectedLocation }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "2rem",
  };
  const latLng = selectedLocation
    ? {
        lat: parseFloat(selectedLocation?.latLng.lat),
        lng: parseFloat(selectedLocation?.latLng.lng),
      }
    : null;
  const center = latLng || {
    lat: 44.7866, // Latitude for Belgrade
    lng: 20.4489, // Longitude for Belgrade
  };
  const zoomLevel = selectedLocation ? 15 : 12;

  return (
    <div className="wd--google-maps-wrapper">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoomLevel}
      >
        {selectedLocation && <Marker position={center} />}
      </GoogleMap>
    </div>
  );
};

export default GoogleMaps;
