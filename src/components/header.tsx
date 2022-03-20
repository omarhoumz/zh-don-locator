import React from 'react'

export default function Header() {
  return (
    <header className="flex justify-between p-2">
      <h1>Locator</h1>

      <nav>
        <a href="/about">About</a>
      </nav>
    </header>
  )
}
