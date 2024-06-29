import React from "react";
import imageData from "../components/imageData";

function SectionThree() {
  return (
    <section className="overflow-y-auto flex flex-col scroll-smooth">
      <nav className="flex items-center p-4 bg-gray-800">
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
      <div className="flex justify-center items-center flex-grow overflow-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 overflow-auto">
          {Object.keys(imageData).map((category) => (
            <div key={category} className="grid gap-4">
              {imageData[category].map((src, index) => (
                <div key={index}>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                    src={src}
                    alt={`${category} gallery-photo ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
