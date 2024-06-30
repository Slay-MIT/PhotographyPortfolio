import React from 'react';

export default function NavbarGrid() {
  return (
    <div className="w-full h-auto sticky z-50">
      <nav className="relative z-10 bg-gray-800 p-4 w-full">
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
  );
}
