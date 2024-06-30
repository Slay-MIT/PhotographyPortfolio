import React from "react";
import imageData from "../components/imageData";

function SectionThree() {
  return (
    <section className="overflow-y flex-col scroll-smooth">
      <nav className="flex items-center p-4 bg-gray-800 padding">
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
      <div className="flex justify-center items-center flex-grow">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="/Grid Images/Abstract/DSCF0287-2.webp"
                alt="gallery-photo"
                loading="lazy" // Add lazy loading attribute
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="/Grid Images/Abstract/DSCF0311.webp"
                alt="gallery-photo"
                loading="lazy" // Add lazy loading attribute
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="/Grid Images/Abstract/DSCF7320-9.webp"
                alt="gallery-photo"
                loading="lazy" // Add lazy loading attribute
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="/Grid Images/Architecture/DSCF0567.webp"
                alt="gallery-photo"
                loading="lazy" // Add lazy loading attribute
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="/Grid Images/Architecture/DSCF0763-9.webp"
                alt="gallery-photo"
                loading="lazy" // Add lazy loading attribute
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="/Grid Images/Architecture/DSCF1466.webp"
                alt="gallery-photo"
                loading="lazy" // Add lazy loading attribute
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="/Grid Images/Architecture/DSCF8588.webp"
                alt="gallery-photo"
                loading="lazy" // Add lazy loading attribute
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="/Grid Images/Concert/DSCF3487.webp"
                alt="gallery-photo"
                loading="lazy" // Add lazy loading attribute
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="/Grid Images/Concert/DSCF3984.webp"
                alt="gallery-photo"
                loading="lazy" // Add lazy loading attribute
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="/Grid Images/Concert/DSCF4288.webp"
                alt="gallery-photo"
                loading="lazy" // Add lazy loading attribute
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="/Grid Images/Concert/IMG_3405.webp"
                alt="gallery-photo"
                loading="lazy" // Add lazy loading attribute
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="/Grid Images/Concert/IMG_3981.webp"
                alt="gallery-photo"
                loading="lazy" // Add lazy loading attribute
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="/Grid Images/Landscape/_A190012.webp"
                alt="gallery-photo"
                loading="lazy" // Add lazy loading attribute
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="/Grid Images/Landscape/DSCF1580.webp"
                alt="gallery-photo"
                loading="lazy" // Add lazy loading attribute
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="/Grid Images/Landscape/DSCF4382.webp"
                alt="gallery-photo"
                loading="lazy" // Add lazy loading attribute
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
