import React from 'react';

function SectionTwo() {
  return (
    <section className="h-screen bg-gray-100 flex justify-center items-center snap-center scroll-smooth">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        {/* Sample Scrollable Cards */}
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 overflow-y-scroll h-96">
          <h2 className="text-xl font-bold">Card 1</h2>
          <p>Some content...</p>
        </div>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 overflow-y-scroll h-96">
          <h2 className="text-xl font-bold">Card 2</h2>
          <p>Some content...</p>
        </div>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 overflow-y-scroll h-96">
          <h2 className="text-xl font-bold">Card 3</h2>
          <p>Some content...</p>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
