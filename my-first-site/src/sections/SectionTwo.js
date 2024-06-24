// sections/SectionTwo.js
import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import { motion } from 'framer-motion';

const src = "https://www.instagram.com/shreyashshubh/p/";
const cardDict = {
  "1": [src + "C0Dm5i6yS2D/", "Lightning"],
  "2": [src + "C2wL5VKS5d6/", "Watch"],
  "3": [src + "CxQAuPzLYou/", "Tower"],
  "4": [src + "CzZGR7qMe2x/", "Something"],
  "5": [src + "CrbRkxYr5zJ/", "Something-2"],
  "6": [src + "Cu1mr1OL6R0/", "Something-3"],
};

function SectionTwo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsData = Object.entries(cardDict).map(([key, [link, caption]]) => ({
    key,
    link,
    caption,
    imageUrl: "https://via.placeholder.com/400", // Replace with actual image URL if needed
  }));

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 === cardsData.length ? 0 : prevIndex + 1));
  };

  const getVisibleCards = () => {
    return [
      cardsData[currentIndex],
      cardsData[(currentIndex + 1) % cardsData.length],
      cardsData[(currentIndex + 2) % cardsData.length],
    ];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Change the interval time as needed (2000ms = 2 seconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <section className="h-screen flex justify-center items-center snap-center overflow-hidden scroll-smooth relative">
      <div className="flex justify-center items-center space-x-4 w-full relative">
        {getVisibleCards().map((card) => (
          <motion.div
            key={card.key}
            className="flex-shrink-0"
            layout // Enable layout animations
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{opacity: 0, scale:0.5, x:-100}}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <Cards imageUrl={card.imageUrl} caption={card.caption} link={card.link} />
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
