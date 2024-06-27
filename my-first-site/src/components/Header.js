import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'false';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex justify-center items-center h-screen snap-center scroll-smooth ">
      <motion.h1
        className='font-bold underline font-playwrite text-6xl dark:text-blue-900 text-yellow-400 hover:text-red-600 dark:hover:text-green-500 transition-all duration-500 hover:cursor-pointer'
        whileHover={{ scale: 1.5 }} // Slightly increase size on hover
        transition={{ type: 'tween', stiffness: 300, damping: 50 }} // Define the type of transition
        onClick={toggleDarkMode} // Toggle dark mode on click
      >
        Shreyash Shubh
      </motion.h1>
    </div>
  );
}

export default Header;
