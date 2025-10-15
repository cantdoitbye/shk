import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaYoutube,
  FaInstagram
} from "react-icons/fa";

export const Contact = (props) => {
  return (
    <footer className="bg-gradient-to-br from-white via-orange-50 to-pink-100 relative overflow-hidden">
      {/* Decorative Glow Orbs */}
      <div className="absolute -top-32 -left-32 w-60 h-60 sm:w-96 sm:h-96 bg-pink-200 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-60 h-60 sm:w-96 sm:h-96 bg-orange-300 opacity-20 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-2 sm:px-4 py-10 sm:py-20 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-10 sm:mb-16 px-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-4"
          >
            ✨ Connect with Divine Grace
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-lg text-gray-600 max-w-xl mx-auto"
          >
            We're here for you. Whether you seek peace, guidance, or blessings — reach out with an open heart.
          </motion.p>
        </div>

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-6 sm:space-y-10 px-1 sm:px-2"
        >
          {/* Contact Cards */}
          <div className="grid gap-4 sm:gap-6">
            {/* Address */}
            <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-orange-100 p-2 sm:p-3 rounded-full">
                  <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-900">Official Address</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{props.data ? props.data.address : "Loading..."}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-orange-100 p-2 sm:p-3 rounded-full">
                  <FaPhone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-900">Call Us</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {props.data ? props.data.phone : "Loading..."}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    +91 9327623978
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-orange-100 p-2 sm:p-3 rounded-full">
                  <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-900">Email Us</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{props.data ? props.data.email : "Loading..."}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg text-center">
            <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">🌸 Connect With Us</h3>
            <div className="flex justify-center gap-4 sm:gap-5">
              <a
                href="https://www.facebook.com/satvikbhavani.upadhayay"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-100 hover:bg-orange-200 p-2 sm:p-4 rounded-full shadow-md transition-transform hover:scale-110"
              >
                <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </a>
              <a
                href="https://www.instagram.com/astrobhavani_237"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-100 hover:bg-orange-200 p-2 sm:p-4 rounded-full shadow-md transition-transform hover:scale-110"
              >
                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </a>
              <a
                href="https://www.youtube.com/@astrobhavaniupadhyay628"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-100 hover:bg-orange-200 p-2 sm:p-4 rounded-full shadow-md transition-transform hover:scale-110"
              >
                <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 sm:mt-20 border-t border-orange-200 bg-white/50 backdrop-blur-sm py-4 sm:py-6">
        <p className="text-center text-gray-700 text-xs sm:text-sm">
          © {new Date().getFullYear()} Shri Hari Krupa Foundation. With Love & Light.
        </p>
      </div>
    </footer>
  );
};

export default Contact;