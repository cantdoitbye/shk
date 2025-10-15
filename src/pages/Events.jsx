import React, { useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  // Events data
  const upcomingEvents = [
    {
      id: 1,
      title: 'Shrimad Bhagwat Katha - Mathura',
      date: 'From: 24-10-2025 3:00 pm',
      endDate: 'To: 30-10-2025 6:00 pm',
      venue: 'Brijwasi Lands Inn, Masani Link Road, Bypass, Saraswati Kund, Mathura, Uttar Pradesh 281003',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
      type: 'katha'
    },
    {
      id: 2,
      title: 'Shrimad Bhagwat Katha - Shela, Gujarat',
      date: 'From: 17-12-2025 3:00 pm',
      endDate: 'To: 23-12-2025 6:00 pm',
      venue: 'Agrasen Foundation, Agrasen Road, Club 07, Shela, Gujarat - 380058',
      image: 'https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=800',
      type: 'katha'
    },
    {
      id: 3,
      title: 'Shrimad Bhagwat Katha - Kandivali, Mumbai',
      date: 'From: 04-01-2026 3:00 pm',
      endDate: 'To: 10-01-2026 6:00 pm',
      venue: 'Kandivali, Mumbai',
      image: 'https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=800',
      type: 'katha'
    }
  ];

  const kathaYagnaContent = {
    videos: [
      {
        id: 1,
        title: 'राधे कृष्णा संकीर्तन - बाल विदुषी देवी भवानी जी',
        description: 'Bhagwat Katha',
        url: 'https://www.youtube.com/embed/MPe6k1Te_yg?si=leCRSYeFQ_O5JXMQ',
        date: 'December 2023'
      },
      {
        id: 2,
        title: 'Ram Katha',
        description: 'Devi Bhavani | Panjab',
        url: 'https://www.youtube.com/embed/roiQbz_pZAw?si=zh3QvSCZh4MVNTVy',
        date: 'November 2024'
      },
      {
        id: 3,
        title: 'Ram Katha',
        description: 'Devi Bhavani | Panjab',
        url: 'https://www.youtube.com/embed/ZriIAbevvgs?si=JSFLFvZbnrkwgemp',
        date: 'November 2024'
      }
    ],
    content: [
      {
        title: 'कथा और यज्ञ',
        description: 'भगवान की कथा मनुष्य के जीवन में एक सुंदर परिवर्तन लाने के लिए, एक सच्चा मार्ग दिखाने के लिए और पूरे विश्व का कल्याण करने के लिए किए जाते हैं। भगवान ने विविध लीलाएं की हैं मनुष्य अवतार लेकर, ताकि वे मनुष्य को मार्गदर्शन दे सकें।'
      },
      {
        title: 'कथा का महत्व',
        description: 'कथा में चाहे वह प्रकृति हो, परमात्मा हो या मनुष्य स्वयं, सभी का महत्व बताने के लिए, उनके जीवन के उद्देश्य को प्रकट करने के लिए कथा की जाती है। कथा के आरंभ मात्र से कहा गया है कि मनुष्य के जीवन में परम कल्याण होता है, साथ ही उसके समस्त पितरों का उद्धार होता है, और समस्त विश्व का कल्याण होता है।'
      }
    ]
  };

  const sevaContent = [
    {
      id: 1,
      title: 'Elder Care Service Program',
      description: 'श्री हरिकृपा फाउंडेशन के द्वारा वृद्धाश्रम के माता पिता को भगवन्नाम के साथ जोड़ने का एक कदम। फाउंडेशन ने वृद्ध माता पिताओं को मनुष्य जीवन का उद्देश्य अर्थात् रुद्राक्ष के माला, तुलसी जपमाला, तुलसी कंधी एवम् गौमुखी (मालाझोली) प्रदान किया।',
      images: 4
    },
    {
      id: 2,
      title: 'Thalassemia Blood Donation Program',
      description: 'श्री हरिकृपा फाउंडेशन के द्वारा थैलेसीमिया पीड़ित बच्चों के लिए रक्तदान कार्यक्रम आयोजन में फाउंडेशन के सदस्य लगाइत अन्य अधिक से अधिक सज्जनों ने भाग लिया और अपना बहुमूल्य रक्तदान किया।',
      images: 8
    },
    {
      id: 3,
      title: 'Kanya Pujan Festival',
      description: 'श्री हरिकृपा फाउंडेशन द्वारा आयोजित कन्या पूजन महोत्सव में आमंत्रित मां भगवती की अवतार ने और उनका भोजन पश्चात वे और उनका जुगल जी, रिश्ते, बर्तल हलवाई और शृंगार का सामग्री प्रदान करती महोत्सव नया। हम कामानाएं कि श्री हरिकृपा फाउंडेशन निरंतर के योगी श्री महाराज शरद की पूर्व की साहित्य पूरे और उदाहरणी पुण्यांनिक सकारात्मक का दैया देर!',
      images: 5
    }
  ];

  const podcastContent = [
    {
      id: 1,
      title: 'Bhagwat Katha 2023',
      description: 'राधे कृष्णा संकीर्तन - बाल विदुषी देवी भवानी जी - Bhagwat Katha',
      speaker: 'Devi Bhavani',
      date: 'December 2023',
      thumbnail: 'https://img.youtube.com/vi/MPe6k1Te_yg/maxresdefault.jpg',
      url: 'https://www.youtube.com/embed/MPe6k1Te_yg?si=leCRSYeFQ_O5JXMQ'
    },
    {
      id: 2,
      title: 'Ram Katha',
      description: '7 Aug to 13 Aug 2023',
      speaker: 'Devi Bhavani | Panjab',
      date: 'November 2024',
      thumbnail: 'https://img.youtube.com/vi/roiQbz_pZAw/maxresdefault.jpg',
      url: 'https://www.youtube.com/embed/roiQbz_pZAw?si=zh3QvSCZh4MVNTVy'
    },
    {
      id: 3,
      title: 'Ram Katha',
      description: 'माथा क्या है - इससे कैसे बचें ?',
      speaker: 'Devi Bhavani | Panjab',
      date: 'November 2024',
      thumbnail: 'https://img.youtube.com/vi/ZriIAbevvgs/maxresdefault.jpg',
      url: 'https://www.youtube.com/embed/ZriIAbevvgs?si=JSFLFvZbnrkwgemp'
    }
  ];

  const bhajansContent = [
    {
      id: 1,
      title: 'Bhagwat Katha 2023',
      description: 'राधे कृष्णा संकीर्तन - बाल विदुषी देवी भवानी जी - Bhagwat Katha',
      date: 'December 2023',
      thumbnail: 'https://img.youtube.com/vi/MPe6k1Te_yg/maxresdefault.jpg',
      url: 'https://www.youtube.com/embed/MPe6k1Te_yg?si=leCRSYeFQ_O5JXMQ'
    },
    {
      id: 2,
      title: 'Ram Katha',
      description: '7 Aug to 13 Aug 2023',
      speaker: 'Devi Bhavani | Panjab',
      date: 'November 2024',
      thumbnail: 'https://img.youtube.com/vi/roiQbz_pZAw/maxresdefault.jpg',
      url: 'https://www.youtube.com/embed/roiQbz_pZAw?si=zh3QvSCZh4MVNTVy'
    },
    {
      id: 3,
      title: 'Ram Katha',
      description: 'माथा क्या है - इससे कैसे बचें ?',
      speaker: 'Devi Bhavani | Panjab',
      date: 'November 2024',
      thumbnail: 'https://img.youtube.com/vi/ZriIAbevvgs/maxresdefault.jpg',
      url: 'https://www.youtube.com/embed/ZriIAbevvgs?si=JSFLFvZbnrkwgemp'
    }
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

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'upcoming', label: 'Upcoming' },
            { id: 'katha', label: 'Katha/Yagna' },
            { id: 'seva', label: 'Seva' },
            { id: 'podcast', label: 'Podcast & Interview' },
            { id: 'bhajans', label: 'Bhajans' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-orange-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'upcoming' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.type.toUpperCase()}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {event.title}
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start text-gray-600 text-sm">
                      <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-orange-500" />
                      <div>
                        <div>{event.date}</div>
                        <div>{event.endDate}</div>
                      </div>
                    </div>
                    <div className="flex items-start text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-orange-500" />
                      <span>{event.venue}</span>
                    </div>
                  </div>

                  <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                    KNOW MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'katha' && (
          <div className="space-y-12">
            {/* Content Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">कथा और यज्ञ</h2>
              {kathaYagnaContent.content.map((item, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold text-orange-600 mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Videos Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {kathaYagnaContent.videos.map((video) => (
                  <div
                    key={video.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="relative pb-[56.25%]">
                      <iframe
                        src={video.url}
                        title={video.title}
                        className="absolute top-0 left-0 w-full h-full"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">{video.description}</p>
                      <span className="text-orange-500 text-sm font-medium">{video.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-orange-50 rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-6">
                For more information about our Katha and Yagna programs
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-lg">
                <a href="tel:+919991771111" className="text-orange-600 font-medium hover:underline">
                  📞 +91-9991771111
                </a>
                <a href="mailto:devichitralekha@yahoo.com" className="text-orange-600 font-medium hover:underline">
                  ✉️ devichitralekha@yahoo.com
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'seva' && (
          <div className="space-y-8">
            {sevaContent.map((seva) => (
              <div
                key={seva.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{seva.title}</h3>
                    <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                      {seva.images} Images
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">{seva.description}</p>
                  <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors inline-flex items-center">
                    📸 View Gallery
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'podcast' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcastContent.map((podcast) => (
              <div
                key={podcast.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="relative pb-[56.25%]">
                  <iframe
                    src={podcast.url}
                    title={podcast.title}
                    className="absolute top-0 left-0 w-full h-full"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {podcast.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{podcast.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm">{podcast.speaker}</span>
                    <span className="text-orange-500 text-sm font-medium">{podcast.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'bhajans' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bhajansContent.map((bhajan) => (
              <div
                key={bhajan.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="relative pb-[56.25%]">
                  <iframe
                    src={bhajan.url}
                    title={bhajan.title}
                    className="absolute top-0 left-0 w-full h-full"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {bhajan.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{bhajan.description}</p>
                  <div className="flex items-center justify-between">
                    {bhajan.speaker && (
                      <span className="text-gray-700 text-sm">{bhajan.speaker}</span>
                    )}
                    <span className="text-orange-500 text-sm font-medium">{bhajan.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Featured Event Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-xl overflow-hidden text-white">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Upcoming: Bhagwat Katha & Havan Mahotsav
            </h2>
            <p className="text-orange-50 mb-6 text-lg">
              Join us for a spiritually uplifting celebration including 7 days of divine Bhagwat Katha followed by 8 days of sacred Havan rituals. Let your soul immerse in bhakti and blessings.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Schedule:</p>
                  <p>24 Nov – 1 Dec • 7:00 AM Daily</p>
                  <p className="text-sm text-orange-100">(Katha: 7 days | Havan: 8 days from 20th May)</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Venue:</p>
                  <p>Satpal Maharaj Ashram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;