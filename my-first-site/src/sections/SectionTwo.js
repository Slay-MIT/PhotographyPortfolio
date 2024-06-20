import React from 'react';
import Cards from '../components/Cards';

function SectionTwo() {
  return (
    <section className="h-screen bg-gray-100 flex justify-center items-center snap-center scroll-smooth">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        {/* Use the Cards component */}
        <Cards />
        <Cards />
        <Cards />
      </div>
    </section>
  );
}

export default SectionTwo;
