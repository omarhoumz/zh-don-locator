import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='flex justify-between p-4 shadow-md'>
      <h1>
        <Link href='/'>
          <a className='flex items-center gap-1.5'>
            <Image
              width={28}
              height={28}
              src='/we-care.png'
              alt='we care logo'
            />
            <span>WE CARE</span>
          </a>
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
