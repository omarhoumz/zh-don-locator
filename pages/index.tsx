import type { NextPage } from 'next'
import { useCallback, useRef, useState } from 'react'
import { GoogleMap } from '@react-google-maps/api'

import Map from '@/screens/map'
import type { LatLngLiteral } from '@/screens/map'
import Header from '@/components/header'
import StoresList from '@/screens/stores-list'
import DefaultHead from '@/components/default-head'

const Home: NextPage = () => {
  const mapRef = useRef<GoogleMap>()
  const [zoom, setZoom] = useState(12)
  const [userGeoLocation, setUserGeoLocation] = useState<LatLngLiteral | null>(
    null,
  )

  const tt = useCallback(() => {
    navigator.geolocation.getCurrentPosition((d) => {
      const coords = { lat: d.coords.latitude, lng: d.coords.longitude }
      setUserGeoLocation(coords)
      setZoom(14)
      mapRef.current?.panTo(coords)
    }, console.error)
  }, [])

  const onLoad = useCallback((d) => (mapRef.current = d), [])

  return (
    <div>
      <DefaultHead />

      <main className='flex h-screen flex-col text-teal-900'>
        <Header />
        <div className='grid flex-grow grid-rows-homepage md:grid-flow-col md:grid-cols-homepage md:grid-rows-1'>
          <div className='order-2 overflow-auto p-4 md:order-1'>
            <StoresList locateMe={tt} />
          </div>
          <div className='order-1 flex md:order-2'>
            <Map
              onMapLoad={onLoad}
              zoom={zoom}
              userGeoLocation={userGeoLocation}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
