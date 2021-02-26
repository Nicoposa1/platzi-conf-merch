import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export default function Map() {

  const mapStyles={
    height: "50vh",
    width: "100%"
  }

  const dafaultCenter = {
    lat: 19.4267261,
    lng: -99.1718796
  }

  return (
    <LoadScript googleMapsApiKey='AIzaSyBTjx3LD8E2yhPTv6fZgIkA9b44uhCC-X4'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={9}
        center={dafaultCenter}
      >
        <Marker position={dafaultCenter} />
      </GoogleMap>
    </LoadScript>
    )
}
