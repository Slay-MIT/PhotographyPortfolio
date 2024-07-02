import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 ">
      <div className="  flex justify-between items-center px-4">
        <a
          href="https://www.instagram.com/shreyashshubh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 7h.01M4 6h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm3 0a4 4 0 100 8 4 4 0 000-8zm13 6a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span>Instagram</span>
        </a>
        <button
          onClick={() => alert('Contact me at: your-email@example.com')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Contact Me
        </button>
      </div>
    </footer>
  );
}

export default Footer;
