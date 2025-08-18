import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay, FaTimes, FaExpand, FaDownload } from "react-icons/fa";

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
import img10 from '../assets/car/img10.jpg';
import img11 from '../assets/car/img11.jpg';
import img12 from '../assets/car/img12.jpg';
import img13 from '../assets/car/img13.jpg';
import img14 from '../assets/car/img14.jpg';
import img15 from '../assets/car/img15.jpg';
import img16 from '../assets/car/img16.jpg';
import img17 from '../assets/car/img17.jpg';
import img18 from '../assets/car/img18.jpg';

const images = [
  {
    url: img1,
    alt: "Harikripa Foundation Event",
    title: "Community Gathering"
  },
  {
    url: img2,
    alt: "Harikripa Foundation Event",
    title: "Spiritual Ceremony"
  },
  {
    url: img3,
    alt: "Harikripa Foundation Event",
    title: "Cultural Program"
  },
  {
    url: img4,
    alt: "Harikripa Foundation Event",
    title: "Community Service"
  },
  {
    url: img5,
    alt: "Harikripa Foundation Event",
    title: "Festival Celebration"
  },
  {
    url: img6,
    alt: "Harikripa Foundation Event",
    title: "Educational Program"
  },
  {
    url: img7,
    alt: "Harikripa Foundation Event",
    title: "Youth Activities"
  },
  {
    url: img8,
    alt: "Harikripa Foundation Event",
    title: "Religious Gathering"
  },
  {
    url: img9,
    alt: "Harikripa Foundation Event",
    title: "Community Outreach"
  },
  {
    url: img10,
    alt: "Harikripa Foundation Event",
    title: "Social Initiative"
  },
  {
    url: img11,
    alt: "Harikripa Foundation Event",
    title: "Volunteer Work"
  },
  {
    url: img12,
    alt: "Harikripa Foundation Event",
    title: "Cultural Exchange"
  },
  {
    url: img13,
    alt: "Harikripa Foundation Event",
    title: "Community Building"
  },
  {
    url: img14,
    alt: "Harikripa Foundation Event",
    title: "Spiritual Learning"
  },
  {
    url: img15,
    alt: "Harikripa Foundation Event",
    title: "Youth Engagement"
  },
  {
    url: img16,
    alt: "Harikripa Foundation Event",
    title: "Community Support"
  },
  {
    url: img17,
    alt: "Harikripa Foundation Event",
    title: "Educational Outreach"
  },
  {
    url: img18,
    alt: "Harikripa Foundation Event",
    title: "Social Harmony"
  }
];

// Lightbox Modal Component
const ImageLightbox = ({ isOpen, currentImage, images, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !currentImage) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentImage.url;
    link.download = `${currentImage.title || 'image'}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePrevClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onPrev();
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onNext();
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  const handleDownloadClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleDownload();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center"
          onClick={handleBackdropClick}
          style={{ zIndex: 9999 }}
        >
          {/* Top Controls Bar */}
          <div className="absolute top-0 left-0 right-0 z-[10000] flex items-center justify-between p-4">
            {/* Image Counter */}
            <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium">
              {images.findIndex(img => img.url === currentImage.url) + 1} / {images.length}
            </div>

            {/* Top Right Controls */}
            <div className="flex items-center gap-2">
              {/* Download Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleDownloadClick}
                className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300"
                type="button"
              >
                <FaDownload className="w-5 h-5" />
              </motion.button>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCloseClick}
                className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300"
                type="button"
              >
                <FaTimes className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevClick}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[10000] p-4 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 shadow-lg"
            type="button"
          >
            <FaChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNextClick}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[10000] p-4 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 shadow-lg"
            type="button"
          >
            <FaChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Main Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center p-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.url}
              alt={currentImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              draggable={false}
            />
            
            {/* Image Info */}
            {currentImage.title && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white text-center"
              >
                <h3 className="font-semibold text-lg">{currentImage.title}</h3>
                <p className="text-sm opacity-80">{currentImage.alt}</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
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
    if (isPlaying && !isHovered && !lightboxOpen) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPlaying, currentIndex, isHovered, lightboxOpen]);

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

  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
  };

  const nextLightboxImage = () => {
    const nextIndex = (lightboxIndex + 1) % images.length;
    setLightboxIndex(nextIndex);
    setLightboxImage(images[nextIndex]);
  };

  const prevLightboxImage = () => {
    const prevIndex = lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIndex);
    setLightboxImage(images[prevIndex]);
  };

  return (
    <>
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
                      className={`relative flex-shrink-0 w-full md:w-1/2 lg:w-1/3 aspect-video rounded-xl overflow-hidden group cursor-pointer`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => openLightbox(image, index)}
                    >
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-xl shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl"
                      >
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                        >
                          <FaExpand className="w-6 h-6 text-white" />
                        </motion.div>
                      </motion.div>

                      {/* Image Title Overlay */}
                      {image.title && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 rounded-b-xl">
                          <h3 className="text-white font-semibold text-sm truncate">
                            {image.title}
                          </h3>
                        </div>
                      )}
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

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        currentImage={lightboxImage}
        images={images}
        onClose={closeLightbox}
        onNext={nextLightboxImage}
        onPrev={prevLightboxImage}
      />
    </>
  );
};

export default ImageCarousel;