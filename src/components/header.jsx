import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaPrayingHands } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Add this import

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
    <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
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
      <div className="container mx-auto px-4 z-10 -translate-y-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative"
          >
            <div className="relative">
              <img 
                src={logo} 
                alt="Harikripa Foundation Logo" 
                className="h-28 md:h-36 mx-auto mb-8 filter brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              {props.data ? props.data.title : "Shree Hari Kripa Foundation"}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6"
          >
            {/* <a 
              href="#contact" 
              className="px-8 py-3 bg-white/90 text-primary rounded-full font-medium hover:bg-white transition-all duration-300 flex items-center hover:scale-105 shadow-xl backdrop-blur-sm"
            >
              <FaPrayingHands className="mr-2" />
              Become a Member
            </a> */}
            {/* <a 
              href="/donate" 
              className="px-8 py-3 bg-transparent border-2 border-white/90 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center hover:scale-105 shadow-lg backdrop-blur-sm"
            > */}
              {/* <FaHeart className="mr-2" /> */}
              {/* <Link 
                to="/donate" 
                className="your-button-classes"
              >
                Donate Now
              </Link> */}
            {/* </a> */}
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
