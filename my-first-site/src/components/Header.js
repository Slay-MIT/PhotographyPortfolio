import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    
      <div className="flex justify-center items-center h-screen snap-center scroll-smooth">
      <motion.h1
        className='font-bold underline font-playwrite text-6xl text-blue-900 hover:text-green-500 transition-all duration-500'
        whileHover={{ scale: 1.1 }} // Slightly increase size on hover
        transition={{ type: 'tween', stiffness: 300 }} // Define the type of transition
      >
        Shreyash Shubh
      </motion.h1>
    </div>
    
  );
}

export default Header;
