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
            {/* Foundation Logo */}
            <div className="flex justify-center mb-6">
              <img
                src={logo}
                alt="Shri Hari Krupa Foundation"
                className="h-20 md:h-24 w-auto drop-shadow-lg"
              />
            </div>
            
            {/* Foundation Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg font-heading">
              Shri Hari Krupa Foundation
            </h1>
            
            {/* Tagline */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 drop-shadow-md font-light">
              Serving Humanity with Devotion and Compassion
            </p>
            
            {/* Sanskrit Mantra */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20 max-w-2xl mx-auto">
              <p className="text-white text-base md:text-lg font-medium mb-2">
                सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः
              </p>
              <p className="text-white/80 text-sm md:text-base">
                "May all beings be happy, may all beings be free from illness"
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6"
          >
            {/* Donate Button */}
            <Link
              to="/donate"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-3 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <FaHeart className="text-xl" />
              <span>Donate Now</span>
            </Link>
            
            {/* Learn More Button */}
            <Link
              to="/about"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-3 transform hover:scale-105"
            >
              <FaPrayingHands className="text-xl" />
              <span>Learn More</span>
            </Link>
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