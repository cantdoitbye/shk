import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Images, Play, Pause } from 'lucide-react';

// Import images from your assets
import img1 from '../assets/gallery/img1.jpg';
import img2 from '../assets/gallery/img2.jpg';
import img3 from '../assets/gallery/img3.jpg';
import img4 from '../assets/gallery/img4.jpg';
import img5 from '../assets/gallery/img5.jpg';
import img6 from '../assets/gallery/img6.jpg';
import img7 from '../assets/gallery/img7.jpg';
import img8 from '../assets/gallery/img8.jpg';
import img9 from '../assets/gallery/img9.jpg';
import img10 from '../assets/gallery/img10.jpg';
import img11 from '../assets/gallery/img11.jpg';
import img12 from '../assets/gallery/img12.jpg';
import img13 from '../assets/gallery/img13.jpg';
import img14 from '../assets/gallery/img14.jpg';
import img15 from '../assets/gallery/img15.jpg';
import img16 from '../assets/gallery/img16.jpg';
import img17 from '../assets/gallery/img17.jpg';
import img18 from '../assets/gallery/img18.jpg';
import img19 from '../assets/gallery/img19.jpg';
import img20 from '../assets/gallery/img20.jpg';
import img21 from '../assets/gallery/img21.jpg';
import img22 from '../assets/gallery/img22.jpg';
import img23 from '../assets/gallery/img23.jpg';
import img24 from '../assets/gallery/img24.jpg';
import img25 from '../assets/gallery/img25.jpg';
import img26 from '../assets/gallery/img26.jpg';



const ImpactGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Gallery data based on your foundation's actual work from PDF
  const galleryData = {
    eldercare: {
      title: "वृद्धाश्रम सेवा कार्यक्रम",
      titleEnglish: "Elder Care Service Program",
      description: "श्री हरिकृपा फाउंडेशन के द्वारा वृद्धाश्रम के माता पिता को भगवन्नाम के साथ जोड़ने का एक कदम इस कार्यक्रम में फाउंडेशन ने वृद्ध माता पिताओं को रुद्राक्ष के माला, तुलसी जपमाला, तुलसी कंठी एवम् गौमुखी (मालाझोली) प्रदान किया।",
      mainImage: img1,
      images: [
        {
          url: img1,
          title: "वृद्धाश्रम में भगवन्नाम संस्कार",
          description: "वृद्ध माता-पिता को भगवन्नाम के साथ जोड़ने का पावन कार्यक्रम"
        }
      ]
    },
    blooddonation: {
      title: "थैलेसीमिया रक्तदान कार्यक्रम", 
      titleEnglish: "Thalassemia Blood Donation Program",
      description: "श्री हरिकृपा फाउंडेशन के द्वारा थैलेसीमिया पीड़ित बच्चों के लिए रक्तदान कार्यक्रम आयोजना किया गया। जिसमें श्री हरिकृपा फाउंडेशन के सदस्य लगायत अन्य अधिक से अधिक सज्जनों ने भाग लिया और अपना बहुमूल्य रक्तदान किया। इस कार्यक्रम से श्री हरिकृपा फाउंडेशन ने समाज को यह सन्देश दिया की 'वसुधैव कुटुम्बकम्' अर्थात् सम्पूर्ण विश्ववासी जीव हमारे हैं, सभी हमारे अपने हैं और अपनो का ख्याल रखना यह हमारा कर्तव्य है।",
      mainImage: img3,
      images: [
        {
          url: img2,
          title: "रक्तदान शिविर का आयोजन",
          description: "थैलेसीमिया पीड़ित बच्चों के लिए आयोजित रक्तदान शिविर"
        },
        {
          url: img3,
          title: "स्वैच्छिक रक्तदाता",
          description: "फाउंडेशन के सदस्यों द्वारा स्वैच्छिक रक्तदान"
        },
        {
          url: img4,
          title: "वसुधैव कुटुम्बकम् का संदेश",
          description: "सम्पूर्ण विश्व को अपना परिवार मानने का संदेश"
        },
        {
          url: img5,
          title: "सामुदायिक सेवा भावना",
          description: "अपनों का ख्याल रखना हमारा कर्तव्य है - इस भावना से प्रेरित सेवा"
        },
        {
          url: img6,
          title: "बच्चों के लिए जीवनदान",
          description: "थैलेसीमिया से पीड़ित बच्चों के लिए जीवनदायी रक्तदान"
        },
        {
          url: img7,
          title: "बच्चों के लिए जीवनदान",
          description: "थैलेसीमिया से पीड़ित बच्चों के लिए जीवनदायी रक्तदान"
        },
        {
          url: img8,
          title: "बच्चों के लिए जीवनदान",
          description: "थैलेसीमिया से पीड़ित बच्चों के लिए जीवनदायी रक्तदान"
        },
        {
          url: img9,
          title: "बच्चों के लिए जीवनदान",
          description: "थैलेसीमिया से पीड़ित बच्चों के लिए जीवनदायी रक्तदान"
        },
        {
          url: img10,
          title: "बच्चों के लिए जीवनदान",
          description: "थैलेसीमिया से पीड़ित बच्चों के लिए जीवनदायी रक्तदान"
        },
      ]
    },
    kanyapujan: {
      title: "कन्या पूजन महोत्सव",
      titleEnglish: "Kanya Pujan Festival", 
      description: "श्री हरिकृपा फाउंडेशन द्वारा आयोजित कन्या पूजन महोत्सव जो शरद पूर्णिमा के दिन में सभी कन्याओं का पूजन करके उनको भोजन पवाकर के और उनको स्कूल बैग, टिफिन, बॉटल इत्यादि और श्रृंगार का सामान प्रदान करके मनाया गया। इस कार्यक्रम से श्री हरिकृपा फाउंडेशन विश्वभर के सभी भक्तों को यह संदेश देना चाहता है की हमारे सनातन धर्म में कन्या को सदैव पूजनीय बताया गया है। 'यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः' अर्थात् जहां नारी की पूजा की जाती है वहीं देवता लोग भी प्रसन्न होकर विचरते हैं।",
      mainImage: img12,
      images: [
        {
          url: img11,
          title: "",
          description: ""
        },
        {
          url: img12,
          title: "",
          description: ""
        },
        {
          url: img13,
          title: "",
          description: ""
        },
        {
          url: img14,
          title: "",
          description: ""
        },
        {
          url: img15,
          title: "",
          description: ""
        }
      ]
    },
    gauseva: {
      title: "गौसेवा कार्यक्रम",
      titleEnglish: "Cow Service Program",
      description: "श्री हरिकृपा फाउंडेशन द्वारा गौसेवा 'गावो विश्वस्य मातरः' गाय सम्पूर्ण विश्व की ही माता है और गौ माता के प्रत्येक अंग में देवी देवताओं का वास होता है इसीलिए उनकी सेवा ही सर्वोत्तम सेवा है। गौ माता की सेवा के माध्यम से समाज में धार्मिक चेतना का प्रसार।",
      mainImage: img16,
      images: [
        {
          url: img16,
          title: "गौ माता की देखभाल",
          description: "गौ माता के प्रत्येक अंग में देवी देवताओं का वास"
        },
        {
          url: img17,
          title: "सर्वोत्तम सेवा",
          description: "गौ माता की सेवा ही सर्वोत्तम सेवा का रूप"
        },
        {
          url: img18,
          title: "धार्मिक चेतना प्रसार",
          description: "गौसेवा के माध्यम से समाज में धार्मिक चेतना का प्रसार"
        }
      ]
    },
    shivling: {
      title: "पार्थिव शिवलिंग पूजन महोत्सव",
      titleEnglish: "Parthiv Shivling Worship Festival",
      description: "श्री हरिकृपा फाउंडेशन द्वारा आयोजित पार्थिव शिवलिंग पूजन महोत्सव जो की इस कार्यक्रम में सभी गांव वासियों को सभी भक्तजनों को पार्थिव शिवलिंग का विधि विधान से निःशुल्क पूजन कराने के साथ साथ इसका महत्व भी बताया गया। पार्थिव शिवलिंग पूजन क्यों किया जाता है? पार्थिव शिवलिंग की पूजा विधि क्या है? और यह करने से हमारे जीवन में कैसा परिवर्तन आता है? इत्यादि.. इसमें सभी भक्तों ने भाग लिया और धर्म का प्रचार प्रसार हो तथा सनातन धर्म का जय घोष हो इसलिए यह कार्यक्रम किया गया था।",
      mainImage: img20,
      images: [
        {
          url: img21,
          title: "",
          description: ""
        },
        {
          url: img22,
          title: "",
          description: ""
        },
        {
          url: img23,
          title: "",
          description: ""
        },
        {
          url: img24,
          title: "",
          description: ""
        },
        {
          url: img25,
          title: "",
          description: ""
        },
        {
          url: img26,
          title: "",
          description: ""
        }
      ]
    }
  };

  const openGallery = (categoryKey) => {
    setSelectedCategory(categoryKey);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    setIsPlaying(false);
  };

  const closeGallery = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
    setIsPlaying(false);
  };

  const nextImage = () => {
    if (selectedCategory) {
      const images = galleryData[selectedCategory].images;
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedCategory) {
      const images = galleryData[selectedCategory].images;
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto play functionality
  React.useEffect(() => {
    let interval;
    if (isPlaying && isModalOpen && selectedCategory) {
      interval = setInterval(() => {
        nextImage();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isModalOpen, selectedCategory, currentImageIndex]);

  return (
    <div className="w-full bg-gradient-to-br from-orange-50 to-amber-50 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
          हमारी सेवा में कार्य
        </h2>
        <p className="text-xl text-orange-700 mb-2">Our Impact in Action</p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
          श्री हरिकृपा फाउंडेशन द्वारा आयोजित विभिन्न सेवा कार्यक्रमों के माध्यम से समाज की भलाई
        </p>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Object.entries(galleryData).map(([key, category]) => (
            <div
              key={key}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group"
              onClick={() => openGallery(key)}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.mainImage}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-orange-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Images className="w-12 h-12 mx-auto mb-3" />
                    <p className="text-lg font-semibold mb-1">
                      {category.images.length} तस्वीरें
                    </p>
                    <p className="text-sm">गैलरी देखने के लिए क्लिक करें</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {category.images.length} Images
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-orange-200 text-sm font-medium">
                    {category.titleEnglish}
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="min-h-24">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {category.description.length > 150 
                        ? `${category.description}` 
                        : category.description}
                    </p>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                  <Images className="w-4 h-4" />
                  गैलरी देखें / View Gallery
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {isModalOpen && selectedCategory && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold">
                {galleryData[selectedCategory].title}
              </h3>
              <p className="text-sm opacity-90">
                {galleryData[selectedCategory].titleEnglish}
              </p>
              <p className="text-xs opacity-75 mt-1">
                {currentImageIndex + 1} of {galleryData[selectedCategory].images.length}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={toggleAutoplay}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                title={isPlaying ? "रोकें" : "चलाएं"}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button
                onClick={closeGallery}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                title="बंद करें"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Main Image Area */}
          <div className="flex-1 flex items-center justify-center relative p-8">
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-orange-600/80 hover:bg-orange-600 text-white p-3 rounded-full transition-colors z-10"
              title="पिछली तस्वीर"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-full flex flex-col items-center">
              <img
                src={galleryData[selectedCategory].images[currentImageIndex].url}
                alt={galleryData[selectedCategory].images[currentImageIndex].title}
                className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image Info */}
              <div className="text-center text-white mt-6 max-w-2xl">
                <h4 className="text-xl font-bold mb-2">
                  {galleryData[selectedCategory].images[currentImageIndex].title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {galleryData[selectedCategory].images[currentImageIndex].description}
                </p>
              </div>
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-600/80 hover:bg-orange-600 text-white p-3 rounded-full transition-colors z-10"
              title="अगली तस्वीर"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnail Strip */}
          <div className="bg-black/50 p-4 overflow-x-auto">
            <div className="flex gap-3 justify-center min-w-max">
              {galleryData[selectedCategory].images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden transition-all ${
                    index === currentImageIndex
                      ? 'ring-3 ring-orange-500 opacity-100'
                      : 'opacity-60 hover:opacity-80'
                  }`}
                  title={image.title}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImpactGallery;