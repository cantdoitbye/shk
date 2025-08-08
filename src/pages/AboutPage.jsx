import React, { useState } from 'react';

const AboutPage = () => {
  const pdfUrl = "https://raw.githubusercontent.com/0xlax/assets_hfkj/main/pdfabout.pdf";
  const googleDocsViewer = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;

  const [language, setLanguage] = useState('hindi');

  const hindiContent = (
    <>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">
        🌸 हमारे बारे में
      </h2>
      <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
        <p>“वन्दे वाणीविनायकौ”</p>
        <p>हम वाणी और बुद्धि के अधिष्ठाता भगवान श्री गणेश और देवी सरस्वती को सादर वंदन करते हैं।</p>
        <p>अनन्त कोटि ब्रह्माण्डाधिपति, अकारण करुणा के सागर, भक्तों की इच्छा पूर्ति करने वाले प्रभु श्रीराधाकृष्ण की परम कृपा से नेपाल की पुण्यभूमि कालिकोट स्थित शिपखाना नगरपालिका में, 10 सितंबर 1978 को एक दिव्य आत्मा ने जन्म लिया — एक ऐसा जीवन जो आगे चलकर हजारों लोगों का मार्गदर्शन करेगा।</p>
        <p>आपका जन्म एक पवित्र और विद्वत परिवार में हुआ — पिता पं. श्री नारायणदास जी महाराज, जो श्रौतस्मार्त परंपरा में निष्णात और सर्वशास्त्रों में पारंगत थे, एवं माता श्रीमती विष्णादेवी उपाध्याय जी, जो वात्सल्य की मूर्तिमान प्रतीक थीं।</p>
  
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-700 mt-8 mb-4 flex items-center gap-2">
          🌿 प्रारंभिक जीवन और आध्यात्मिक चेतना
        </h2>
        <p>आपने बाल्यावस्था में 6 वर्ष की उम्र तक शिक्षा नेपाल में ही प्राप्त की। इसके पश्चात हरिद्वार, वृन्दावन, वाराणसी, अयोध्या, द्वारका, सत्ताधर, जूनागढ़ जैसे पवित्र स्थलों का भ्रमण करते हुए अपने पूज्य पिताजी के साथ गहन अध्ययन में प्रवृत्त रहे।</p>
        <p>बाल्यकाल से ही स्वाध्याय, जप, तप, अनुष्ठान आदि में आपकी गहरी रुचि रही है। यही साधना भविष्य में आपके जीवन का आधार बनी।</p>
        <p>कुछ वर्षों बाद आपने बड़ोदरा महानगरपालिका क्षेत्र में लगभग 25 से 50 वर्षों तक स्थायी निवास करते हुए आध्यात्मिक अध्ययन एवं सामाजिक सेवा को जीवन का अभिन्न हिस्सा बनाया।</p>
  
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-700 mt-8 mb-4 flex items-center gap-2">
          🕊️ सेवा, भाईचारा और धर्मस्थापना
        </h2>
        <p>जीवन में सुख-दुख के समन्वय के साथ आपने हमेशा धार्मिक एकता, सामाजिक सौहार्द और मानवीय सेवा को प्रमुखता दी। कोई भी व्यक्ति यदि पीड़ा में हो, तो उसकी सहायता करना आपका स्वाभाविक गुण रहा है।</p>
        <p>इसी दौरान आपको परम पूज्य गुरुदेव श्री हरिवदन दवे जी महाराज का सानिध्य प्राप्त हुआ। उन्होंने आपके अंत:करण में आत्मज्ञान, वैराग्य और सनातन धर्म के प्रति प्रेम को जागृत किया।</p>
        <p>आपने आरएसएस (राष्ट्रीय स्वयंसेवक संघ) के अंतर्गत ‘नेपाली संस्कृति परिषद’ नामक संस्था में 10 वर्षों तक गुजरात में प्रमुख भूमिका निभाई। इस दौरान—</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>कोविड महामारी में जनकल्याण हेतु सहायता प्रदान की</li>
          <li>धर्म परिवर्तन के कारणों की गहराई से जांच कर समाधान में योगदान दिया</li>
          <li>नौकरी से अन्यायपूर्वक निकाले गए लोगों के लिए संघर्ष किया</li>
          <li>और सामाजिक विकृति व अराजकता को जड़ से समाप्त करने के लिए कटिबद्ध रहे</li>
        </ul>
  
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-700 mt-8 mb-4 flex items-center gap-2">
          🌺 आध्यात्मिक उत्तराधिकार
        </h2>
        <p>श्रीमद्भागवत, गीता, रामायण, महाभारत, वेद-वेदांत के माध्यम से आपने न केवल सनातन धर्म की प्रतिष्ठा की, बल्कि घर-घर में प्रेम, शांति, भाईचारे और संस्कृति के बीज भी बोए।</p>
        <p>आपने अपनी सुपुत्री अंतर्राष्ट्रीय कथा वाचिका देवी भवानी जी को भी इस आध्यात्मिक पथ पर प्रेरित किया। आज देवी जी भी विश्व स्तर पर दिव्य कार्यों में सक्षम हैं और सनातन संस्कृति का प्रसार कर रही हैं।</p>
        <p>आपके तीन संतान हैं —</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>एक पुत्र, जो इंटरनेशनल बिज़नेस मैन हैं</li>
          <li>एक पुत्री, योग गुरु के रूप में सेवा में संलग्न हैं</li>
          <li>और दूसरी पुत्री, जो कथा वाचिका के रूप में जगत में प्रकाश फैला रही हैं</li>
        </ul>
  
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-700 mt-8 mb-4 flex items-center gap-2">
          ✨ हमारा उद्देश्य
        </h2>
        <p>हमारा उद्देश्य है — हर हृदय में सनातन मूल्यों का जागरण करना, प्रेम, सेवा, और आध्यात्मिक ज्ञान से समाज का उत्थान करना, और संस्कृति तथा संस्कारों को घर-घर तक पहुंचाना।</p>
        <p>यदि आप शांति, मार्गदर्शन, प्रेम या आत्मिक जागृति की खोज में हैं — तो आपका इस परिवार में हार्दिक स्वागत है। आइए, हम सब मिलकर धर्म, एकता और प्रेम के पथ पर आगे बढ़ें।</p>
      </div>
    </>
  );

  const englishContent = (
    <>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">
        🌸 About Our Journey
      </h2>
      <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
        <p>“Vande Vani Vinayakau”</p>
        <p>We begin with humble salutations to the divine embodiments of wisdom and speech — Lord Vinayaka and Goddess Saraswati.</p>
        <p>Under the infinite grace of Lord Shri Radha-Krishna, our spiritual journey began in the sacred land of Kalikot, Nepal. On September 10, 1978, in Shipkhana Municipality, a soul destined to guide thousands was born into the revered lineage of Pandit Shri Narayan Das Ji Maharaj and Mata Shri Vishnadevi Upadhyay Ji.</p>
  
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-700 mt-8 mb-4 flex items-center gap-2">
          🌿 Early Years & Spiritual Awakening
        </h2>
        <p>From a young age, our Gurudev was immersed in learning, meditation, and spiritual discipline. After completing his early education in Nepal, he journeyed through Haridwar, Vrindavan, Varanasi, Ayodhya, Dwarka, and other sacred centers across Gujarat under the loving guidance of his father.</p>
        <p>His life has always been rooted in tapasya (austerity), self-study, and service. For over 25 years, he resided in Vadodara, Gujarat, devoting himself to spiritual study and social upliftment.</p>
  
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-700 mt-8 mb-4 flex items-center gap-2">
          🕊️ Service, Brotherhood & Dharma
        </h2>
        <p>With a deep commitment to Sanatana Dharma and human unity, Gurudev’s work transcended rituals. His message: serve humanity, promote harmony, and awaken inner divinity.</p>
        <p>As a senior member of the Nepali Sanskriti Parishad under RSS, he played a key role in Gujarat for over a decade —</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Guided communities during the Covid crisis</li>
          <li>Resisted unjust religious conversions</li>
          <li>Fought for workers wrongfully dismissed</li>
          <li>Worked against social evils at the root level</li>
        </ul>
  
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-700 mt-8 mb-4 flex items-center gap-2">
          🌺 Legacy of Spiritual Wisdom
        </h2>
        <p>Through the Bhagavad Gita, Ramayana, Mahabharata, and Vedas, Gurudev sowed the seeds of love, peace, and Sanatana values in every home.</p>
        <p>He inspired his daughter, Devi Bhavani Ji — an international spiritual orator — to continue this divine mission across the globe.</p>
        <p>His family exemplifies spiritual and worldly success:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>One daughter is a Yoga Guru</li>
          <li>One son is an international businessman</li>
          <li>One daughter is Devi Bhavani Ji, guiding seekers worldwide</li>
        </ul>
  
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-700 mt-8 mb-4 flex items-center gap-2">
          ✨ Our Vision
        </h2>
        <p>To awaken Sanatana values in every heart, heal through ancient wisdom, and create a world where spirituality is not just practiced — but lived.</p>
        <p>Whether you seek guidance, peace, or transformation — you are welcome here. Together, let us walk the path of dharma, love, and unity.</p>
      </div>
    </>
  );

  const nepaliContent = (
    <>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">
        🌸 हाम्रो बारेमा
      </h2>
      <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
        <p>“वन्दे वाणीविनायकौ”</p>
        <p>हामी वाणी र बुद्धिका अधिष्ठाता भगवान् श्री गणेश र देवी सरस्वतीलाई सादर वन्दन गर्दछौं।</p>
        <p>अनन्त ब्रह्माण्डका अधिपति, अकारण करुणाका सागर, भक्तहरूको इच्छा पूरा गर्ने प्रभु श्रीराधाकृष्णको परम कृपाले नेपालको पुण्यभूमि कालिकोटस्थित शिपखाना नगरपालिकामा, १० सेप्टेम्बर १९७८ मा एक दिव्य आत्माको जन्म भयो — जसको जीवनले हजारौंलाई मार्गदर्शन गर्नेछ।</p>
        <p>तपाईंको जन्म एक पवित्र र विद्वान परिवारमा भयो — पिता पं. श्री नारायणदास जी महाराज, जो श्रौतस्मार्त परम्परामा निपुण र सर्वशास्त्रमा पारंगत हुनुहुन्थ्यो, र माता श्रीमती विष्णादेवी उपाध्याय जी, जो वात्सल्यको मूर्तिमान प्रतीक हुनुहुन्थ्यो।</p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-700 mt-8 mb-4 flex items-center gap-2">
          🌿 प्रारम्भिक जीवन र आध्यात्मिक चेतना
        </h2>
        <p>बाल्यकालमा ६ वर्षको उमेरसम्म शिक्षा नेपालमै प्राप्त गर्नुभयो। त्यसपछि हरिद्वार, वृन्दावन, वाराणसी, अयोध्या, द्वारका, सत्ताधर, जूनागढ जस्ता पवित्र स्थलहरूको भ्रमण गर्दै पूज्य पितासँग गहिरो अध्ययनमा लाग्नुभयो।</p>
        <p>बाल्यकालदेखि नै स्वाध्याय, जप, तप, अनुष्ठान आदि कार्यमा गहिरो रुचि रह्यो। यही साधना भविष्यमा जीवनको आधार बन्यो।</p>
        <p>केही वर्षपछि बडोदरा महानगरपालिका क्षेत्रमा लगभग २५ देखि ५० वर्षसम्म स्थायी बसोबास गर्दै आध्यात्मिक अध्ययन र सामाजिक सेवामा जीवन समर्पित गर्नुभयो।</p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-700 mt-8 mb-4 flex items-center gap-2">
          🕊️ सेवा, भाइचारा र धर्मस्थापना
        </h2>
        <p>जीवनमा सुख-दुःखको समन्वय गर्दै सधैं धार्मिक एकता, सामाजिक सौहार्द र मानवीय सेवामा जोड दिनुभयो। कुनै पनि व्यक्ति पीडामा भएमा सहायता गर्नु तपाईंको स्वाभाविक गुण रह्यो।</p>
        <p>यसै क्रममा परम पूज्य गुरुदेव श्री हरिवदन दवे जी महाराजको सान्निध्य प्राप्त गर्नुभयो। उहाँले तपाईंको अन्तःकरणमा आत्मज्ञान, वैराग्य र सनातन धर्मप्रति प्रेम जागृत गर्नुभयो।</p>
        <p>आरएसएस (राष्ट्रीय स्वयंसेवक संघ) अन्तर्गत ‘नेपाली संस्कृति परिषद्’ संस्थामा १० वर्षसम्म गुजरातमा प्रमुख भूमिका निर्वाह गर्नुभयो। यस अवधिमा—</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>कोभिड महामारीमा जनकल्याणका लागि सहायता गर्नुभयो</li>
          <li>धर्म परिवर्तनका कारणहरूको गहिरो अध्ययन गरी समाधानमा योगदान गर्नुभयो</li>
          <li>न्यायविहीन रूपमा जागिरबाट निकालिएका व्यक्तिहरूको पक्षमा संघर्ष गर्नुभयो</li>
          <li>र सामाजिक विकृति तथा अराजकता अन्त्य गर्न कटिबद्ध रहनुभयो</li>
        </ul>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-700 mt-8 mb-4 flex items-center gap-2">
          🌺 आध्यात्मिक उत्तराधिकार
        </h2>
        <p>श्रीमद्भागवत, गीता, रामायण, महाभारत, वेद-उपनिषद् मार्फत सनातन धर्मको प्रतिष्ठा मात्र होइन, घर-घरमा प्रेम, शान्ति, भाइचारा र संस्कृतिका बीज रोप्नुभयो।</p>
        <p>आफ्नो सुपुत्री अन्तर्राष्ट्रिय कथा वाचिका देवी भवानी जीलाई पनि यस आध्यात्मिक मार्गमा प्रेरित गर्नुभयो। आज देवी जी पनि विश्वभर दिव्य कार्यमा संलग्न हुनुहुन्छ र सनातन संस्कृतिको प्रचार गर्दै हुनुहुन्छ।</p>
        <p>तपाईंका तीन सन्तान छन् —</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>एक छोरा, जो अन्तर्राष्ट्रिय व्यवसायी हुनुहुन्छ</li>
          <li>एक छोरी, योग गुरुको रूपमा सेवा गर्दै हुनुहुन्छ</li>
          <li>र अर्की छोरी, कथा वाचिका भएर संसारमा प्रकाश फैलाउँदै हुनुहुन्छ</li>
        </ul>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-700 mt-8 mb-4 flex items-center gap-2">
          ✨ हाम्रो उद्देश्य
        </h2>
        <p>हाम्रो उद्देश्य — प्रत्येक हृदयमा सनातन मूल्यहरूको जागरण, प्रेम, सेवा र आध्यात्मिक ज्ञानबाट समाजको उत्थान, र संस्कृति तथा संस्कारलाई घर-घरमा पुर्‍याउनु हो।</p>
        <p>यदि तपाईं शान्ति, मार्गदर्शन, प्रेम वा आत्मिक जागरणको खोजीमा हुनुहुन्छ भने — तपाईंलाई यस परिवारमा हार्दिक स्वागत छ। आउनुहोस्, हामी सबै मिलेर धर्म, एकता र प्रेमको मार्गमा अघि बढौं।</p>
      </div>
    </>
  );

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

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
            About Harikripa Foundation
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {/* Left Column - Language Toggle & Content */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 relative overflow-hidden transition-all duration-500 ease-in-out">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(getNextLanguage(language))}
              className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium px-4 py-1 rounded-full transition-colors duration-300"
            >
              {getToggleLabel(language)}
            </button>

            <div className="transition-all duration-500 ease-in-out">
              {language === 'hindi'
                ? hindiContent
                : language === 'english'
                ? englishContent
                : nepaliContent}
            </div>
          </div>

          {/* Right Column - PDF Viewer */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">
              Detailed Information
            </h2>
            <div className="relative w-full overflow-hidden rounded-lg">
              <div className="relative w-full" style={{ paddingTop: '133.33%' }}>
                <iframe
                  src={googleDocsViewer}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  title="About PDF"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden mt-6 bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2 px-4 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600 transition-colors duration-200"
            >
              View Full PDF
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="py-2 px-4 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors duration-200"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;