import type { NextPage } from 'next'

import Map from '@/screens/map'
import Header from '@/components/header'
import StoresList from '@/screens/stores-list'
import DefaultHead from '@/components/default-head'

const Home: NextPage = () => {
  return (
    <div>
      <DefaultHead />

      <main className='flex h-screen flex-col text-teal-900'>
        <Header />
        <div className='grid flex-grow grid-rows-homepage md:grid-flow-col md:grid-cols-homepage md:grid-rows-1'>
          <div className='order-2 overflow-auto p-4 md:order-1'>
            <StoresList />
          </div>
          <div className='order-1 flex md:order-2'>
            <Map />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
