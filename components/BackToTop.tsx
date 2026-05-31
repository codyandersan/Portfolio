'use client';

import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    // Initialize state on mount
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a 
      href="#top" 
      className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 p-2 sm:p-3 scale-90 sm:scale-100 z-40 bg-gray-900/80 backdrop-blur border border-gray-800 text-sky-400 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
    </a>
  );
}
