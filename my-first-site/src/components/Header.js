import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const parallaxImages = [
  "url-to-your-image-1.jpg",
  "url-to-your-image-2.jpg",
  "url-to-your-image-3.jpg",
  "url-to-your-image-4.jpg",
  "url-to-your-image-5.jpg",
  "url-to-your-image-6.jpg"
];

function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") || "light";
  });

  useEffect(() => {
    if (darkMode !== "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(darkMode === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-center items-center h-screen scroll-smooth relative">
      
          <motion.h1
            className="font-bold underline font-playwrite text-6xl dark:text-blue-900 text-yellow-400 hover:text-red-600 dark:hover:text-green-500 transition-all duration-500 hover:cursor-pointer"
            whileHover={{ scale: 1.5 }} // Slightly increase size on hover
            transition={{ type: "tween", stiffness: 300, damping: 50 }} // Define the type of transition
            onClick={toggleDarkMode} // Toggle dark mode on click
          >
            Shreyash Shubh
          </motion.h1>
       
    </div>
  );
}

export default Header;
