import React from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

export default function BasicMap() {
  
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp:"LALALAL"
    },
    {
      geocode: [48.92, 2.3522],
      popUp:"<p>LALALAL<br/>HUIHUHH<p>"
    },
    {
      geocode: [48.86, 2.3622],
      popUp:"KAKAKA"
    }
  ]
  
  return (
    <MapContainer  center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker position={marker.geocode}></Marker>)
      )}
            {/* <MyComponent /> */}
    </MapContainer>
  )
}
