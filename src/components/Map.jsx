import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export default function Map({ data }) {

  const mapStyles={
    height: "50vh",
    width: "100%"
  }

  const dafaultCenter = {
    lat: data.lat,
    lng: data.lng
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
