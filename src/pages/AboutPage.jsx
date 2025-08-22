const nepaliContent = {
    guruji: {
      biography: `"वन्दे वाणीविनायकौ"

हामी वाणी र बुद्धिका अधिष्ठाता भगवान् श्री गणेश र देवी सरस्वतीलाई सादर वन्दन गर्दछौं।

अनन्त ब्रह्माण्डका अधिपति, अकारण करुणाका सागर, भक्तहरूको इच्छा पूरा गर्ने प्रभु श्रीराधाकृष्णको परम कृपाले नेपालको पुण्यभूमि कालिकोटस्थित शिपखाना नगरपालिकामा, १० सेप्टेम्बर १९७८ मा एक दिव्य आत्माको जन्म भयो।

तपाईंको जन्म एक पवित्र र विद्वान परिवारमा भयो — पिता पं. श्री नारायणदास जी महाराज र माता श्रीमती विष्णादेवी उपाध्याय जी।

बाल्यकालमा ६ वर्षको उमेरसम्म शिक्षा नेपालमै प्राप्त गर्नुभयो। त्यसपछि विभिन्न पवित्र स्थलहरूको भ्रमण गर्दै आध्यात्मिक शिक्षामा संलग्न हुनुभयो।`,
      
      achievements: [
        'हरिकृपा फाउन्डेशनको स्थापना',
        'हजारौंको आध्यात्मिक मार्गदर्शन',
        'सामुदायिक सेवा कार्यक्रमहरूको स्थापना',
        'आध्यात्मिक ग्रन्थहरूको रचना'
      ],
      
      teachings: [
        'दैनिक ध्यान र प्रार्थना',
        'मानवताको निस्वार्थ सेवा',
        'पुरातन शास्त्रहरूको अध्ययन',
        'करुणा र विनम्रताका साथ जीवन'
      ],
      
      philosophy: 'साँचो आध्यात्मिकता अरूको सेवामा छ, भित्री शान्ति र दिव्यताप्रति भक्ति कायम राख्दै।'
    },
    
    deviji: {
      biography: `॥ श्री सीतारामाभ्यां नमः ॥

सत्य, चेतना र आनन्दको मूर्ति, आत्म-साक्षात्कार दर्शनको शिरोमणि भगवान् बालदेव; कमल-नेत्र वासुदेव; र सबै परम्पराका पूज्य गुरुलाई नमस्कार।

भगवान् श्रीकृष्णको असीम कृपाले, करुणाको सागर र भक्तहरूको संरक्षक, भारतको पवित्र भूमि गुजरातमा २३ जुलाई २००२ (श्रीकृष्ण जन्माष्टमी) को शुभ दिनमा श्रीकृष्णको एक भक्त परिवारमा एक दिव्य बालिकाको जन्म भयो। यी दिव्य बालिका देवी भवानी जी हुन्।

शुरुदेखि नै, देवी भवानी जीको पालनपोषण गहिरो आध्यात्मिक र धार्मिक वातावरणमा भयो। उहाँका दाजु, आफैं आध्यात्मिक प्रवृत्तिका, उहाँका पहिलो गुरु बने।

जब उमेर बढ्यो, उहाँले सनातन धर्मको ह्रास, बढ्दो धर्म परिवर्तन, र हिन्दू केटीहरूमाथि हुने अत्याचार देख्नुभयो। यी पीडादायक वास्तविकताले उहाँका आँखामा आँसु ल्यायो। जब उहाँका बुबाले किन रोइरहेकी भनेर सोध्नुभयो, उहाँले आफ्नो पीडा बाँड्नुभयो र धर्म, संस्कृति र राष्ट्रिय सम्पदाको संरक्षणमा आफ्नो जीवन समर्पण गर्ने संकल्प व्यक्त गर्नुभयो।

१२ वर्षको उमेरमा नै उहाँले गहिरो अध्ययन मात्र गर्नुभएन बल्कि मिडिया प्लेटफर्महरू मार्फत प्रवचन साझा गर्न पनि सुरु गर्नुभयो।`,
      
      achievements: [
        '१२ वर्षको उमेरमा आध्यात्मिक प्रवचन सुरु',
        'राष्ट्रभर कथाहरूको आयोजना',
        'श्रीमद्भागवतम् र गीताको विशेषज्ञता',
        'युवाहरूका लागि प्रेरणाको स्रोत'
      ],
      
      teachings: [
        'श्रीमद्भागवत महापुराणको अध्ययन',
        'भगवद्गीताका सिद्धान्तहरू',
        'सनातन धर्मको संरक्षण',
        'युवाहरूमा धार्मिक चेतना जगाउने'
      ],
      
      philosophy: 'धर्म, संस्कृति र आध्यात्मिक मूल्यहरूको संरक्षणमा आफ्नो जीवन समर्पण गर्नु नै साँचो भक्ति हो।'
    }
  };import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaOm, FaTimes, FaCalendarAlt, FaMapMarkerAlt, FaQuoteLeft } from "react-icons/fa";
