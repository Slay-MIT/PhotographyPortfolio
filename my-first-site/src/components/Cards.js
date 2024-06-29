// components/Cards.js
import React from 'react';
import { motion } from 'framer-motion';

function Cards({ imageUrl, caption, link }) {
  return (
    <motion.div
      className="m-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
      whileHover={{
        scale: 1.05,
        rotate: 0,
        translateY: -10,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 1 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          className="rounded-t-lg"
          src={imageUrl}
          alt="Instagram Post"
          href={link}
        />
      </a>
      <div className="p-5">
        {/* <a href={link} target="_blank" rel="noopener noreferrer"> */}
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-playwrite">
            {caption}
          </h5>
        {/* </a> */}
      </div>
    </motion.div>
  );
}

export default Cards;
