import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { stores } from 'src/config/data'

export type LatLngLiteral = google.maps.LatLngLiteral
type MapOptions = google.maps.MapOptions

type MapProps = {
  onMapLoad: (map: google.maps.Map) => void | Promise<void>
  zoom: number
  userGeoLocation?: LatLngLiteral | null
}

export default function Map({ onMapLoad, zoom, userGeoLocation }: MapProps) {
  const options = useMemo<MapOptions>(
    () => ({ disableDefaultUI: true, clickableIcons: false }),
    [],
  )
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  })

  const onLoad = useCallback(onMapLoad, [onMapLoad])

  if (!isLoaded) {
    return (
      <div className='flex flex-grow items-center justify-center bg-gray-100 p-4'>
        Loading...
      </div>
    )
  }

  return (
    <GoogleMap
      center={center}
      zoom={zoom}
      mapContainerStyle={containerStyle}
      options={options}
      onLoad={onLoad}
    >
      {stores.map(({ position, title }, index) => {
        return <Marker position={position} title={title} key={index} />
      })}

      {!userGeoLocation ? null : (
        <Marker
          position={userGeoLocation}
          icon='https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        />
      )}
    </GoogleMap>
  )
}

const containerStyle = {
  width: '100%',
  inset: 0,
}
const center = {
  lat: 33.590114,
  lng: -7.5927022,
}
