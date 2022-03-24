import type { NextPage } from 'next'

import Header from '@/components/header'
import DefaultHead from '@/components/default-head'

const About: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <DefaultHead title='A propos' />

      <main className='flex-grow'>
        <Header />

        <section className='prose mx-auto max-w-4xl py-6 px-4 lg:py-12 lg:px-0'>
          <h2>About</h2>

          <p>
            WE CARE est une initiave par{' '}
            <a
              href='https://www.facebook.com/Zero.Hunger.Casablanca'
              target='_blank'
              rel='noreferrer'
            >
              Zero Hunger Casablanca
            </a>
            .
          </p>
        </section>
      </main>

      <footer className='p-4 text-sm text-slate-700'>
        By{' '}
        <a className='hover:text-blue-700' href='https://www.omarhoumz.com/'>
          Omar Houmz
        </a>
      </footer>
    </div>
  )
}

export default About
