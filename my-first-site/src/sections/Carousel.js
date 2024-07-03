import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import { motion } from 'framer-motion';

const src = "https://www.instagram.com/shreyashshubh/p/";
const cardDict = {
  "1": [src + "C0Dm5i6yS2D/", "Lightning", "InstaPics/lightning.webp"],
  "2": [src + "C2wL5VKS5d6/", "Gift of Time", "InstaPics/watch.webp"],
  "3": [src + "Cu1mr1OL6R0/", "Overcast Hour", "InstaPics/tower.webp"],
  "4": [src + "CzZGR7qMe2x/", "Wild Skies", "InstaPics/ishanMac.webp"],
  "5": [src + "CzVYXNTtPLe/", "Drive", "InstaPics/car.webp"],
  "6": [src + "CtOEHijrw_g/", "Curious Ginger", "InstaPics/cat.webp"],
};

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsData = Object.entries(cardDict).map(([key, [link, caption, imageUrl]]) => ({
    key,
    link,
    caption,
    imageUrl
  }));

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 === cardsData.length ? 0 : prevIndex + 1));
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      handleNext();
    } else if (info.offset.x > 50) {
      handlePrev();
    }
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
    }, 4000); // Change the interval time as needed (4000ms = 4 seconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <section className="h-screen flex grow justify-center items-center scroll-smooth relative bg-origin-padding mt-0 mx-2">
      <div className="flex justify-center items-center space-x-4 w-full relative overflow-visible">
        <motion.div
          className="flex justify-center items-center space-x-4 w-full relative"
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
        >
          {getVisibleCards().map((card, index) => (
            <motion.div
              key={card.key}
              className="flex-shrink-0 w-full sm:w-auto"
              layout
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, x: index === 1 ? 0 : index === 0 ? -100 : 100 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(event, info) => {
                if (info.offset.x > 50) {
                  handlePrev();
                } else if (info.offset.x < -50) {
                  handleNext();
                }
              }}
            >
              <Cards imageUrl={card.imageUrl} caption={card.caption} link={card.link} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-12 left-1/2 space-x-3 mt-5 pt-6">
        {cardsData.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'dark:bg-blue-700 bg-slate-900' : 'bg-gray-500 dark:bg-gray-200 hover:bg-blue-300'}`}
            aria-current={index === currentIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleSelect(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Carousel;
