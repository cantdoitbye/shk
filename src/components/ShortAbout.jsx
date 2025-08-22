import React from "react";
import { FaOm, FaPrayingHands, FaHeart, FaHandsHelping } from "react-icons/fa";
import { GiLotusFlower } from "react-icons/gi";

export const ShortAbout = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            <FaOm className="text-3xl text-orange-600 mx-6" />
            <div className="h-1 w-16 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-4">
            Hari Krupa Foundation
          </h2>
          <div className="text-lg text-orange-600 mb-4 font-medium">
            ॐ श्री हरिकृपा फाउंडेशन ॐ
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Illuminating Lives Through Spiritual Wisdom and Compassionate Service
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Description Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-orange-100 mb-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-6">
                <GiLotusFlower className="text-4xl text-orange-600 animate-pulse" />
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                <strong className="text-orange-700">Hari Krupa Foundation</strong> is a spiritual organization dedicated to 
                preserving ancient Vedic wisdom while serving humanity through compassionate initiatives. We bridge 
                the gap between timeless spiritual teachings and modern life, creating transformative experiences 
                for individuals and communities.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl hover:bg-orange-50 transition-colors duration-300">
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FaPrayingHands className="text-2xl text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Spiritual Growth</h3>
                <p className="text-gray-600 text-sm">Vedic teachings, meditation, and spiritual guidance for inner transformation</p>
              </div>

              <div className="text-center p-6 rounded-xl hover:bg-orange-50 transition-colors duration-300">
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FaHandsHelping className="text-2xl text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Service</h3>
                <p className="text-gray-600 text-sm">Food distribution, education support, and healthcare for the underprivileged</p>
              </div>

              <div className="text-center p-6 rounded-xl hover:bg-orange-50 transition-colors duration-300">
                <div className="bg-gradient-to-br from-orange-600 to-orange-800 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <GiLotusFlower className="text-2xl text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Cultural Heritage</h3>
                <p className="text-gray-600 text-sm">Preserving and promoting ancient traditions and cultural values</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Spiritual Journey</h3>
              <p className="text-lg mb-6 opacity-90">
                Be part of a community dedicated to spiritual growth and compassionate service
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/about" 
                  className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                >
                  <FaPrayingHands className="mr-2" />
                  Learn More
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                >
                  <FaHeart className="mr-2" />
                  Get Involved
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortAbout;