import React from 'react'


export default function NavbarGrid() {
  return (
    <div>
        <nav className="top-0 relative z-10 bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <button className="text-white">Abstract</button>
          </li>
          <li>
            <button className="text-white">Concert</button>
          </li>
          <li>
            <button className="text-white">Landscape</button>
          </li>
          <li>
            <button className="text-white">Architecture</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}