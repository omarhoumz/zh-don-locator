import React from 'react'
import { stores } from 'src/config/data'
import type { LatLngLiteral } from './map'

type StoreListProps = {
  locateMe: () => void
  goTo: (position: LatLngLiteral) => void
}

export default function StoresList({ locateMe, goTo }: StoreListProps) {
  return (
    <section className='flex flex-col gap-2'>
      <header className='flex items-baseline justify-between'>
        <h2>{stores.length} Superettes</h2>

        <button
          onClick={locateMe}
          type='button'
          className='flex items-center gap-2 rounded border border-current bg-teal-50 px-3 py-1 text-teal-700 hover:bg-teal-100 hover:text-current'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='-ml-1 h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
            />
          </svg>
          <span>Me Localiser</span>
        </button>
      </header>

      <ul>
        {stores.map(({ title, description, position }, index) => {
          return (
            <li
              className='flex items-center justify-between gap-3 border-b py-3'
              key={index}
            >
              <div>
                <h4 className='font-semibold'>{title}</h4>
                <p className='font-light'>{description}</p>
              </div>
              <button
                className='flex items-center gap-2 rounded border border-slate-300 bg-slate-50 px-3 py-1 text-slate-600 ring-2 ring-transparent ring-offset-2 ring-offset-white hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-slate-400 active:ring-slate-500'
                onClick={() => goTo(position)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='-ml-1 h-4 w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M13 5l7 7-7 7M5 5l7 7-7 7'
                  />
                </svg>

                <span>Aller</span>
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
