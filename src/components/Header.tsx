import React from "react";
import { FaOm, FaHeart, FaPrayingHands } from "react-icons/fa";

interface HeaderProps {
  data?: {
    title: string;
    paragraph: string;
  };
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-white/5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E65100' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }} />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <div className="mb-8 animate-fadeIn">
            <FaOm className="text-6xl text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-4">
              {props.data ? props.data.title : "Loading"}
            </h1>
            <h2 className="text-xl md:text-2xl text-textSecondary font-light max-w-3xl mx-auto">
              {props.data ? props.data.paragraph : "Loading"}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 animate-fadeInDelay">
            <a href="#about" className="btn-primary flex items-center hover:scale-105 transition-transform">
              <FaPrayingHands className="mr-2" />
              Learn More
            </a>
            <a href="#contact" className="btn-primary bg-white text-primary hover:bg-primary hover:text-white flex items-center hover:scale-105 transition-transform">
              <FaHeart className="mr-2" />
              Join Us
            </a>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#features" className="text-primary opacity-75 hover:opacity-100 transition-opacity">
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
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 