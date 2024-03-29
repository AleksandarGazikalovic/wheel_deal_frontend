import React, { useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import "./googleMaps.css";
import CarMarker from "../../assets/carMarker.png";

const GoogleMaps = ({ selectedLocation }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
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
        {selectedLocation && <Marker position={center} icon={CarMarker} />}
      </GoogleMap>
    </div>
  );
};

export default GoogleMaps;
