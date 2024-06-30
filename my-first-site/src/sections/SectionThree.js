import React from "react";
import { motion } from "framer-motion";
import NavbarGrid from "../components/NavbarGrid";

function SectionThree() {
  const images = [
    { src: "/Grid Images/Landscape/_A190012.webp", width: 5281, height: 2916 },
    { src: "/Grid Images/Abstract/DSCF0287-2.webp", width: 3639, height: 5458 },
    { src: "/Grid Images/Abstract/DSCF0311.webp", width: 5519, height: 2484 },
    { src: "/Grid Images/Architecture/DSCF0567.webp", width: 3288, height: 5845 },
    { src: "/Grid Images/Architecture/DSCF1466.webp", width: 4083, height: 5104 },
    { src: "/Grid Images/Landscape/DSCF1580.webp", width: 6240, height: 3510 },
    { src: "/Grid Images/Concert/DSCF3487.webp", width: 4119, height: 2317 },
    { src: "/Grid Images/Concert/DSCF3984.webp", width: 2865, height: 5093 },
    { src: "/Grid Images/Concert/DSCF4288.webp", width: 6154, height: 3462 },
    { src: "/Grid Images/Landscape/DSCF4382.webp", width: 4152, height: 6230 },
    { src: "/Grid Images/Architecture/DSCF8588.webp", width: 4006, height: 5007 },
    { src: "/Grid Images/Concert/IMG_3405.webp", width: 5611, height: 3156 },
    { src: "/Grid Images/Concert/IMG_3981.webp", width: 3300, height: 5866 },
  ];

  return (
    <section className="w-full h-full z-30"> {/* Added z-30 to ensure it's above other content */}
    {/* <NavbarGrid></NavbarGrid> */}
      <div className="mx-auto px-4 py-8">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="mb-4 break-inside-avoid"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <motion.img
                className="w-full rounded-lg object-cover object-center"
                src={image.src}
                alt={`gallery-photo-${index}`}
                loading="lazy"
                style={{
                  aspectRatio: `${image.width} / ${image.height}`,
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
