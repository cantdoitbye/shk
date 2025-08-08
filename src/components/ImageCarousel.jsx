import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";

// Import images directly
import img1 from '../assets/car/img1.jpeg';
import img2 from '../assets/car/img2.jpeg';
import img3 from '../assets/car/img3.jpeg';
import img4 from '../assets/car/img4.jpeg';
import img5 from '../assets/car/img5.jpeg';
import img6 from '../assets/car/img6.jpeg';
import img7 from '../assets/car/img7.jpeg';
import img8 from '../assets/car/img8.jpeg';
import img9 from '../assets/car/img9.jpeg';

const images = [
  {
    url: img1,
    alt: "Harikripa Foundation Event"
  },
  {
    url: img2,
    alt: "Harikripa Foundation Event"
  },
  {
    url: img3,
    alt: "Harikripa Foundation Event"
  },
  {
    url: img4,
    alt: "Harikripa Foundation Event"
  },
  {
    url: img5,
    alt: "Harikripa Foundation Event"
  },
  {
    url: img6,
    alt: "Harikripa Foundation Event"
  },
  {
    url: img7,
    alt: "Harikripa Foundation Event"
  },
  {
    url: img8,
    alt: "Harikripa Foundation Event"
  },
  {
    url: img9,
    alt: "Harikripa Foundation Event"
  }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  const itemsPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  const totalSlides = Math.ceil(images.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPlaying && !isHovered) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPlaying, currentIndex, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleDragStart = () => {
    setIsDragging(true);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    if (Math.abs(info.offset.x) > 100) {
      if (info.offset.x > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    if (isPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative bg-white overflow-hidden py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-12"
        >
          Our Impact in Action
        </motion.h2>
        
        <div className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Carousel */}
          <motion.div
            ref={carouselRef}
            className="overflow-hidden rounded-2xl shadow-2xl bg-white"
            initial={false}
          >
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              className="flex"
              animate={{
                x: `-${currentIndex * 100}%`,
              }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 }
              }}
            >
              <div className="flex gap-6 w-full">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex-shrink-0 w-full md:w-1/2 lg:w-1/3 aspect-video rounded-xl overflow-hidden group`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-xl shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/80 shadow-lg backdrop-blur-sm text-primary hover:bg-white transition-all duration-300 pointer-events-auto"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/80 shadow-lg backdrop-blur-sm text-primary hover:bg-white transition-all duration-300 pointer-events-auto"
              aria-label="Next slide"
            >
              <FaChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Play/Pause Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlayPause}
            className="absolute bottom-4 right-4 p-3 rounded-full bg-white/80 shadow-lg backdrop-blur-sm text-primary hover:bg-white transition-all duration-300"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? (
              <FaPause className="w-4 h-4" />
            ) : (
              <FaPlay className="w-4 h-4" />
            )}
          </motion.button>

          {/* Progress Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-gray-400 hover:bg-primary/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel; 