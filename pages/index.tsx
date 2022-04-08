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
  const [locateLoading, setLocateLoading] = useState(false)
  const [userGeoLocation, setUserGeoLocation] = useState<LatLngLiteral | null>(
    null,
  )

  const goTo = useCallback((position: LatLngLiteral) => {
    setZoom(14)
    mapRef.current?.panTo(position)
  }, [])

  const locateMe = useCallback(() => {
    setLocateLoading(true)
    if (navigator.geolocation) {
      if (userGeoLocation) {
        goTo(userGeoLocation)
      }

      navigator.geolocation.getCurrentPosition(
        (d) => {
          const coords = { lat: d.coords.latitude, lng: d.coords.longitude }
          if (
            !userGeoLocation ||
            coords.lat !== userGeoLocation.lat ||
            coords.lng !== userGeoLocation.lng
          ) {
            setUserGeoLocation(coords)
            goTo(coords)
          }
          setLocateLoading(false)
        },
        (e) => {
          const errorMessage = e.message
          alert(errorMessage + '\n' + 'Please allow location access')
          setLocateLoading(false)
        },
      )
    }
  }, [goTo, userGeoLocation])

  const onLoad = useCallback((d) => (mapRef.current = d), [])

  return (
    <>
      <DefaultHead />

      <div className='flex h-screen flex-col text-teal-900'>
        <Header />

        <main className='grid flex-grow grid-rows-homepage md:grid-flow-col md:grid-cols-homepage md:grid-rows-1'>
          <div className='order-2 overflow-auto py-4 md:order-1'>
            <StoresList
              locateMe={locateMe}
              goTo={goTo}
              loading={locateLoading}
            />
          </div>
          <div className='order-1 flex md:order-2'>
            <Map
              onMapLoad={onLoad}
              zoom={zoom}
              userGeoLocation={userGeoLocation}
            />
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
