import React, { useState, useEffect, useRef } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Contact } from "./components/contact";
import ImageCarousel from "./components/ImageCarousel";
import { Route, Routes } from  "react-router-dom"
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Donate from './pages/Donate';
import Events from './pages/Events';
import YajmanForm from './components/YajmanForm';
import ShortAbout from './components/ShortAbout';
import Membership from './pages/Membership';
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes, FaExpand, FaDownload } from "react-icons/fa";
import ImpactGallery from './components/ImpactGallery';

const AnnouncementBar = () => {
  return (
    <section className="relative z-10 py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch justify-between bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-2xl shadow-xl p-8 border border-primary/10 backdrop-blur-sm gap-8">
          {/* Event Info */}
          <div className="flex items-start flex-1">
            <div className="bg-white rounded-full p-4 mr-4 shadow-md flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                <path d="M12 7c2.5 0 4.5 2 4.5 4.5S14.5 16 12 16s-4.5-2-4.5-4.5S9.5 7 12 7z" />
                <path d="M12 9v2M12 13v2M10 11h4" />
                <path d="M15.5 8.5c.5.5.5 1.5 0 2s-1.5.5-2 0-.5-1.5 0-2 1.5-.5 2 0z" />
                <path d="M8.5 8.5c-.5.5-.5 1.5 0 2s1.5.5 2 0 .5-1.5 0-2-1.5-.5-2 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-primary font-bold text-base uppercase tracking-wider mb-1">Next Event</h3>
              <p className="text-gray-800 font-semibold text-lg">
                24 Nov – 1 Dec, 2025 • 7:00 AM Daily
              </p>
              <p className="text-sm text-gray-600">
                Bhagwat Katha & Havan • Satpal Maharaj Ashram
              </p>
            </div>
          </div>

          {/* Transportation Section */}
          <div className="flex-1 flex items-start">
            <div className="w-full bg-white/50 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-primary font-bold text-base uppercase tracking-wider mb-3">Transportation</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-1.5 rounded-full mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Public Transport</p>
                    <p className="text-xs text-gray-600">Bus Routes: 101, 102, 103</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-1.5 rounded-full mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Parking Available</p>
                    <p className="text-xs text-gray-600">Free parking on premises</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start lg:items-center lg:justify-end flex-shrink-0">
            <a 
              href="#rsvp" 
              className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all duration-300 flex items-center hover:scale-105 shadow-lg text-base group whitespace-nowrap"
            >
              <span className="group-hover:translate-x-1 transition-transform">Get Invitation</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <button 
              className="px-8 py-3 bg-white border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-all duration-300 flex items-center hover:scale-105 shadow-lg text-base group whitespace-nowrap"
              onClick={() => {
                const event = {
                  text: 'Harikripa Foundation Event',
                  dates: '20241225T123000Z/20241225T153000Z',
                  details: 'Join us for a special event at Harikripa Foundation',
                  location: 'Mumbai, India'
                };
                window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&dates=${event.dates}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`);
              }}
            >
              <span className="group-hover:translate-x-1 transition-transform">Add to Calendar</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Visit
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Map Container */}
          <div className="md:col-span-3 rounded-2xl overflow-hidden shadow-xl bg-white p-2 h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.706554940006!2d72.6046243!3d22.997815799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85dd5d2fcbad%3A0x1ab6ded126b8b853!2sShantanu%20Residency!5e0!3m2!1sen!2sin!4v1751876393247!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>

          {/* Info Cards */}
          <div className="md:col-span-2 space-y-6">
            {/* Direction Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting Here</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Official Address</h4>
                    <p className="text-gray-600">301 Shantanu appt,  Krishnabaug road , Maninagar, Ahemdabad . ~380008.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Visiting Time</h4>
                    <p className="text-gray-600">29th May to 5th June<br />Special Events: Check Calendar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

// Lightbox Modal Component for Previous Works
const PreviousWorksLightbox = ({ isOpen, currentImage, images, onClose, onNext, onPrev }) => {
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
    link.href = currentImage.src;
    link.download = `${currentImage.caption || 'previous-work'}.jpg`;
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
              {images.findIndex(img => img.src === currentImage.src) + 1} / {images.length}
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
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              draggable={false}
            />
            
            {/* Image Info */}
            {currentImage.caption && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white text-center max-w-md"
              >
                <h3 className="font-semibold text-lg">{currentImage.caption}</h3>
                <p className="text-sm opacity-80">{currentImage.alt}</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Dynamically import all images from assets/works and sort by filename for consistency
function importAll(r) {
  return r 
    .keys()
    .sort()
    .map((key) => ({
      src: r(key),
      alt: key.replace('./', '').replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
      filename: key.replace('./', ''),
    }));
}

// Enhanced Previous Works Carousel Component
const PreviousWorksCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const timeoutRef = useRef(null);

  const previousWorksImages = importAll(require.context('./assets/works', false, /\.(jpe?g|png|webp|gif)$/));

  // Optionally, add captions for specific images (filename: caption)
  const imageCaptions = {
    "event1.jpg": "Bhagwat Katha at Ahmedabad",
    "event2.jpg": "Food Distribution Drive",
    "event3.jpg": "Cultural Program",
    "event4.jpg": "Community Gathering",
    // Add more as needed, or leave empty for fallback
  };

  // Add captions to images
  const imagesWithCaptions = previousWorksImages.map(img => ({
    ...img,
    caption: imageCaptions[img.filename] || img.alt
  }));

  const nextSlide = () => setCurrent((prev) => (prev + 1) % imagesWithCaptions.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + imagesWithCaptions.length) % imagesWithCaptions.length);

  useEffect(() => {
    if (!lightboxOpen) {
      timeoutRef.current = setTimeout(nextSlide, 3500);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [current, lightboxOpen]);

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
    const nextIndex = (lightboxIndex + 1) % imagesWithCaptions.length;
    setLightboxIndex(nextIndex);
    setLightboxImage(imagesWithCaptions[nextIndex]);
  };

  const prevLightboxImage = () => {
    const prevIndex = lightboxIndex === 0 ? imagesWithCaptions.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIndex);
    setLightboxImage(imagesWithCaptions[prevIndex]);
  };

  if (imagesWithCaptions.length === 0) return null;

  return (
    <>
      <section className="w-full max-w-3xl mx-auto mt-16 mb-10 px-2 sm:px-0">
        <div className="text-center mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-2">Previous Works</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Glimpses of our recent events, community service, and cultural programs. We are grateful for every moment of seva and togetherness.
          </p>
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white">
          {/* Images */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {imagesWithCaptions.map((img, idx) => (
              <div
                key={idx}
                className="min-w-full flex-shrink-0 flex flex-col items-center justify-center bg-white relative group cursor-pointer"
                onClick={() => openLightbox(img, idx)}
              >
                <div className="w-full flex justify-center items-center bg-gray-50 relative" style={{ minHeight: 220 }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full max-h-72 sm:max-h-96 object-cover object-center rounded-xl transition-all duration-300 group-hover:scale-105"
                    style={{
                      aspectRatio: "4/3",
                      maxWidth: "100%",
                      height: "auto",
                    }}
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
                </div>
                <div className="w-full px-2 py-3 text-center">
                  <span className="block text-base font-semibold text-orange-700">
                    {img.caption}
                  </span>
                  <span className="block text-xs text-gray-500 mt-1">
                    Click to view larger
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Controls */}
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-orange-100 text-orange-600 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
            onClick={prevSlide}
            aria-label="Previous"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-orange-100 text-orange-600 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
            onClick={nextSlide}
            aria-label="Next"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>
          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {imagesWithCaptions.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${current === idx ? 'bg-orange-600' : 'bg-orange-200'}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <PreviousWorksLightbox
        isOpen={lightboxOpen}
        currentImage={lightboxImage}
        images={imagesWithCaptions}
        onClose={closeLightbox}
        onNext={nextLightboxImage}
        onPrev={prevLightboxImage}
      />
    </>
  );
};

const HomePage = () => {
  return (
    <>
      <Header />
      <ShortAbout />
      {/* <ImageCarousel /> */}
      {/* Previous Works Carousel below the main carousel */}
      {/* <PreviousWorksCarousel /> */}
      <ImpactGallery />
      <AnnouncementBar />
      <MapSection />
      {/* Add any other components you want on the home page */}
    </>
  );
};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/events" element={<Events />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/yajman-form" element={<YajmanForm />} />
      </Routes>
    </div>
  );
};

export default App;