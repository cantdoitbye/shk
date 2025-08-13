import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaStar, FaCrown, FaGem, FaTrophy, FaMedal, FaAward, FaHandHoldingHeart, FaDonate } from 'react-icons/fa';

const Membership = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const membershipTypes = [
    {
      id: 5,
      category: 'vishisht',
      title: "विशिष्ट दानदाता",
      titleEnglish: "Special Donor",
      amount: "₹1,11,111/-",
      icon: <FaAward className="w-8 h-8" />,
      benefits: [
        "अष्टादशत् भागवत महायज्ञमें उपर्युक्त सभी सुविधा के साथ 3-5 व्यक्तियों की संख्या द्वार आवास एवं भोजनकी व्यवस्था की जायेगी",
        "एक आचार्य ब्राह्मण आपके साथ पूजा में रहेंगे",
        "आपश्री को पंचवाजा एवं 11 ब्राह्मण द्वारा स्वस्तिवाचन के साथ यज्ञ मण्डप में प्रवेश कराया जायेगा",
        "पंचामृत से अभिषेक कराया जायेगा",
        "इसके अलावा आपके और आपके गुहपरिजन के दीर्घायु एवं निरोगिता के लिये महामृत्युञ्जय मंत्र से सवालाख जप किया जायेगा",
        "हवन, तर्पण, मार्जन किया जायेगा",
        "इस प्रकार के दानवीर के परम पूज्य श्रीमद्जगद्गुरु शंकराचार्यजी महाराज, योग शिरोमणी प.पूज्य स्वामी श्री रामदेवजी महाराज, आर्यवेद शिरोमणी आचार्य बालकृष्णजी महाराज, प.पूज्य कथा व्यासजी एवं संस्थापक तथा विशिष्ट व्यक्ति द्वारा उच्च सम्मान पत्र से सम्मानित किया जायेगा",
        "एवं आपको गंगाजल यज्ञ का प्रसाद एवं सिद्ध की हुई रुद्राक्षमाला तुलसी माला (कण्ठी) सहित सात दिन सिद्ध की हुई"
      ],
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: 6,
      category: 'sahayojak',
      title: "सहयोजक आयोजक",
      titleEnglish: "Co-Organizer Donor",
      amount: "₹2,22,222/- से ₹5,00,151/- तक",
      icon: <FaGem className="w-8 h-8" />,
      benefits: [
        "आपश्री अष्टादशत् शत भागवत महायज्ञमें उपर्युक्त सभी सुविधा के साथ 5-7 व्यक्तियों की आवास-भोजन की व्यवस्था संस्था द्वारा की जायेगी",
        "2 आचार्य ब्राह्मण आपके साथ पूजा में रहेंगे",
        "आपश्री को पंचवाजा एवं कन्या द्वारा पुष्पवृष्टि करते हुए 21 ब्राह्मण द्वारा स्वस्तिवाचन के साथ यज्ञ मण्डप में प्रवेश कराया जायेगा",
        "गोपाल सहस्त्रनाम महामन्त्र द्वारा पंचगव्य और पंचामृत से अभिषेक कराया जायेगा",
        "इसके अलावा आपके और आपके गुहपरिजन के दीर्घायु एवं निरोगिता के लिये महामृत्युञ्जय मंत्र से सवालाख जप किया जायेगा",
        "हवन, तर्पण, मार्जन किया जायेगा",
        "इस प्रकार के दानवीर के परम पूज्य श्रीमद्जगद्गुरु शंकराचार्यजी महाराज, योग शिरोमणी प.पूज्य स्वामी श्री रामदेवजी महाराज, आर्यवेद शिरोमणी आचार्य बालकृष्णजी महाराज, प.पूज्य कथा व्यासजी, उत्तराण्ड के मानीय मुख्य मंत्री श्री, एवं संस्थापक लगावत विशिष्ट व्यक्ति द्वारा उच्च सम्मान पत्र द्वारा सम्मानित किया जायेगा",
        "आपको गंगाजल यज्ञ का प्रसाद एवं सिद्ध की हुई रुद्राक्षमाला तुलसी माला (कण्ठी) सहित सात दिन सिद्ध करके स्फटिक श्रीयंत्र और पारद शिवलिंग अथवा लड्डू गोपाल आपको प्रदान किया जायेगा",
        "आपको श्री हरिकृपा फाउन्डेशन की ओर से यशस्कर सदस्यताका प्रमाणपत्र से सम्मानित किया जायेगा",
        "आपश्रीका नाम परिवार सहित श्रीधाम वृंदावन आश्रम के कीर्तिस्तंभ पर सुवर्ण अक्षरमें लीखा जाएगा जिससे आपकी आनेवाली हर पीढी आपका गर्व के साथ स्मरण करेंगे",
        "जिससे आपश्री महापुण्य का लाभ प्राप्त कर सकेंगे"
      ],
      color: "from-blue-500 to-teal-500",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 7,
      category: 'pramukh',
      title: "प्रमुख आयोजक",
      titleEnglish: "Chief Organizer Donor",
      amount: "₹5,55,555/- से ₹11,11,111/- तक",
      icon: <FaCrown className="w-8 h-8" />,
      benefits: [
        "दानदाता भक्तजन अष्टादशरात् भागवत महायज्ञमें उपर्युक्त सभी सुविधा के साथ आवास भोजन की व्यवस्था संस्था द्वारा की जायेगी",
        "3 से 5 आचार्य ब्राह्मण आपके साथ पूजा में सेलगन रहेंगे",
        "स्वस्तिवाचन पूर्वक यज्ञ मण्डप में प्रवेश कराया जायेगा एवं चतुःश्लोकी भागवत महामन्त्र द्वारा गंगाजल से अभिषेक कराया जायेगा",
        "सात दिन तक एक आचार्य ब्राह्मण आपके साथ पूजा में सेलगन रहेंगे",
        "यज्ञ मण्डप में आप के पितृओं की फोटो भी रखी जायेगी",
        "श्रीमद्भागवत के 18000 श्लोक पाठ पारायण कर के 21 पितृयों का उद्धार होगा और भावी पितृ का कल्याण होगा",
        "आप के परिवार और आपश्री के आरोग्य के लिये 11000 महामृत्युञ्जय जाप किया जायेगा",
        "पूरा एक भागवत समाह का फल आपश्री को प्राप्त होगा",
        "योग शिरोमणी प.पूज्य स्वामी रामदेवजी महाराज अथवा उच्च पदासीन सन्तशिरोमणी, प.पूज्य व्यासजी महाराज और संस्था के संस्थापक के कर-कमलों से विशेष सम्मान पत्र द्वारा सम्मानित किया जायेगा",
        "आपको गंगाजल यज्ञ का प्रसाद एवं सिद्ध की हुई रुद्राक्षमाला तुलसी माला (कण्ठी) सहित सात दिन सिद्ध करके स्फटिक श्रीयंत्र आपश्रीको प्रदान किया जायेगा",
        "आपश्रीको श्री हरिकृपा फाउन्डेशन की संस्थापक सदस्यताका प्रमाणपत्र से सम्मानित किया जायेगा",
        "आपश्री और आपकी धर्मपत्नी का नाम श्री धाम वृंदावन आश्रम की सत्संग भवन में शिलालेख सुवर्ण अक्षरमें लीखा जाएगा जिससे आपकी आनेवाली हर पीढी आपका गर्व के साथ सदा स्मरण करेंगे",
        "जिससे आपश्री को पूण्य का लाभ प्राप्त होगा"
      ],
      color: "from-yellow-500 to-orange-500",
      textColor: "text-yellow-600",
      bgColor: "bg-yellow-50"
    }
  ];

  const yajmanTypes = [
    {
      title: "General Donor",
      titleHindi: "सामान्य दानदाता",
      description: "Basic participation in spiritual activities",
      icon: <FaHeart className="w-6 h-6" />
    },
    {
      title: "Senior Donor", 
      titleHindi: "वरिष्ठ दानदाता",
      description: "Enhanced spiritual benefits and recognition",
      icon: <FaStar className="w-6 h-6" />
    },
    {
      title: "Yagna Yajman",
      titleHindi: "यज्ञ यजमान",
      description: "Active participant in Yagna ceremonies",
      icon: <FaTrophy className="w-6 h-6" />
    },
    {
      title: "Root Yajman",
      titleHindi: "मूल यजमान", 
      description: "Foundational supporter of spiritual activities",
      icon: <FaMedal className="w-6 h-6" />
    },
    {
      title: "Special Yajman",
      titleHindi: "विशेष यजमान",
      description: "Special recognition and spiritual benefits",
      icon: <FaGem className="w-6 h-6" />
    },
    {
      title: "Co-Main Yajman",
      titleHindi: "सह-मुख्य यजमान",
      description: "Co-organizer with significant involvement",
      icon: <FaAward className="w-6 h-6" />
    },
    {
      title: "Chief Yajman",
      titleHindi: "मुख्य यजमान",
      description: "Primary sponsor with full spiritual benefits",
      icon: <FaCrown className="w-6 h-6" />
    }
  ];

  // Additional smaller donation categories
  const additionalDonations = [
    {
      id: 1,
      title: "सेवा दान",
      titleEnglish: "Service Donation",
      amount: "₹101/- से ₹1,001/- तक",
      icon: <FaHandHoldingHeart className="w-6 h-6" />,
      description: "भोजन प्रसाद, दीप दान, पुष्प दान एवं सामान्य सेवा के लिए",
      color: "from-green-400 to-green-600"
    },
    {
      id: 2,
      title: "सामान्य दान",
      titleEnglish: "General Donation",
      amount: "₹1,111/- से ₹11,111/- तक",
      icon: <FaDonate className="w-6 h-6" />,
      description: "कथा आयोजन में सामान्य सहयोग एवं आशीर्वाद प्राप्ति हेतु",
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 3,
      title: "मध्यम दान",
      titleEnglish: "Medium Donation",
      amount: "₹21,111/- से ₹51,111/- तक",
      icon: <FaMedal className="w-6 h-6" />,
      description: "विशेष पूजा अर्चना एवं आध्यात्मिक लाभ हेतु",
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 4,
      title: "उत्तम दान",
      titleEnglish: "Premium Donation",
      amount: "₹51,111/- से ₹1,11,111/- तक",
      icon: <FaTrophy className="w-6 h-6" />,
      description: "व्यापक आध्यात्मिक सुविधाएं एवं विशेष सम्मान",
      color: "from-purple-400 to-purple-600"
    }
  ];

  const filteredMemberships = selectedCategory === 'all' 
    ? membershipTypes 
    : membershipTypes.filter(membership => membership.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      {/* Header Section */}
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-gray-900 mb-4"
          >
            सदस्यता योजना
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-semibold text-primary mb-6"
          >
            Membership Plans
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            श्रीमद् भागवत कथा में विभिन्न दान राशि के अनुसार सदस्यता प्राप्त करें और आध्यात्मिक लाभ उठाएं
          </motion.p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="px-4 mb-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { key: 'all', label: 'सभी योजनाएं' },
              { key: 'vishisht', label: 'विशिष्ट दानदाता' },
              { key: 'sahayojak', label: 'सहयोजक आयोजक' },
              { key: 'pramukh', label: 'प्रमुख आयोजक' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedCategory(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === filter.key
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary/10 hover:text-primary'
                } border border-gray-200`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Donation Categories */}
      <div className="px-4 mb-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">अन्य दान श्रेणियां</h2>
            <h3 className="text-2xl font-semibold text-primary mb-6">Other Donation Categories</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {additionalDonations.map((donation, index) => (
              <motion.div
                key={donation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-r ${donation.color} p-4 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      {donation.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{donation.amount}</div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{donation.title}</h4>
                  <p className="text-primary font-medium mb-2">{donation.titleEnglish}</p>
                  <p className="text-gray-600 text-sm">{donation.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Membership Cards */}
      <div className="px-4 mb-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">प्रमुख सदस्यता योजनाएं</h2>
            <h3 className="text-2xl font-semibold text-primary mb-6">Premium Membership Plans</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMemberships.map((membership, index) => (
              <motion.div
                key={membership.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${membership.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white">
                      {membership.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{membership.amount}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{membership.title}</h3>
                  <p className="text-white/90 text-lg">{membership.titleEnglish}</p>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">सुविधाएं एवं लाभ:</h4>
                  <div className="max-h-80 overflow-y-auto">
                    <ul className="space-y-3">
                      {membership.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full ${membership.bgColor} mt-2 mr-3 flex-shrink-0`}></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <a
                      href="https://forms.gle/Xg5B7WJEjDR3hQHd6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full bg-gradient-to-r ${membership.color} text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group`}
                    >
                      <span>अभी सदस्यता लें</span>
                      <FaHeart className="ml-2 group-hover:animate-pulse" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Yajman Types Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">यजमान के प्रकार</h2>
            <h3 className="text-2xl font-semibold text-primary mb-6">Types of Yajman</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              विभिन्न यजमान प्रकार चुनें और अपनी आध्यात्मिक यात्रा को समृद्ध बनाएं
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {yajmanTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-orange-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100"
              >
                <div className="text-primary mb-4">
                  {type.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h4>
                <p className="text-primary font-medium mb-3">{type.titleHindi}</p>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">सदस्यता के लिए संपर्क करें</h2>
            <p className="text-xl mb-8 text-white/90">
              अधिक जानकारी के लिए हमसे जुड़ें और अपनी आध्यात्मिक यात्रा शुरू करें
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">संपर्क नंबर</h3>
                <div className="space-y-2">
                  <p className="text-lg">📞 M. 9327623978</p>
                  <p className="text-lg">📞 8320158274</p>
                  <p className="text-lg">📞 9033770099</p>
                  <p className="text-lg">📞 8160885317</p>
                  <p className="text-lg">📞 9429129397</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">बैंक विवरण</h3>
                <div className="text-left space-y-2">
                  <p><strong>खाता नाम:</strong> SHREE HARIKRUPA FOUNDATION</p>
                  <p><strong>खाता संख्या:</strong> 200810210000011</p>
                  <p><strong>IFSC:</strong> BKID0002008</p>
                  <p><strong>बैंक:</strong> Bank of India</p>
                  <p><strong>शाखा:</strong> (Maninagar) AHMEDABAD</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://forms.gle/Xg5B7WJEjDR3hQHd6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>यजमान फॉर्म भरें</span>
                <FaHeart className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Note Section */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mx-4 mb-8 rounded-r-lg">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-yellow-800">
              <strong>नोट:</strong> किसी कारणवश महानुभाव सेत महात्माओं की अनुपस्थिति पर संस्था क्षमाप्रार्थी रहेगी।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;