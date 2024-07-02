import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "../components/ImageModal";
import Footer from "../components/Footer";

function SectionThree() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/Grid Images/Landscape/_A190012.webp", width: 5281, height: 2916, small: "Grid Images/Thumbnail/tinified/_A190012.webp" },
    { src: "/Grid Images/Abstract/DSCF0287-2.webp", width: 3639, height: 5458, small: "Grid Images/Thumbnail/tinified/DSCF0287-2.webp" },
    { src: "/Grid Images/Abstract/DSCF0311.webp", width: 5519, height: 2484, small: "Grid Images/Thumbnail/tinified/DSCF0311.webp" },
    { src: "/Grid Images/Architecture/DSCF0567.webp", width: 3288, height: 5845, small: "Grid Images/Thumbnail/tinified/DSCF0567.webp" },
    { src: "/Grid Images/Architecture/DSCF1466.webp", width: 4083, height: 5104, small: "Grid Images/Thumbnail/tinified/DSCF1466.webp" },
    { src: "/Grid Images/Landscape/DSCF1580.webp", width: 6240, height: 3510, small: "Grid Images/Thumbnail/tinified/DSCF1580.webp" },
    { src: "/Grid Images/Concert/DSCF3487.webp", width: 4119, height: 2317, small: "Grid Images/Thumbnail/tinified/DSCF3487.webp" },
    { src: "/Grid Images/Concert/DSCF3984.webp", width: 2865, height: 5093, small: "Grid Images/Thumbnail/tinified/DSCF3984.webp" },
    { src: "/Grid Images/Concert/DSCF4288.webp", width: 6154, height: 3462, small: "Grid Images/Thumbnail/tinified/DSCF4288.webp" },
    { src: "/Grid Images/Landscape/DSCF4382.webp", width: 4152, height: 6230, small: "Grid Images/Thumbnail/tinified/DSCF4382.webp" },
    { src: "/Grid Images/Architecture/DSCF8588.webp", width: 4006, height: 5007, small: "Grid Images/Thumbnail/tinified/DSCF8588.webp" },
    { src: "/Grid Images/Concert/IMG_3405.webp", width: 5611, height: 3156, small: "Grid Images/Thumbnail/tinified/IMG_3405.webp" },
    { src: "/Grid Images/Concert/IMG_3981.webp", width: 3300, height: 5866, small: "Grid Images/Thumbnail/tinified/IMG_3981.webp" },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="w-full h-full z-30">
      <div className="mx-auto px-4 py-8">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="mb-4 break-inside-avoid cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              onClick={() => openModal(image)}
            >
              <motion.img
                className="w-full rounded-lg object-cover object-center"
                src={image.small}
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
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </section>
  );
}

export default SectionThree;