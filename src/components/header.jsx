import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaPrayingHands } from "react-icons/fa";
import { Link } from 'react-router-dom';

// Import images and logo
import img1 from '../assets/car/img1.jpeg';
import img2 from '../assets/car/img2.jpeg';
import img3 from '../assets/car/img3.jpeg';
import img4 from '../assets/car/img4.jpeg';
import img5 from '../assets/car/img5.jpeg';
import img6 from '../assets/car/img6.jpeg';
import img7 from '../assets/car/img7.jpeg';
import img8 from '../assets/car/img8.jpeg';
import img9 from '../assets/car/img9.jpeg';
import logo from '../assets/logo.png';

export const Header = (props) => {
  const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative min-h-screen pt-16 md:pt-20 flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={backgrounds[currentBg]}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-primary/30 to-white" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative"
          >
          
          
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6"
          >
         
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-white opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;