import { GiLotusFlower } from "react-icons/gi";

// Import images
import gurujImage from '../assets/car/img6.jpeg';
import devijiImage from '../assets/car/img11.jpg'; // You'll need to add this image

const AboutPage = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [language, setLanguage] = useState('hindi');

  // Language content for the detailed modal
  const hindiContent = {
    guruji: {
      biography: `"वन्दे वाणीविनायकौ"

हम वाणी और बुद्धि के अधिष्ठाता भगवान श्री गणेश और देवी सरस्वती को सादर वंदन करते हैं।

अनन्त कोटि ब्रह्माण्डाधिपति, अकारण करुणा के सागर, भक्तों की इच्छा पूर्ति करने वाले प्रभु श्रीराधाकृष्ण की परम कृपा से नेपाल की पुण्यभूमि कालिकोट स्थित शिपखाना नगरपालिका में, 10 सितंबर 1978 को एक दिव्य आत्मा ने जन्म लिया — एक ऐसा जीवन जो आगे चलकर हजारों लोगों का मार्गदर्शन करेगा।

आपका जन्म एक पवित्र और विद्वत परिवार में हुआ — पिता पं. श्री नारायणदास जी महाराज, जो श्रौतस्मार्त परंपरा में निष्णात और सर्वशास्त्रों में पारंगत थे, एवं माता श्रीमती विष्णादेवी उपाध्याय जी, जो वात्सल्य की मूर्तिमान प्रतीक थीं।

आपने बाल्यावस्था में 6 वर्ष की उम्र तक शिक्षा नेपाल में ही प्राप्त की। इसके पश्चात हरिद्वार, वृन्दावन, वाराणसी, अयोध्या, द्वारका, सत्ताधर, जूनागढ़ जैसे पवित्र स्थलों का भ्रमण करते हुए अपने पूज्य पिताजी के साथ गहन अध्ययन में प्रवृत्त रहे।

बाल्यकाल से ही स्वाध्याय, जप, तप, अनुष्ठान आदि में आपकी गहरी रुचि रही है। यही साधना भविष्य में आपके जीवन का आधार बनी।`,
      
      achievements: [
        'हरिकृपा फाउंडेशन की स्थापना',
        'हजारों लोगों का आध्यात्मिक मार्गदर्शन',
        'अनेक सामुदायिक सेवा कार्यक्रमों की स्थापना',
        'आध्यात्मिक ग्रंथों की रचना'
      ],
      
      teachings: [
        'दैनिक ध्यान और प्रार्थना',
        'मानवता की निस्वार्थ सेवा',
        'प्राचीन शास्त्रों का अध्ययन',
        'करुणा और विनम्रता के साथ जीवन'
      ],
      
      philosophy: 'सच्ची आध्यात्मिकता दूसरों की सेवा में निहित है, जबकि आंतरिक शांति और दिव्यता के प्रति भक्ति बनाए रखी जाती है।'
    },
    
    deviji: {
      biography: `॥ श्री सीतारामाभ्यां नमः ॥

मनस्वरूपाय सच्चिदानन्द मूर्तये, स्वस्वात्मावादि शिरोमणये बालदेव । पुष्कराक्षाय वासुदेवाय, सस्कृतये गुरु पात्रिणे नमः ॥

अनन्त कोटि ब्रह्माण्ड के अधिनायक अकारण करुणाकर भक्तवात्सल कल्पतरु प्रभु श्रीकृष्ण की परम कृपा से भारत की पावन पुण्यभूमि गुजरात में 23 जुलाई सन 2002 में श्रीकृष्ण जन्माष्टमी के दिन एक परम आत्मा का अवतरण हुआ।

आप श्री का जन्म एक धार्मिक श्रीकृष्ण भक्त परिवार में हुआ। आप श्री के एक बड़े भाई (जो कि धार्मिक प्रवृत्ति के ही है) आपके प्रथम गुरु थे। बचपन से ही आप श्री का लालन-पालन धार्मिक-सांस्कृतिक वातावरण में हुआ।

6 साल की उम्र में आप श्री इस्कॉन स्कूल में पढ़ने लगे। श्री भगवान का चिन्तन-मनन करते रहते और हर दिन पिता श्री की प्रेरणा से श्री हरिवंश जी (ब्रह्म सूत्र) एवं श्रीमद्भागवत का अध्ययन करते रहते।

जब उम्र बढ़ी तब सनातन धर्म की हानि, धर्म परिवर्तन और हिन्दू सनातन की बेटियों पर अत्याचार देखकर आप श्री की आँखों से आँसू रुक नहीं सके। तब आपने अपना जीवन धर्म संस्कृति-संस्कार एवं राष्ट्रधर्म के प्रति समर्पित करने का संकल्प लिया।

सबसे पहले श्री धाम वृन्दावन में श्री राधाकृष्ण महाराजकुञ्ज के सानिध्य में गीता, भागवत की पहली कथा का प्रारम्भ हुआ और फिर धीरे-धीरे देशभर में गुजरात, हरिद्वार, देहरादून, सिक्किम, दार्जिलिंग, पंजाब आदि कई स्थानों पर कथा सम्पन्न की।

12 वर्ष की अल्पायु में ही आप श्री ने कथा प्रवचन को स्वीकारा और आज भी भागवत गीता, श्रीमद्भागवत महापुराण, रामचरितमानस, विष्णु पुराण, विविध शास्त्रों का अध्ययन कर अनगिनत लोगों का मार्गदर्शन कर रही हैं।`,
      
      achievements: [
        '12 वर्ष की आयु से कथा प्रवचन',
        'देशभर में आध्यात्मिक कथाओं का आयोजन',
        'श्रीमद्भागवत और गीता की विशेषज्ञता',
        'युवाओं के लिए प्रेरणास्रोत'
      ],
      
      teachings: [
        'श्रीमद्भागवत महापुराण का अध्ययन',
        'भगवद्गीता के सिद्धांत',
        'सनातन धर्म का संरक्षण',
        'युवाओं में धार्मिक चेतना जागृति'
      ],
      
      philosophy: 'धर्म, संस्कृति और संस्कार के संरक्षण के लिए अपना जीवन समर्पित करना ही सच्ची भक्ति है।'
    }
  };

  const englishContent = {
    guruji: {
      biography: `"Vande Vani Vinayakau"

We begin with humble salutations to the divine embodiments of wisdom and speech — Lord Vinayaka and Goddess Saraswati.

Under the infinite grace of Lord Shri Radha-Krishna, our spiritual journey began in the sacred land of Kalikot, Nepal. On September 10, 1978, in Shipkhana Municipality, a soul destined to guide thousands was born into the revered lineage of Pandit Shri Narayan Das Ji Maharaj and Mata Shri Vishnadevi Upadhyay Ji.

From a young age, our Gurudev was immersed in learning, meditation, and spiritual discipline. After completing his early education in Nepal, he journeyed through Haridwar, Vrindavan, Varanasi, Ayodhya, Dwarka, and other sacred centers under the loving guidance of his father.

His life has always been rooted in tapasya (austerity), self-study, and service. The foundation of his future spiritual mission was laid during these formative years of intense practice and devotion.`,
      
      achievements: [
        'Founded Hari Kripa Foundation',
        'Guided thousands in spiritual practices',
        'Established multiple community service programs',
        'Author of several spiritual texts'
      ],
      
      teachings: [
        'Daily meditation and prayer',
        'Selfless service to humanity',
        'Study of ancient scriptures',
        'Living with compassion and humility'
      ],
      
      philosophy: 'True spirituality lies in serving others while maintaining inner peace and devotion to the Divine.'
    },
    
    deviji: {
      biography: `॥ Salutations to Shri Sita-Rama ॥

Salutations to Lord Baladeva, the embodiment of truth, consciousness, and bliss; the crown jewel of the philosophy of self-realization; the lotus-eyed Vasudeva; and the revered Guru of all traditions.

With the boundless grace of Lord Shri Krishna, the ocean of compassion and protector of devotees, in the holy land of Gujarat, India, on the auspicious day of 23rd July 2002 (Sri Krishna Janmashtami), a divine child was born into a devout family of Shri Krishna. This divine child is Devi Bhavaniji.

From the beginning, Devi Bhavaniji's upbringing was deeply rooted in a spiritual and religious atmosphere. Her elder brother, himself spiritually inclined, became her first guru. At the age of six, her parents decided to enroll her in an ISKCON medium school, where alongside her formal education, she continuously engaged in meditation and contemplation of Lord Krishna.

As she grew older, she witnessed the decline of Sanatan Dharma, increasing religious conversions, and atrocities against Hindu girls. These painful realities brought tears to her eyes. When her father asked why she was crying, she shared her anguish and expressed her resolve to devote her life to protecting dharma, culture, and national heritage.

Her first discourse was in Vrindavan at the holy Radhakrishna Maharaj Kunj, where she delivered teachings from the Bhagavad Gita and Bhagavatam. Gradually, she was invited across India — Gujarat, Haridwar, Dehradun, Sikkim, Darjeeling, Punjab, and many more places.

By the age of 12, she had not only studied deeply but also started sharing discourses through media platforms. Today, she continues to guide countless seekers through the Bhagavad Gita, Shrimad Bhagavat Mahapurana, Ramcharitmanas, Vishnu Purana, and many other scriptures.`,
      
      achievements: [
        'Started spiritual discourses at age 12',
        'Conducted kathas across the nation',
        'Expert in Shrimad Bhagavatam and Gita',
        'Inspiration for youth nationwide'
      ],
      
      teachings: [
        'Study of Shrimad Bhagavat Mahapurana',
        'Principles of Bhagavad Gita',
        'Preservation of Sanatan Dharma',
        'Awakening religious consciousness in youth'
      ],
      
      philosophy: 'True devotion lies in dedicating one\'s life to the preservation of dharma, culture, and spiritual values.'
    }
  };

  const nepaliContent = {
    biography: `"वन्दे वाणीविनायकौ"

हामी वाणी र बुद्धिका अधिष्ठाता भगवान् श्री गणेश र देवी सरस्वतीलाई सादर वन्दन गर्दछौं।

अनन्त ब्रह्माण्डका अधिपति, अकारण करुणाका सागर, भक्तहरूको इच्छा पूरा गर्ने प्रभु श्रीराधाकृष्णको परम कृपाले नेपालको पुण्यभूमि कालिकोटस्थित शिपखाना नगरपालिकामा, १० सेप्टेम्बर १९७८ मा एक दिव्य आत्माको जन्म भयो।

तपाईंको जन्म एक पवित्र र विद्वान परिवारमा भयो — पिता पं. श्री नारायणदास जी महाराज र माता श्रीमती विष्णादेवी उपाध्याय जी।

बाल्यकालमा ६ वर्षको उमेरसम्म शिक्षा नेपालमै प्राप्त गर्नुभयो। त्यसपछि विभिन्न पवित्र स्थलहरूको भ्रमण गर्दै आध्यात्मिक शिक्षामा संलग्न हुनुभयो।`,
    
    achievements: [
      'हरिकृपा फाउन्डेशनको स्थापना',
      'हजारौंको आध्यात्मिक मार्गदर्शन',
      'सामुदायिक सेवा कार्यक्रमहरूको स्थापना',
      'आध्यात्मिक ग्रन्थहरूको रचना'
    ],
    
    teachings: [
      'दैनिक ध्यान र प्रार्थना',
      'मानवताको निस्वार्थ सेवा',
      'पुरातन शास्त्रहरूको अध्ययन',
      'करुणा र विनम्रताका साथ जीवन'
    ],
    
    philosophy: 'साँचो आध्यात्मिकता अरूको सेवामा छ, भित्री शान्ति र दिव्यताप्रति भक्ति कायम राख्दै।'
  };

  // Data for both persons
  const personsData = [
    {
      id: 'guruji',
      name: 'Pujya Guruji',
      title: 'Spiritual Guide & Founder',
      image: gurujImage,
      sanskrit: 'श्री गुरुजी महाराज',
      shortDesc: 'Revered spiritual teacher and the guiding light of Hari Kripa Foundation'
    },
    {
      id: 'deviji',
      name: 'Pujya Devi Ji',
      title: 'Spiritual & Co-Founder',
      image: devijiImage,
      sanskrit: 'श्री देवी माता जी',
      shortDesc: 'Divine figure and co-founder, spreading love and compassion'
    }
  ];

  const getCurrentContent = () => {
    const personId = selectedPerson?.id;
    switch(language) {
      case 'english': return englishContent[personId];
      case 'nepali': return nepaliContent[personId];
      default: return hindiContent[personId];
    }
  };

  const getNextLanguage = (lang) => {
    if (lang === 'hindi') return 'english';
    if (lang === 'english') return 'nepali';
    return 'hindi';
  };

  const getToggleLabel = (lang) => {
    if (lang === 'hindi') return 'Read in English';
    if (lang === 'english') return 'नेपालीमा पढ्नुहोस्';
    return 'हिंदी में पढ़ें';
  };

  const openModal = (person) => {
    setSelectedPerson(person);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPerson(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            <FaOm className="text-4xl text-orange-600 mx-6" />
            <div className="h-1 w-20 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-700 mb-6">
            Our Spiritual Leaders
          </h1>
          <div className="text-xl text-orange-600 mb-6 font-medium">
            आध्यात्मिक मार्गदर्शक
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Meet the divine souls who guide our spiritual journey and lead us on the path of wisdom, 
            compassion, and selfless service.
          </p>
        </div>

        {/* Two Person Cards - Side by Side Layout */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {personsData.map((person, index) => (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
                onClick={() => openModal(person)}
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100 overflow-hidden relative h-full">
                  {/* Decorative Elements */}
                  <div className="absolute top-6 right-6 text-orange-200 opacity-50">
                    <GiLotusFlower className="text-3xl" />
                  </div>
                  
                  {/* Image and Content */}
                  <div className="text-center">
                    {/* Image */}
                    <div className="relative mb-6">
                      <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-orange-200 shadow-lg group-hover:border-orange-400 transition-colors duration-300">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-orange-700 mb-2">
                        {person.name}
                      </h3>
                      <div className="text-lg md:text-xl text-orange-600 mb-2 font-medium">
                        {person.sanskrit}
                      </div>
                      <p className="text-orange-600 font-semibold text-base md:text-lg mb-4">
                        {person.title}
                      </p>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        {person.shortDesc}
                      </p>
                      
                      <div className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-medium inline-flex items-center transition-colors duration-300">
                        <span className="mr-2">Click to Learn More</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Members Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-4">
              Our Team Members
            </h2>
            <div className="text-lg text-orange-600 mb-4 font-medium">
              सभी सदस्य
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Meet our dedicated team members who support our mission and serve the community with devotion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Member 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Shri Ramesh Kumar
              </h3>
              <p className="text-orange-600 font-medium text-sm mb-2">
                Secretary
              </p>
              <p className="text-gray-600 text-xs">
                Gujarat, India
              </p>
            </div>

            {/* Member 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Smt. Meera Sharma
              </h3>
              <p className="text-orange-600 font-medium text-sm mb-2">
                Treasurer
              </p>
              <p className="text-gray-600 text-xs">
                Ahmedabad, Gujarat
              </p>
            </div>

            {/* Member 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-600 to-orange-800 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Pandit Suresh Joshi
              </h3>
              <p className="text-orange-600 font-medium text-sm mb-2">
                Program Coordinator
              </p>
              <p className="text-gray-600 text-xs">
                Vadodara, Gujarat
              </p>
            </div>

            {/* Member 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-orange-700 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Dr. Anjali Patel
              </h3>
              <p className="text-orange-600 font-medium text-sm mb-2">
                Community Outreach
              </p>
              <p className="text-gray-600 text-xs">
                Surat, Gujarat
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Person Details */}
      <AnimatePresence>
        {selectedPerson && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(getNextLanguage(language))}
                className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium px-4 py-2 rounded-full transition-colors duration-300 z-10"
              >
                {getToggleLabel(language)}
              </button>

              {/* Modal Header */}
              <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-t-3xl">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white hover:text-orange-200 transition-colors p-2"
                >
                  <FaTimes className="text-xl" />
                </button>
                
                <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-lg flex-shrink-0">
                    <img
                      src={selectedPerson.image}
                      alt={selectedPerson.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      {selectedPerson.name}
                    </h2>
                    <div className="text-xl mb-2 opacity-90">
                      {selectedPerson.sanskrit}
                    </div>
                    <p className="text-lg opacity-80">
                      {selectedPerson.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Basic Info Table */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center">
                    <GiLotusFlower className="mr-2" />
                    {language === 'hindi' ? 'व्यक्तिगत जानकारी' : language === 'english' ? 'Personal Information' : 'व्यक्तिगत जानकारी'}
                  </h3>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">{language === 'hindi' ? 'जन्म:' : 'Born:'}</span>
                          <span className="text-gray-600">
                            {selectedPerson.id === 'guruji' 
                              ? (language === 'hindi' ? '10 सितंबर 1978' : 'September 10, 1978')
                              : (language === 'hindi' ? '23 जुलाई 2002' : 'July 23, 2002')
                            }
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">{language === 'hindi' ? 'जन्म स्थान:' : 'Birthplace:'}</span>
                          <span className="text-gray-600">
                            {selectedPerson.id === 'guruji' 
                              ? (language === 'hindi' ? 'कालिकोट, नेपाल' : 'Kalikot, Nepal')
                              : (language === 'hindi' ? 'गुजरात, भारत' : 'Gujarat, India')
                            }
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">{language === 'hindi' ? 'व्यवसाय:' : 'Occupation:'}</span>
                          <span className="text-gray-600">
                            {language === 'hindi' ? 'आध्यात्मिक गुरु' : 'Spiritual Teacher'}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">{language === 'hindi' ? 'प्रसिद्ध:' : 'Known for:'}</span>
                          <span className="text-gray-600">
                            {selectedPerson.id === 'guruji' 
                              ? (language === 'hindi' ? 'हरिकृपा फाउंडेशन' : 'Hari Kripa Foundation')
                              : (language === 'hindi' ? 'कथा प्रवचन' : 'Spiritual Discourses')
                            }
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">{language === 'hindi' ? 'आध्यात्मिक परंपरा:' : 'Tradition:'}</span>
                          <span className="text-gray-600">
                            {language === 'hindi' ? 'सनातन धर्म' : 'Sanatan Dharma'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">{language === 'hindi' ? 'संस्थापक:' : 'Founder:'}</span>
                          <span className="text-gray-600">
                            {selectedPerson.id === 'guruji' 
                              ? (language === 'hindi' ? 'हरिकृपा फाउंडेशन' : 'Hari Kripa Foundation')
                              : (language === 'hindi' ? 'सह-संस्थापक' : 'Co-Founder')
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Early Life Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-orange-700 mb-4 border-b border-orange-200 pb-2">
                    {language === 'hindi' ? 'प्रारंभिक जीवन' : language === 'english' ? 'Early Life' : 'प्रारंभिक जीवन'}
                  </h3>
                  <div className="text-gray-700 leading-relaxed">
                    {selectedPerson.id === 'guruji' ? (
                      language === 'hindi' ? (
                        <>
                          <p className="mb-4">अनन्त कोटि ब्रह्माण्डाधिपति, अकारण करुणा के सागर, भक्तों की इच्छा पूर्ति करने वाले प्रभु श्रीराधाकृष्ण की परम कृपा से नेपाल की पुण्यभूमि कालिकोट स्थित शिपखाना नगरपालिका में, 10 सितंबर 1978 को एक दिव्य आत्मा ने जन्म लिया।</p>
                          <p className="mb-4">आपका जन्म एक पवित्र और विद्वत परिवार में हुआ — पिता पं. श्री नारायणदास जी महाराज, जो श्रौतस्मार्त परंपरा में निष्णात और सर्वशास्त्रों में पारंगत थे, एवं माता श्रीमती विष्णादेवी उपाध्याय जी, जो वात्सल्य की मूर्तिमान प्रतीक थीं।</p>
                          <p>आपने बाल्यावस्था में 6 वर्ष की उम्र तक शिक्षा नेपाल में ही प्राप्त की। इसके पश्चात हरिद्वार, वृन्दावन, वाराणसी, अयोध्या, द्वारका, सत्ताधर, जूनागढ़ जैसे पवित्र स्थलों का भ्रमण करते हुए अपने पूज्य पिताजी के साथ गहन अध्ययन में प्रवृत्त रहे।</p>
                        </>
                      ) : (
                        <>
                          <p className="mb-4">Under the infinite grace of Lord Shri Radha-Krishna, on September 10, 1978, in Shipkhana Municipality, Kalikot, Nepal, a divine soul was born who would guide thousands in their spiritual journey.</p>
                          <p className="mb-4">Born into a revered scholarly family, his father Pandit Shri Narayan Das Ji Maharaj was an expert in the Shrautasmarta tradition and well-versed in all scriptures, while his mother Shrimati Vishnadevi Upadhyay Ji embodied maternal love and care.</p>
                          <p>He received his early education in Nepal until the age of six, after which he traveled to sacred places like Haridwar, Vrindavan, Varanasi, Ayodhya, Dwarka, and others, engaging in deep study under his revered father's guidance.</p>
                        </>
                      )
                    ) : (
                      language === 'hindi' ? (
                        <>
                          <p className="mb-4">अनन्त कोटि ब्रह्माण्ड के अधिनायक अकारण करुणाकर भक्तवात्सल कल्पतरु प्रभु श्रीकृष्ण की परम कृपा से भारत की पावन पुण्यभूमि गुजरात में 23 जुलाई सन 2002 में श्रीकृष्ण जन्माष्टमी के दिन एक परम आत्मा का अवतरण हुआ।</p>
                          <p className="mb-4">आप श्री का जन्म एक धार्मिक श्रीकृष्ण भक्त परिवार में हुआ। आप श्री के एक बड़े भाई (जो कि धार्मिक प्रवृत्ति के ही है) आपके प्रथम गुरु थे। बचपन से ही आप श्री का लालन-पालन धार्मिक-सांस्कृतिक वातावरण में हुआ।</p>
                          <p>6 साल की उम्र में आप श्री इस्कॉन स्कूल में पढ़ने लगे। श्री भगवान का चिन्तन-मनन करते रहते और हर दिन पिता श्री की प्रेरणा से श्री हरिवंश जी (ब्रह्म सूत्र) एवं श्रीमद्भागवत का अध्ययन करते रहते।</p>
                        </>
                      ) : (
                        <>
                          <p className="mb-4">With the boundless grace of Lord Shri Krishna, on the auspicious day of July 23, 2002 (Sri Krishna Janmashtami), a divine child was born into a devout family in Gujarat, India.</p>
                          <p className="mb-4">Born into a religious Krishna-devotee family, her upbringing was deeply rooted in spiritual and religious atmosphere. Her elder brother, himself spiritually inclined, became her first guru.</p>
                          <p>At the age of six, she enrolled in an ISKCON school, where she continuously engaged in meditation and contemplation of Lord Krishna, studying Harivamsa and Shrimad Bhagavatam daily under her father's inspiration.</p>
                        </>
                      )
                    )}
                  </div>
                </div>

                {/* Spiritual Journey Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-orange-700 mb-4 border-b border-orange-200 pb-2">
                    {language === 'hindi' ? 'आध्यात्मिक यात्रा' : language === 'english' ? 'Spiritual Journey' : 'आध्यात्मिक यात्रा'}
                  </h3>
                  <div className="text-gray-700 leading-relaxed">
                    {selectedPerson.id === 'guruji' ? (
                      language === 'hindi' ? (
                        <p>बाल्यकाल से ही स्वाध्याय, जप, तप, अनुष्ठान आदि में आपकी गहरी रुचि रही है। यही साधना भविष्य में आपके जीवन का आधार बनी। कुछ वर्षों बाद आपने बड़ोदरा महानगरपालिका क्षेत्र में लगभग 25 से 50 वर्षों तक स्थायी निवास करते हुए आध्यात्मिक अध्ययन एवं सामाजिक सेवा को जीवन का अभिन्न हिस्सा बनाया।</p>
                      ) : (
                        <p>From childhood, he showed deep interest in self-study, chanting, austerity, and spiritual practices. This foundation of spiritual discipline became the cornerstone of his life mission. Later, he resided in Vadodara for approximately 25-50 years, making spiritual study and social service an integral part of his life.</p>
                      )
                    ) : (
                      language === 'hindi' ? (
                        <>
                          <p className="mb-4">जब उम्र बढ़ी तब सनातन धर्म की हानि, धर्म परिवर्तन और हिन्दू सनातन की बेटियों पर अत्याचार देखकर आप श्री की आँखों से आँसू रुक नहीं सके। तब आपने अपना जीवन धर्म संस्कृति-संस्कार एवं राष्ट्रधर्म के प्रति समर्पित करने का संकल्प लिया।</p>
                          <p>सबसे पहले श्री धाम वृन्दावन में श्री राधाकृष्ण महाराजकुञ्ज के सानिध्य में गीता, भागवत की पहली कथा का प्रारम्भ हुआ और फिर धीरे-धीरे देशभर में गुजरात, हरिद्वार, देहरादून, सिक्किम, दार्जिलिंग, पंजाब आदि कई स्थानों पर कथा सम्पन्न की।</p>
                        </>
                      ) : (
                        <>
                          <p className="mb-4">As she grew older, witnessing the decline of Sanatan Dharma, increasing religious conversions, and atrocities against Hindu girls brought tears to her eyes. She then resolved to dedicate her life to the protection of dharma, culture, and national heritage.</p>
                          <p>Her first discourse began in Vrindavan at the holy Radhakrishna Maharaj Kunj with the Gita and Bhagavatam, gradually expanding to various places across India including Gujarat, Haridwar, Dehradun, Sikkim, Darjeeling, Punjab, and many other locations.</p>
                        </>
                      )
                    )}
                  </div>
                </div>

                {/* Teachings and Work Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-orange-700 mb-4 border-b border-orange-200 pb-2">
                    {language === 'hindi' ? 'शिक्षाएं और कार्य' : language === 'english' ? 'Teachings and Work' : 'शिक्षाएं और कार्य'}
                  </h3>
                  <div className="text-gray-700 leading-relaxed mb-4">
                    {selectedPerson.id === 'deviji' && (
                      <p className="mb-4">
                        {language === 'hindi' 
                          ? '12 वर्ष की अल्पायु में ही आप श्री ने कथा प्रवचन को स्वीकारा और आज भी भागवत गीता, श्रीमद्भागवत महापुराण, रामचरितमानस, विष्णु पुराण, विविध शास्त्रों का अध्ययन कर अनगिनत लोगों का मार्गदर्शन कर रही हैं।'
                          : 'At the tender age of 12, she embraced spiritual discourse and continues to guide countless people through the study of Bhagavad Gita, Shrimad Bhagavat Mahapurana, Ramcharitmanas, Vishnu Purana, and various other scriptures.'
                        }
                      </p>
                    )}
                  </div>
                  
                  {/* Core Teachings List */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">
                        {language === 'hindi' ? 'मुख्य शिक्षाएं' : 'Core Teachings'}
                      </h4>
                      <ul className="space-y-2">
                        {getCurrentContent().teachings.map((teaching, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            <span className="text-gray-700 text-sm">{teaching}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">
                        {language === 'hindi' ? 'मुख्य उपलब्धियां' : 'Key Achievements'}
                      </h4>
                      <ul className="space-y-2">
                        {getCurrentContent().achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Philosophy Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-orange-700 mb-4 border-b border-orange-200 pb-2">
                    {language === 'hindi' ? 'दर्शन' : language === 'english' ? 'Philosophy' : 'दर्शन'}
                  </h3>
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                    <FaQuoteLeft className="text-orange-500 text-2xl mb-2" />
                    <p className="text-gray-700 text-lg italic">
                      {getCurrentContent().philosophy}
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <div className="text-center mt-8">
                  <button
                    onClick={closeModal}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  >
                    {language === 'hindi' ? 'बंद करें' : language === 'english' ? 'Close' : 'बन्द गर्नुहोस्'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutPage;