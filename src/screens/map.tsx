import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import React, { useMemo } from 'react'

const position = {
  lat: 33.5577451,
  lng: -7.6771939,
}

const positions = [
  { position: { lat: 33.5577451, lng: -7.6771939 }, title: 'Ali Market' },
  { position: { lat: 33.588713, lng: -7.6312917 }, title: '' },
  { position: { lat: 33.522583, lng: -7.6466347 }, title: '' },
  { position: { lat: 33.545774, lng: -7.6045887 }, title: '' },
]

export default function Map() {
  const options = useMemo(
    () => ({ disableDefaultUI: true, clickableIcons: false }),
    [],
  )
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  })

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <GoogleMap
      center={center}
      zoom={12}
      mapContainerStyle={containerStyle}
      options={options}
    >
      {positions.map(({ position, title }, index) => {
        return <Marker position={position} title={title} key={index} />
      })}
    </GoogleMap>
  )
}

const containerStyle = {
  width: '100%',
  inset: 0,
}
const center = {
  lat: 33.580114,
  lng: -7.5927022,
}
