import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle `isFixed` state based on scroll position
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
    className={`bg-blue-600 p-4 text-white flex justify-between border-b items-center rounded-b-2xl transition-transform duration-300 ease-in-out w-full ${
      isFixed ? 'fixed top-0 left-0 right-0 z-10 translate-y-0' : 'absolute translate-y-0'
    }`}
  >
  
      <div className="text-xl">E-Shop</div>
      <div className="space-x-4">
        <button
          onClick={() => navigate('/login-page')}
          className="bg-gray-800 p-2 rounded"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/register')}
          className="bg-gray-800 p-2 rounded"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
