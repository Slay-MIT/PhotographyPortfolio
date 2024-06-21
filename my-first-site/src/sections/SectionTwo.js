import React, { useState } from 'react';
import Cards from '../components/Cards';
import { motion } from 'framer-motion';

function SectionTwo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    <Cards key="1" />,
    <Cards key="2" />,
    <Cards key="3" />,
    <Cards key="4" />,
    <Cards key="5" />,
    <Cards key="6" />,
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 3 : prevIndex - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3 >= cards.length ? 0 : prevIndex + 3));
  };

  return (
    <section className="h-screen flex justify-center items-center snap-center overflow-hidden scroll-smooth relative">
      <div className="flex justify-center items-center space-x-4 w-full">
        {cards.slice(currentIndex, currentIndex + 3).map((card) => (
          <motion.div
            key={card.key}
            className="flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {card}
          </motion.div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-10 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transform -translate-y-1/2"
        style={{ top: '50%' }}
      >
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
          <path d="M10.0002 11.9999L6 7.99971L10.0025 3.99719" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-10 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transform -translate-y-1/2"
        style={{ top: '50%' }}
      >
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
          <path d="M5.99984 4.00012L10 8.00029L5.99748 12.0028" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  );
}

export default SectionTwo;
