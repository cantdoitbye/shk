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
      name: "साधारण दाता",
      englishName: "General Donor",
      amount: "5,111/-",
      details: "सामान्य दान और आशीर्वाद के लिए। मूलभूत पूजा-पाठ में सहभागिता।",
      benefits: [
        "भागवत कथा श्रवण का पुण्य",
        "आध्यात्मिक शांति",
        "परिवार की समृद्धि के लिए प्रार्थना"
      ]
    },
    {
      id: "varisth_data",
      name: "वरिष्ठ दान दाता",
      englishName: "Senior Donor", 
      amount: "11,111/-",
      details: "वरिष्ठ दानवीरों के लिए विशेष सम्मान और आशीर्वाद।",
      benefits: [
        "विशेष पूजा में सहभागिता",
        "नाम उद्घोषणा",
        "प्रसाद और आशीर्वाद"
      ]
    },
    {
      id: "yagya_yajman",
      name: "यज्ञ यजमान",
      englishName: "Yagna Yajman",
      amount: "31,131/-",
      details: "यज्ञ अनुष्ठान में मुख्य सहभागिता और विशेष मंत्र जाप।",
      benefits: [
        "यज्ञ में प्रमुख भूमिका",
        "व्यक्तिगत संकल्प पूर्ति",
        "कुंडली दोष निवारण"
      ]
    },
    {
      id: "mool_yajman", 
      name: "मूल यजमान",
      englishName: "Root Yajman",
      amount: "51,151/-",
      details: "मुख्य यजमान के रूप में पूर्ण कथा का आयोजन और संचालन।",
      benefits: [
        "संपूर्ण कथा का मुख्य आयोजक",
        "पूर्ण आध्यात्मिक लाभ",
        "वंश की उन्नति और कल्याण"
      ]
    },
    {
      id: "vishisht_data",
      name: "विशिष्ट दानदाता", 
      englishName: "Special Donor",
      amount: "1,11,111/-",
      details: "विशिष्ट दानवीरों के लिए महत्वपूर्ण सहयोग और सम्मान।",
      benefits: [
        "विशिष्ट पूजा अनुष्ठान",
        "व्यापार और करियर में वृद्धि",
        "परिवारिक समृद्धि"
      ]
    },
    {
      id: "sahyogi_yajman",
      name: "सहयोगी मुख्य यजमान",
      englishName: "Co-Main Yajman", 
      amount: "2,22,222/-",
      details: "मुख्य यजमान के सहयोगी के रूप में कथा के आयोजन में भागीदारी।",
      benefits: [
        "मुख्य आयोजक की भूमिका",
        "व्यापक सामाजिक सम्मान",
        "धर्म और अर्थ दोनों की सिद्धि"
      ]
    },
    {
      id: "pramukh_yajman",
      name: "प्रमुख यजमान",
      englishName: "Chief Yajman",
      amount: "5,55,555/-",
      details: "मानार्थ सदस्यता के लिए आपश्री को 5,55,555/- राशि की रसीद प्राप्त करने पर सर्वोच्च सम्मान।",
      benefits: [
        "फाउंडेशन के मानार्थ सदस्य",
        "संस्था से जीवनभर जुड़ाव",
        "सभी कार्यक्रमों में विशेष सम्मान",
        "धर्म और समाज सेवा में योगदान"
      ]
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
                  गोत्र / नक्षत्र / Gotra / Nakshatra *
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

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">लाभ / Benefits:</h4>
                  <ul className="space-y-1">
                    {selectedYajmanDetails.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

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