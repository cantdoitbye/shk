import React, { useState, useEffect } from "react";
import { FaOm } from 'react-icons/fa';

interface NavigationProps {
  data?: {
    name: string;
  };
}

export const Navigation: React.FC<NavigationProps> = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaOm className="text-3xl text-primary mr-2" />
            <span className="text-xl font-heading font-semibold text-primary">
              {props.data ? props.data.name : "Loading"}
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#gallery" className="nav-link">
              Gallery
            </a>
            <a href="#testimonials" className="nav-link">
              Testimonials
            </a>
            <a href="#team" className="nav-link">
              Team
            </a>
            <a href="#contact" className="btn-primary">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="pt-4 pb-3 space-y-3">
            <a href="#features" className="block nav-link">
              Features
            </a>
            <a href="#about" className="block nav-link">
              About
            </a>
            <a href="#services" className="block nav-link">
              Services
            </a>
            <a href="#gallery" className="block nav-link">
              Gallery
            </a>
            <a href="#testimonials" className="block nav-link">
              Testimonials
            </a>
            <a href="#team" className="block nav-link">
              Team
            </a>
            <a href="#contact" className="block btn-primary text-center">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 