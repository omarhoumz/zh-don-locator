import type { NextPage } from 'next'
import Head from 'next/head'

import Map from '@/screens/map'
import Header from '@/components/header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Locator</title>
        <meta name="description" content="Locator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex">
          <Map />
        </div>
      </main>
    </div>
  )
}

export default Home
