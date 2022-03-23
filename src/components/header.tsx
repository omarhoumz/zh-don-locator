import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='flex justify-between p-4'>
      <h1>
        <Link href='/'>
          <a>WE CARE</a>
        </Link>
      </h1>

      <nav>
        <Link href='/about'>
          <a className='font-semibold'>A-propos</a>
        </Link>
      </nav>
    </header>
  )
}
