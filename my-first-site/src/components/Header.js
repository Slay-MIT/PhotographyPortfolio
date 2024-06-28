import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <div className="flex justify-center items-center h-screen scroll-smooth relative bottom-9">
      <motion.h1
        className="font-bold font-playwrite text-6xl dark:text-emerald-300 text-indigo-700 hover:text-indigo-900 dark:hover:text-emerald-500 transition-all duration-500 hover:cursor-pointer text-shadow-lg text-pretty"
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
