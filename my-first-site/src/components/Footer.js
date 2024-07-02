import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-4 w-full">
      <div className="flex justify-between items-center px-4">
        <a
          href="https://www.instagram.com/shreyashshubh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
            alt="Instagram Logo"
            className="h-6 w-6"
          />
          <span className='dark:text-slate-200 text-slate-700'>@shreyashshubh</span>
        </a>
        <a
          href="mailto:shreyash148@gmail.com"
          className="text-blue-500 hover:underline dark:text-blue-300"
        >
          Contact Me
        </a>
      </div>
    </footer>
  );
}

export default Footer;
