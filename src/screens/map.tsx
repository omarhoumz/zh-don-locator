import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type LatLngLiteral = google.maps.LatLngLiteral
type MapOptions = google.maps.MapOptions

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
  const mapRef = useRef<GoogleMap>()
  const [zoom, setZoom] = useState(12)
  const [userGeoLocation, setUserGeoLocation] = useState<LatLngLiteral | null>(
    null,
  )

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((d) => {
      const coords = { lat: d.coords.latitude, lng: d.coords.longitude }
      setUserGeoLocation(coords)
      setZoom(14)
      mapRef.current?.panTo(coords)
    }, console.error)
  }, [])

  const options = useMemo<MapOptions>(
    () => ({ disableDefaultUI: true, clickableIcons: false }),
    [],
  )
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  })

  const onLoad = useCallback((map) => (mapRef.current = map), [])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <GoogleMap
      center={center}
      zoom={zoom}
      mapContainerStyle={containerStyle}
      options={options}
      onLoad={onLoad}
    >
      {positions.map(({ position, title }, index) => {
        return <Marker position={position} title={title} key={index} />
      })}

      {!userGeoLocation ? null : (
        <Marker
          position={userGeoLocation}
          icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
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
