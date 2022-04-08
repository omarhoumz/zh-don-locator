import React from 'react'
import { stores } from 'src/config/data'
import type { LatLngLiteral } from './map'

type StoreListProps = {
  locateMe: () => void
  goTo: (position: LatLngLiteral) => void
  loading: boolean
}

const pinIcon = (
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
)

const loadingIcon = (
  <svg
    className='-ml-1 h-5 w-5 animate-spin'
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
  >
    <circle
      className='opacity-25'
      cx='12'
      cy='12'
      r='10'
      stroke='currentColor'
      strokeWidth='4'
    ></circle>
    <path
      className='opacity-75'
      fill='currentColor'
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
    ></path>
  </svg>
)

const chevronIcon = (
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
)

export default function StoresList({
  locateMe,
  goTo,
  loading,
}: StoreListProps) {
  return (
    <section className='flex flex-col gap-2'>
      <header className='flex items-center justify-between px-3'>
        <h2>{stores.length} Superettes</h2>

        <button
          onClick={locateMe}
          type='button'
          className='flex items-center gap-2 rounded border border-current bg-teal-50 px-3 py-1 text-teal-700 hover:bg-teal-100 hover:text-current'
        >
          {loading ? loadingIcon : pinIcon}
          <span>Me Localiser</span>
        </button>
      </header>

      <ul>
        {stores.map(({ title, description, position }, index) => {
          return (
            <li
              className='flex items-center justify-between gap-3 border-b p-3'
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
                {chevronIcon}
                <span>Aller</span>
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
