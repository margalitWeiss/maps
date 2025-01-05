import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// קומפוננטה לעדכון המיקום של המפה
const UpdateMapView = ({ lat, lon }) => {
  const map = useMap(); // גישה לאובייקט המפה

  useEffect(() => {
    // שינוי המיקום של המפה עם setView
    if (lat && lon) {
      map.setView([lat, lon], 13); // משנה את המיקום ומעדכן את רמת הזום
    }
  }, [lat, lon, map]); // כל פעם ש-lat או lon משתנים, מבצעים את הפעולה

  return null; // קומפוננטה זו לא מציגה שום דבר, היא רק מעדכנת את המפה
};

const Map = ({ lat, lon }) => {
  return (
    <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={true} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* עדכון המיקום של המפה */}
      <UpdateMapView lat={lat} lon={lon} />
      <Marker position={[lat, lon]}>
        <Popup>
          Latitude: {lat} <br /> Longitude: {lon}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
