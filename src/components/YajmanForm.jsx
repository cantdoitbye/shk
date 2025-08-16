 import React, { useState } from "react";
import { X, Info, Phone, Mail, MapPin, Heart, User, Home, Calendar, CreditCard } from "lucide-react";
const YajmanForm = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    fatherName: "",
    spouseName: "",
    childrenNames: "",
    
    // Spiritual Information
    familyDeity: "",
    gotraNakshatra: "",
    
    // Address Information
    country: "",
    state: "",
    district: "",
    fullAddress: "",
    
    // Contact Details
    contactNumber: "",
    email: "",
    
    // Purpose and Type
    participationPurpose: "",
    ancestorName: "",
    ancestorRelation: "",
    yajmanType: "",
    
    // Dakshina Details
    totalAmount: "",
    advanceAmount: "",
    balanceAmount: "",
    amountInWords: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [showModal, setShowModal] = useState(false);
const [selectedYajmanDetails, setSelectedYajmanDetails] = useState(null);
const [paymentAmount, setPaymentAmount] = useState(0);
const [isPaymentRequired, setIsPaymentRequired] = useState(false);
  // Yajman Types with correct Hindi names and amounts from your image
const yajmanTypes = [
  {
    id: "sadharan_data",
    name: "साधारण दान दाता",
    englishName: "General Donor",
    amount: "5,111/-",
    details: "आपश्री अष्टोत्तरशत भागवत महायज्ञमें अपने परिवार के कल्याणार्थ सर्वकार्य सिद्धि पूजा ऑनलाइन कर सकते हैं। इस से आपको अपनी मनोकांक्षा सिद्धि का फल प्राप्त होगा। आपको गंगाजल एवं यज्ञ का प्रसाद आपके निवास स्थान पर पहुंचा दिया जायगा और आपको श्री हरिकृपा फाउंडेशन की सामान्य सदस्यता प्रमाणपत्र प्रदान किया जायेगा।",
    benefits: []
  },
  {
    id: "varisth_data",
    name: "विशिष्ट दान दाता",
    englishName: "Senior Donor",
    amount: "11,111/-",
    details: "आपश्री अष्टोत्तरशत भागवत महायज्ञमें अपने परिवार के कल्याणार्थ सर्वकार्य सिद्धि पूजा के साथ ज्योतिषशास्त्र अनुसार कुण्डली में उपस्थित मूल, ज्येष्ठा, कालसर्प, जैसे किसीभी प्रकार के अनिष्ट ग्रहदोष ऑनलाइन शान्त कर सकते हैं। इस से आपकी अपनी मनोकांक्षा सिद्धि का फल प्राप्त होगा। आपको गंगाजल एवं यज्ञ का प्रसाद एवं सिद्ध की हुई रुद्राक्षमाला आपके निवास स्थान पर पहुंचा दिया जायेगा और आपको श्री हरिकृपा फाउन्डेशन की विशिष्ट सदस्यता प्रमाणपत्र प्रदान किया जायेगा।",
    benefits: []
  },
  {
    id: "yagya_yajman",
    name: "यज्ञयजमान",
    englishName: "Yagna Yajman",
    amount: "31,131/-",
    details: "आपश्री अष्टोत्तरशत भागवत महायज्ञमें अपने परिवार के कल्याणार्थ सर्वकार्य सिद्धि पूजा के साथ दान दाताश्री के दो व्यक्तियों को सात दिन आवास और भोजन की व्यवस्था की जायगी। दाताश्री को पूज्य श्रीव्यासजी महाराज अथवा संस्था के संस्थापक के कर कमलों से सम्मान पत्र द्वारा सम्मानित किया जायेगा। एवं आपको गंगाजल यज्ञ का प्रसाद एवं सिद्ध की हुई रुद्राक्षमाला तुलसी माला (कण्ठी) आपको प्रदान की जायेगी। और आपको श्री हरिकृपा फाउन्डेशन की प्रबुद्ध सदस्यता प्रमाणपत्र प्रदान किया जायेगा।",
    benefits: []
  },
  {
    id: "mool_yajman",
    name: "मूल यज्ञ यजमान",
    englishName: "Root Yajman",
    amount: "51,151/-",
    details: "आपश्री को अष्टोत्तरशत भागवत महायज्ञमें अपने परिवार को उपयुक्त सुविधा के साथ रूम में दो-तीन व्यक्तियों को आवास और भोजन की फाउन्डेशन द्वारा उचित व्यवस्था की जायेगी। ऐसे दाताश्री को सामुहिक पंचवाजा और स्वस्तिवाचन पूर्वक यज्ञ मण्डप में प्रवेश कराया जायेगा एवं चतुःश्लोकी भागवत महामन्त्र द्वारा गंगाजल से अभिषेक कराया जायेगा। सात दिन तक एक आचार्य ब्राह्मण आपके साथ पूजा में संलग्न रहेंगे। यज्ञ मण्डप में आप के पितृजों की फोटो भी रखी जावेगी। श्रीमद्भागवत के 18000 श्लोक पाठ पारायण कर के 21 पिण्डों का उद्धार होगा और भावी पिढी का कल्याण होगा। आप के परिवार और आपश्री के आरोग्य के लिये 11000 महामृत्युञ्जय जाप किया जायेगा। पूरा एक भागवत सप्ताह का फल आपश्री को प्राप्त होगा। योग शिरोमणी प.पूज्य स्वामी रामदेवजी महाराज अथवा उच्च पदासीन सन्तशिरोमणी, प.पूज्य व्यासजी महाराज और संस्था के संस्थापक के कर-कमलों से विशेष सम्मान पत्र द्वारा सम्मानित किया जायेगा। आपको गंगाजल यज्ञ का प्रसाद एवं सिद्ध की हुई रुद्राक्षमाला तुलसी माला (कण्ठी) सहित सात दिन सिद्ध करके स्फटिक श्रीयंत्र आपश्रीको प्रदान किया जायेगा और आपश्रीको श्री हरिकृपा फाउन्डेशन की संस्थापक सदस्यताका प्रमाणपत्र से सम्मानित किया जायेगा। आपश्री और आपकी धर्मपत्नी का नाम श्रीधाम वृंदावन आश्रम की सत्संग भवन में शिलालेख सुवर्ण अक्षरमें लीखा जाएगा जिससे आपकी आनेवाली हर पीढी आपका गर्व के साथ सदा स्मरण करेंगे। जिससे आपश्री को पुण्य का लाभ प्राप्त होगा।",
    benefits: []
  },
  {
    id: "vishisht_data",
    name: "विशिष्ट दानदाता",
    englishName: "Special Donor",
    amount: "1,11,111/-",
    details: "आपश्री अष्टोत्तरशत भागवत महायज्ञमें उपर लिखे सभी सुविधा के साथ 3-5 व्यक्तियों की संस्था द्वार आवास एवं भोजनकी व्यवस्था की जायेगी। एक आचार्य ब्राह्मण आपके साथ पूजा में रहेंगे। आपश्री को पंचवाजा एवं 11 ब्राह्मण द्वारा स्वस्तिवाचन के साथ यज्ञ मण्डप में प्रवेश कराया जायेगा। पद्मावृत से अभिषेक कराया जायेगा। इसके अलावा आपके और आपके गृहपरिजन के दीर्घायु एवं निरोगिता के लिये महामृत्युञ्जय मंत्र से सवालाख जप किया जायेगा। हवन, तर्पण, मार्जन किया जायेगा। इस प्रकार के दानवीर के परम पूज्य श्रीमद्जगद्गुरु शङ्कुराचार्यजी महाराज, योग शिरोमणी प.पूज्य स्वामी श्री रामदेवजी महाराज, आयुर्वेद शिरोमणी आचार्य बालकृष्णजी महाराज, प.पूज्य कथा व्यासजी एवं संस्थापक तथा विशिष्ट व्यक्ति द्वारा उच्च सम्मान पत्र से सम्मानित किया जायेगा। एवं आपको गंगाजल यज्ञ का प्रसाद एवं सिद्ध की हुई रुद्राक्षमाला तुलसी माला (कण्ठी) सहित सात दिन सिद्ध करके स्फटिक श्रीयंत्र और पारद शिवलिङ्ग अथवा लड्डु गोपाल आपको प्रदान किया जायेगा और आपको श्री हरिकृपा फाउन्डेशन की और से आजीवन सदस्यता का प्रमाणपत्र से सम्मानित किया जायेगा। आपश्री और आपकी धर्मपत्नी का नाम श्रीधाम वृंदावन आश्रम के यज्ञमण्डप के शिलालेख पर सुवर्ण अक्षरमें लीखा जाएगा जिससे आपकी आनेवाली हर पीढी आपका गर्व के साथ स्मरण करेंगे। आपश्री को महापुण्य का लाभ प्राप्त करसकेंगे।",
    benefits: []
  },
  {
    id: "sahyogi_yajman",
    name: "सहयोगी मुख्य आयोजक",
    englishName: "Co-Main Yajman",
    amount: "2,22,222/- से 5,00,151/- तक",
    details: "आपश्री अष्टोत्तर शत भागवत महायज्ञमें उपयुक्त सभी सुविधा के साथ 5-7 व्यक्तियों की आवास-भोजन की व्यवस्था संस्था द्वारा की जायेगी। 2 आचार्य ब्राह्मण आपके साथ पूजा में रहेंगे। आपश्री को पंचवाजा एवं कन्या द्वारा पुष्पवृष्टि करते हुए 21 ब्राह्मण द्वारा स्वस्तिवाचन के साथ यज्ञ मण्डप में प्रवेश कराया जायेगा और गोपाल सहस्रनाम महामन्त्र द्वारा पंचगव्य और पद्मावृत से अभिषेक कराया जायेगा। इसके अलावा आपके और आपके गृहपरिजन के दीर्घायु एवं निरोगिता के लिये महामृत्युञ्जय मंत्र के सवालाख जप किया जायेगा। हवन, तर्पण, मार्जन किया जायेगा। इस प्रकार के दानवीर के परम पूज्य श्रीमद्जगद्गुरु शङ्कुराचार्यजी महाराज, योग शिरोमणी प.पूज्य स्वामी श्री रामदेवजी महाराज, आयुर्वेद शिरोमणी आचार्य बालकृष्णजी महाराज, प.पूज्य कथा व्यासजी, उत्तरप्रदेश के मानीनीय मुख्य मंत्री श्री, एवं संस्थापक लगावत विशिष्ट व्यक्ति द्वारा उच्च सम्मान पत्र द्वारा सम्मानित किया जायेगा। आपको गंगाजल यज्ञ का प्रसाद एवं सिद्ध की हुई रुद्राक्षमाला तुलसी माला (कण्ठी) सहित सात दिन सिद्ध करके स्फटिक श्रीयंत्र और पारद शिवलिङ्ग अथवा लड्डु गोपाल आपको प्रदान किया जायेगा और आपको श्री हरिकृपा फाउन्डेशन की और से यशस्कर सदस्यता का प्रमाणपत्र के साथ सम्मानित किया जायेगा। आपश्रीका नाम परिवार सहित श्रीधाम वृंदावन आश्रम के कीर्तिस्तंभ पर सुवर्ण अक्षरमें लीखा जाएगा जिससे आपकी आनेवाली हर पीढी गर्व के साथ आपका स्मरण करेंगे। जिससे आपश्री महापुण्य का लाभ प्राप्त करसकेंगे।",
    benefits: []
  },
  {
    id: "pramukh_yajman",
    name: "प्रमुख आयोजक",
    englishName: "Chief Yajman",
    amount: "5,55,555/- से 11,11,111/- तक",
    details: "दानदाता भक्तजन अष्टोत्तरशत भागवत महायज्ञमें उपयुक्त सभी सुविधा के साथ आवास भोजन की व्यवस्था संस्था द्वारा की जायेगी। 3 से 5 आचार्य ब्राह्मण आपके साथ पूजा में रहेंगे। आपश्री को पंचवाजा एवं कन्या द्वारा पुष्पवृष्टि करते हुए 31 ब्राह्मण द्वारा स्वस्तिवाचन के साथ यज्ञ मण्डप में प्रवेश कराया जायेगा और पूरुष सूक्तम् और गोपाल सहस्रनाम महामन्त्र द्वारा दशविध स्नान कराया जायेगा। इसके अलावा आपके और आपके गृहपरिजन के दीर्घायु पारिवारिक समृद्धि एवं निरोगिता के लिये महामृत्युञ्जय मंत्र से सवालाख जप किया जायेगा। हवन, तर्पण, मार्जन किया जायेगा। इस प्रकार के दानवीर को परम पूज्य श्रीमद्जगद्गुरु शङ्कुराचार्यजी महाराज, योगशिरोमणी प.पूज्य स्वामी श्रीरामदेवजी महाराज, आयुर्वेद शिरोमणी आचार्य बालकृष्णजी महाराज, प.पूज्य कथा व्यासजी, उत्तरप्रदेश के मानीय मुख्य मंत्री श्री द्वारा उच्च सम्मान पत्र से सम्मानित किया जायेगा। एवं आपको गंगाजल यज्ञ का प्रसाद एवं सिद्ध की हुई रुद्राक्षमाला तुलसी माला (कण्ठी) सहित सात दिन सिद्ध किया हुआ स्फटिक श्रीयंत्र, संपूर्ण वास्तु यन्त्र, सर्वकार्य सिद्धि महायन्त्र और पारद शिवलिङ्ग अथवा लड्डु गोपाल प्रदान किया जायेगा और आपको श्री हरिकृपा फाउन्डेशन की मानार्थ सदस्यता का प्रमाणपत्र से सम्मानित किया जायेगा। आपश्रीकी तीन पुरुषों का नाम श्रीधामवृंदावन आश्रम के कीर्तिस्तंभ पर सुवर्ण अक्षरमें लीखा जाएगा। आपकी हर पीढी आपका गर्व के साथ स्मरण करेंगे। आपश्री महापुण्य का लाभ प्राप्त करसकेंगे।",
    benefits: []
  }
];


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-fill amount and calculate 50% advance when yajman type is selected
    if (name === 'yajmanType') {
      const selectedType = yajmanTypes.find(type => type.id === value);
      if (selectedType) {
        const totalAmountNum = parseFloat(selectedType.amount.replace(/[,/-]/g, ''));
        const advanceAmountNum = Math.round(totalAmountNum * 0.5); // 50% advance
        const balanceAmountNum = totalAmountNum - advanceAmountNum;
        
        setFormData(prev => ({
          ...prev,
          totalAmount: totalAmountNum.toString(),
          advanceAmount: advanceAmountNum.toString(),
          balanceAmount: balanceAmountNum.toString()
        }));
        
        setPaymentAmount(advanceAmountNum);
        setIsPaymentRequired(true);
      }
    }
  };

  // Razorpay Payment Integration
