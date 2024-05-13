import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

export default function BasicMap() {
  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            {/* <MyComponent /> */}
          </MapContainer>
  )
}
