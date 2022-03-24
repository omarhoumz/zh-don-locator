import React from 'react'
import { stores } from 'src/config/data'

export default function StoresList({ locateMe }: { locateMe: () => void }) {
  return (
    <section className='flex flex-col gap-2'>
      <header className='flex items-baseline justify-between'>
        <h2>33 Superettes</h2>

        <button onClick={locateMe} type='button'>
          Me Localiser
        </button>
      </header>

      <ul>
        {stores.map(({ title, description }, index) => {
          return (
            <li
              className='flex items-center justify-between gap-3 border-b py-3'
              key={index}
            >
              <div>
                <h4 className='font-semibold'>{title}</h4>
                <p className='font-light'>{description}</p>
              </div>
              <button className='rounded border border-slate-300 bg-slate-50 px-3 py-1 text-slate-600 ring-2 ring-transparent ring-offset-2 ring-offset-white hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-slate-400 active:ring-slate-500'>
                Aller
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