const initiatePayment = async () => {
  if (!formData.yajmanType || !formData.name || !formData.contactNumber || !formData.email) {
    setStatus({
      type: "error",
      message: "कृपया भुगतान से पहले सभी आवश्यक फ़ील्ड भरें / Please fill all required fields before payment"
    });
    return;
  }

  console.log('Starting payment process...');
  
  // Wait for Razorpay to load if not already loaded
  if (!window.Razorpay) {
    console.log('Razorpay not loaded, waiting...');
    
    // Try to load script again
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    document.head.appendChild(script);
    
    await new Promise(resolve => {
      script.onload = resolve;
      script.onerror = resolve;
    });
    
    // Wait a bit more for initialization
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  if (!window.Razorpay) {
    setStatus({
      type: "error",
      message: "भुगतान गेटवे लोड नहीं हो सका / Payment gateway could not be loaded. Please refresh the page."
    });
    return;
  }

  console.log('Razorpay is available, creating payment...');

  const options = {
    key: 'rzp_test_1DP5mmOlF5G5ag', // Replace with your Razorpay Key ID
    amount: paymentAmount * 100,
    currency: 'INR',
    name: 'श्री हरिकृपा फाउंडेशन',
    description: `${yajmanTypes.find(type => type.id === formData.yajmanType)?.name} - अग्रिम भुगतान`,
    handler: function (response) {
      console.log('Payment successful:', response);
      setFormData(prev => ({
        ...prev,
        paymentId: response.razorpay_payment_id,
        paymentStatus: "completed"
      }));
      
      setStatus({
        type: "success",
        message: "भुगतान सफल! अब फॉर्म जमा करें। / Payment successful! Now submit the form."
      });
      
      document.getElementById('submit-section')?.scrollIntoView({ behavior: 'smooth' });
    },
    prefill: {
      name: formData.name,
      email: formData.email,
      contact: formData.contactNumber
    },
    theme: {
      color: '#ea580c'
    },
    modal: {
      ondismiss: function() {
        console.log('Payment dismissed');
        setStatus({
          type: "error",
          message: "भुगतान रद्द किया गया / Payment cancelled"
        });
      }
    }
  };

  try {
    const rzp = new window.Razorpay(options);
    rzp.open();
    console.log('Payment modal opened');
  } catch (error) {
    console.error('Error opening Razorpay:', error);
    setStatus({
      type: "error",
      message: "भुगतान खोलने में त्रुटि / Error opening payment gateway"
    });
  }
};

  const showYajmanDetails = (yajmanType) => {
    setSelectedYajmanDetails(yajmanType);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if payment is completed
    if (formData.paymentStatus !== "completed") {
      setStatus({
        type: "error",
        message: "कृपया पहले भुगतान पूरा करें / Please complete payment first"
      });
      return;
    }
    
    setLoading(true);

    try {
      // Google Sheets Web App URL - Replace with your actual Google Apps Script Web App URL
      const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzRTHSvc-I9MMnxdK4tuT2NDzT2ZNwkUZ0Mcw5F1yTyqirhcSkEVhD0ETBsgwI-Zl-HUA/exec';
      
      // Prepare data for Google Sheets
      const submissionData = {
        ...formData,
        submissionDate: new Date().toISOString(),
        yajmanTypeName: yajmanTypes.find(type => type.id === formData.yajmanType)?.name || '',
        yajmanTypeAmount: yajmanTypes.find(type => type.id === formData.yajmanType)?.amount || ''
      };

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      // Since mode is 'no-cors', we can't read the response
      // Assume success if no error is thrown
      setStatus({
        type: "success",
        message: "🙏 पंजीकरण सफलतापूर्वक जमा हो गया! Payment ID: " + formData.paymentId + " | Registration submitted successfully!"
      });
      
      // Clear form
      setFormData({
        name: "", fatherName: "", spouseName: "", childrenNames: "",
        familyDeity: "", gotraNakshatra: "", country: "", state: "",
        district: "", fullAddress: "", contactNumber: "", email: "",
        participationPurpose: "", ancestorName: "", ancestorRelation: "",
        yajmanType: "", totalAmount: "", advanceAmount: "",
        balanceAmount: "", amountInWords: "", paymentId: "", paymentStatus: "pending"
      });
      
      setPaymentAmount(0);
      setIsPaymentRequired(false);
      
    } catch (error) {
      setStatus({
        type: "error",
        message: "🕉️ पंजीकरण में त्रुटि हुई। कृपया पुनः प्रयास करें। There was an error submitting your registration. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-6 mt-12">
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
              <Heart className="w-12 h-12 text-orange-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-orange-700 mb-2">
                श्रीमद् भागवत कथा पंजीकरण
              </h1>
              <h2 className="text-2xl text-gray-700">
                Shrimad Bhagwat Katha Registration Form
              </h2>
            </div>
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
              <Calendar className="w-12 h-12 text-orange-600" />
            </div>
          </div>
        </div>

        {/* Status Message */}
        {status.message && (
          <div className={`mb-6 p-4 rounded-lg text-center ${
            status.type === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-300' 
              : 'bg-red-100 text-red-800 border border-red-300'
          }`}>
            {status.message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          {/* Personal Information */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-orange-600" />
              <h3 className="text-xl font-semibold text-gray-800">व्यक्तिगत जानकारी / Personal Information</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  नाम / Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  पिता का नाम / Father's Name *
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  पति/पत्नी का नाम / Spouse Name
                </label>
                <input
                  type="text"
                  name="spouseName"
                  value={formData.spouseName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  बच्चों के नाम / Children Names
                </label>
                <input
                  type="text"
                  name="childrenNames"
                  value={formData.childrenNames}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Multiple names separated by commas"
                />
              </div>
            </div>
          </div>

          {/* Spiritual Information */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-orange-600" />
              <h3 className="text-xl font-semibold text-gray-800">आध्यात्मिक जानकारी / Spiritual Information</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  कुल देवता / Family Deity *
                </label>
                <input
                  type="text"
                  name="familyDeity"
                  value={formData.familyDeity}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  गोत्र / Gotra *
                </label>
                <input
                  type="text"
                  name="gotraNakshatra"
                  value={formData.gotraNakshatra}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Home className="w-5 h-5 text-orange-600" />
              <h3 className="text-xl font-semibold text-gray-800">पता / Address Information</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  देश / Country *
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  राज्य / State *
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  जिला / District *
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                पूरा पता / Full Address *
              </label>
              <textarea
                name="fullAddress"
                value={formData.fullAddress}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Area, Society, House No., Landmark"
                required
              ></textarea>
            </div>
          </div>

          {/* Contact Details */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-5 h-5 text-orange-600" />
              <h3 className="text-xl font-semibold text-gray-800">संपर्क विवरण / Contact Details</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  मोबाइल नंबर / Contact Number *
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ईमेल / Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>

          {/* Purpose */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-orange-600" />
              <h3 className="text-xl font-semibold text-gray-800">उद्देश्य / Purpose</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  भागीदारी का उद्देश्य / Purpose of Participation *
                </label>
                <textarea
                  name="participationPurpose"
                  value={formData.participationPurpose}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    पितृपूजा हेतु पूर्वज का नाम / Ancestor Name for Pitrupooja
                  </label>
                  <input
                    type="text"
                    name="ancestorName"
                    value={formData.ancestorName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    रिश्ता / Relation
                  </label>
                  <input
                    type="text"
                    name="ancestorRelation"
                    value={formData.ancestorRelation}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Father, Grandfather, etc."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Yajman Type */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-orange-600" />
              <h3 className="text-xl font-semibold text-gray-800">यजमान का प्रकार / Type of Yajman *</h3>
            </div>
            <div className="grid gap-3">
              {yajmanTypes.map((type) => (
                <div key={type.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-orange-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id={type.id}
                      name="yajmanType"
                      value={type.id}
                      checked={formData.yajmanType === type.id}
                      onChange={handleChange}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      required
                    />
                    <div>
                      <label htmlFor={type.id} className="font-medium text-gray-900 cursor-pointer">
                        {type.name} ({type.englishName})
                      </label>
                      <div className="text-sm text-orange-600 font-semibold">
                        राशि / Amount: ₹{type.amount}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => showYajmanDetails(type)}
                    className="text-orange-600 hover:text-orange-800 p-1"
                    title="View Details"
                  >
                    <Info className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Dakshina Details */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-orange-600" />
              <h3 className="text-xl font-semibold text-gray-800">दक्षिणा विवरण / Dakshina Details</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  कुल दक्षिणा / Total Dakshina (₹) *
                </label>
                <input
                  type="number"
                  name="totalAmount"
                  value={formData.totalAmount}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                  readOnly
                />
                <p className="text-xs text-gray-500 mt-1">यजमान प्रकार चुनने पर स्वचालित रूप से भर जाएगा</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  अग्रिम राशि (50%) / Advance Amount (50%) (₹) *
                </label>
                <input
                  type="number"
                  name="advanceAmount"
                  value={formData.advanceAmount}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                  readOnly
                />
                <p className="text-xs text-orange-600 mt-1 font-medium">भुगतान आवश्यक / Payment Required</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  शेष राशि / Balance Amount (₹)
                </label>
                <input
                  type="number"
                  name="balanceAmount"
                  value={formData.balanceAmount}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  राशि शब्दों में / Amount in Words *
                </label>
                <input
                  type="text"
                  name="amountInWords"
                  value={formData.amountInWords}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Example: Five Thousand One Hundred Eleven Only"
                  required
                />
              </div>
            </div>

            {/* Payment Status */}
            {formData.paymentId && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-800">
                    भुगतान सफल / Payment Successful
                  </span>
                </div>
                <p className="text-sm text-green-700 mt-1">
                  Payment ID: {formData.paymentId}
                </p>
              </div>
            )}
          </div>

          {/* Payment Section */}
          {isPaymentRequired && formData.yajmanType && formData.paymentStatus !== "completed" && (
            <div className="mb-8">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-semibold text-gray-800">भुगतान / Payment</h3>
                </div>
                
                <div className="mb-4">
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    भुगतान राशि / Payment Amount: ₹{paymentAmount.toLocaleString('en-IN')}
                  </div>
                  <div className="text-sm text-gray-600">
                    यह कुल राशि का 50% अग्रिम भुगतान है / This is 50% advance payment of total amount
                  </div>
                </div>

                <button
                  type="button"
                  onClick={initiatePayment}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-5 h-5" />
                  ₹{paymentAmount.toLocaleString('en-IN')} का भुगतान करें / Pay ₹{paymentAmount.toLocaleString('en-IN')}
                </button>
                
                <div className="mt-3 text-xs text-gray-500 text-center">
                  <div>Powered by Razorpay • Secure Payment Gateway</div>
                  <div>UPI, Cards, Net Banking, Wallets accepted</div>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center" id="submit-section">
            <button
              type="submit"
              disabled={loading || formData.paymentStatus !== "completed"}
              className={`font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto ${
                formData.paymentStatus === "completed" 
                  ? "bg-green-600 hover:bg-green-700 text-white" 
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  जमा हो रहा है... / Submitting...
                </>
              ) : formData.paymentStatus === "completed" ? (
                <>
                  <Heart className="w-5 h-5" />
                  पंजीकरण जमा करें / Submit Registration
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5" />
                  पहले भुगतान करें / Complete Payment First
                </>
              )}
            </button>
            
            {formData.paymentStatus !== "completed" && (
              <p className="text-sm text-gray-500 mt-2">
                फॉर्म जमा करने से पहले भुगतान पूरा करना आवश्यक है<br/>
                Payment completion is required before form submission
              </p>
            )}
          </div>
        </form>

        {/* Modal for Yajman Details */}
        {showModal && selectedYajmanDetails && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedYajmanDetails.name}
                  </h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="mb-4">
                  <div className="text-lg font-semibold text-orange-600 mb-2">
                    राशि / Amount: ₹{selectedYajmanDetails.amount}
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    {selectedYajmanDetails.englishName}
                  </div>
                  <p className="text-gray-700 mb-4">
                    {selectedYajmanDetails.details}
                  </p>
                </div>

                {/* <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">लाभ / Benefits:</h4>
                  <ul className="space-y-1">
                    {selectedYajmanDetails.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}

                <button
                  onClick={() => setShowModal(false)}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  बंद करें / Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Contact Information Footer */}
        <div className="mt-12 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">संपर्क करें / Contact Us</h3>
            <p className="text-orange-100">
              किसी भी सहायता के लिए संपर्क करें / For any assistance, please contact
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-2 text-orange-200" />
              <div className="text-sm">
                <div>M. 9327623978 • 8320158274</div>
                <div>9033770099 • 8160885317 • 9429129397</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-2 text-orange-200" />
              <div className="text-sm">
                <div>स्थान: प्लॉट नं. 14-15-16, श्यामा उपवन</div>
                <div>वृन्दावन, मथुरा-281121</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Home className="w-8 h-8 mb-2 text-orange-200" />
              <div className="text-sm">
                <div>H.O.: 302, शान्तनु रेसीडेंसी, फरुकी के पास</div>
                <div>कृष्णगला, मणिनगर, अहमदाबाद</div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="text-sm text-orange-200">
              <div>Bank Details for Donation:</div>
              <div className="font-semibold">A/c. No.: 200810210000011</div>
              <div>Name: SHREE HARIKRUPA FOUNDATION</div>
              <div>IFSC Code: BKID0002008</div>
              <div>Bank of India, Branch: (Maninagar) AHMEDABAD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YajmanForm;