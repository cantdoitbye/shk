import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHeart } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';



export const Navigation = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Events", href: "/events" },
    { title: "Membership", href: "/membership" },
    // { title: "Resources & Literature", href: "/resources" },
    { 
      title: "Yajman Form", 
      // href: "https://forms.gle/Xg5B7WJEjDR3hQHd6",
      href: "/yajman-form", // Internal route instead of external Google Form
      isExternal: false  // Add this flag to identify external links
    },
    { title: "Contact Us", href: "/contact" }
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const menuItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
          <div className="flex items-center">
            <img 
              src={logo}
              alt="Harikripa Foundation" 
              className="h-16 w-auto"
            />
          </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-300 relative group text-sm uppercase tracking-wide"
              >
                {item.title}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
            <a
              href="/donate"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300 flex items-center space-x-2 transform hover:scale-105"
            >
              <FaHeart className="text-sm" />
              <span>Donate</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="lg:hidden"
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    variants={menuItemVariants}
                    transition={{ delay: index * 0.1 }}
                    className="block text-gray-700 hover:text-primary transition-colors duration-300 text-sm uppercase tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </motion.a>
                ))}
                <motion.a
                  href="#donate"
                  variants={menuItemVariants}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <FaHeart className="text-sm" />
                    <span>Donate</span>
                  </span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
