import React from 'react';

const Donate = () => {
  const handleDonate = () => {
    // Razorpay integration coming soon
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-10 bg-gradient-to-br from-orange-100 to-white flex flex-col items-center font-sans">
      {/* Header */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Donate & Support the Cause
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your contribution helps Shree Harikrupa Foundation continue its mission of spreading wisdom and service. Choose any method below to show your support.
        </p>
      </div>

      {/* QR & Bank Details */}
      <div className="bg-white shadow-xl rounded-3xl p-8 mb-10 max-w-lg w-full border border-pink-200">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          📷 Scan & Pay
        </h2>

        <div className="flex justify-center mb-4">
            <img
            src="https://raw.githubusercontent.com/0xlax/assets_hfkj/main/qr.png"
            alt="QR Code"
            className="w-64 h-64 object-contain rounded-md"
          />
        </div>

        

        <p className="text-center text-gray-600 mb-6">
          Scan with any UPI app, or transfer directly using the account details below:
        </p>

        <div className="bg-pink-50 p-6 rounded-xl text-gray-800 text-sm space-y-2">
          <p><strong>Account Name:</strong> SHREE HARIKRUPA FOUNDATION</p>
          <p><strong>Account Number:</strong> 200810210000011</p>
          <p><strong>IFSC Code:</strong> BKID0002008</p>
          <p><strong>Bank Name:</strong> Bank of India</p>
          <p><strong>Branch:</strong> (Maninagar) AHMEDABAD</p>
          <p className="text-xs text-gray-500 mt-2">*Please mention your name in the reference/note field.</p>
        </div>
      </div>

      {/* Razorpay Button */}
      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-lg w-full text-center border border-pink-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          💳 Donate via Razorpay
        </h2>
        <button
          onClick={handleDonate}
          disabled
          className="bg-gray-300 cursor-not-allowed text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-inner"
          title="Coming Soon!"
        >
          Donate Now (Coming Soon)
        </button>
        <p className="text-sm text-gray-500 mt-3">Secure payment gateway powered by Razorpay</p>
      </div>
    </div>
  );
};

export default Donate;