import React, { useState } from 'react';

const Events = () => {
  const [filter, setFilter] = useState('all');

  // Example data - Replace with your actual content
  const events = [
    {
      id: 1,
      type: 'video',
      category: 'katha',
      title: 'Bhagwat Katha 2023',
      date: 'December 2023',
      url: 'https://www.youtube.com/embed/MPe6k1Te_yg?si=leCRSYeFQ_O5JXMQ', // Replace with your image path
      description: 'राधे कृष्णा संकीर्तन - बाल विदुषी देवी भवानी जी - Bhagwat Katha'
    },
    {
      id: 2,
      type: 'video',
      category: 'Katha',
      title: 'Ram Katha',
      date: 'November 2024',
      url: 'https://www.youtube.com/embed/roiQbz_pZAw?si=zh3QvSCZh4MVNTVy', // Replace with your video URL
      description: 'Devi Bhavani | Panjab'
    },

    {
    id: 3,
    type: 'video',
    category: 'Katha',
    title: 'Ram Katha',
    date: 'November 2024',
    url: 'https://www.youtube.com/embed/ZriIAbevvgs?si=JSFLFvZbnrkwgemp', // Replace with your video URL
    description: 'Devi Bhavani | Panjab'
  },

  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Sacred Events
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the divine through our various spiritual gatherings and celebrations
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'katha', 'yagna', 'bhajan', 'seva'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${filter === category 
                  ? 'bg-orange-500 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-orange-100'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events
            .filter(event => filter === 'all' || event.category === filter)
            .map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Media Container */}
                <div className="relative pb-[56.25%] overflow-hidden">
                  {event.type === 'image' ? (
                    <img
                      src={event.url}
                      alt={event.title}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <iframe
                      src={event.url}
                      title={event.title}
                      className="absolute top-0 left-0 w-full h-full"
                      allowFullScreen
                      loading="lazy"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {event.title}
                    </h3>
                    <span className="text-sm text-orange-500 font-medium">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Featured Event Section */}
        {/* Featured Event Section */}
<div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
  <div className="grid md:grid-cols-2 gap-0">
    </div>
    <div className="p-8 md:p-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Upcoming: Bhagwat Katha & Havan Mahotsav
      </h2>
      <p className="text-gray-600 mb-6">
        Join us for a spiritually uplifting celebration including 7 days of divine Bhagwat Katha followed by 8 days of sacred Havan rituals. Let your soul immerse in bhakti and blessings.
      </p>
      <div className="space-y-4">
        <div className="flex items-center text-gray-700">
          <span className="text-orange-500 mr-2">📅</span>
          Schedule: 29th May – 5th June <br />
          (Katha: 7 days | Havan: 8 days from 20th May)
        </div>
        <div className="flex items-center text-gray-700">
          <span className="text-orange-500 mr-2">📍</span>
          Venue: Satpal Maharaj Ashram
        </div>
    </div>
  </div>
</div>

        {/* Statistics Section
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '15', label: 'Events Conducted' },
            { number: '10k+', label: 'Devotees Reached' },
            { number: '50+', label: 'Spiritual Leaders' },
            { number: '25+', label: 'Cities Covered' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Events;