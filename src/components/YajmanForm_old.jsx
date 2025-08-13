import React, { useState } from "react";
import "./YajmanForm.css"; // Keep your existing CSS import

const YajmanForm = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    spouseName: "",
    childName: "",
    parentName: "",
    
    // Spiritual Information
    familyDeity: "",
    gotraNakshatra: "",
    
    // Address Information
    country: "",
    state: "",
    district: "",
    address: "",
    
    // Contact Details
    contactNumber: "",
    email: "",
    
    // Purpose
    participationPurpose: "",
    ancestorName: "",
    ancestorRelation: "",
    
    // Yajman Type
    yajmanType: "",
    
    // Dakshina Details
    totalAmount: "",
    advanceAmount: "",
    balanceAmount: "",
    amountInWords: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-calculate balance amount
    if (name === 'totalAmount' || name === 'advanceAmount') {
      const total = parseFloat(name === 'totalAmount' ? value : formData.totalAmount) || 0;
      const advance = parseFloat(name === 'advanceAmount' ? value : formData.advanceAmount) || 0;
      setFormData(prev => ({
        ...prev,
        balanceAmount: (total - advance).toString()
      }));
    }
  };

  const yajmanTypes = [
    "General Donor",
    "Senior Donor",
    "Yagna Yajman",
    "Root Yajman",
    "Special Yajman",
    "Co-Main Yajman",
    "Chief Yajman"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with your Google Sheets API endpoint
      const response = await fetch('YOUR_GOOGLE_SHEETS_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Submission failed');

      setStatus({
        type: "success",
        message: "🙏 Registration submitted successfully! Om Namah Shivaya"
      });
      
      // Clear form
      setFormData({
        name: "", spouseName: "", childName: "", parentName: "",
        familyDeity: "", gotraNakshatra: "", country: "", state: "",
        district: "", address: "", contactNumber: "", email: "",
        participationPurpose: "", ancestorName: "", ancestorRelation: "",
        yajmanType: "", totalAmount: "", advanceAmount: "",
        balanceAmount: "", amountInWords: ""
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "🕉️ There was an error submitting your registration. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bhagwat-katha-form-container">
      <div className="form-header">
        <img src="/img/left-deity.png" alt="Left Deity" className="header-image left" />
        <h1>श्रीमद् भागवत कथा पंजीकरण</h1>
        <img src="/img/right-deity.png" alt="Right Deity" className="header-image right" />
      </div>

      <h2 className="english-title">Shrimad Bhagwat Katha Registration Form</h2>

      {status.message && (
        <div className={`status-message ${status.type}`}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="spiritual-form">
        {/* Personal Information */}
        <section className="form-section">
          <h3>🕉️ Personal Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Spouse Name</label>
              <input
                type="text"
                name="spouseName"
                value={formData.spouseName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Son / Daughter Name</label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Mother / Father Name</label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </section>

        {/* Spiritual Information */}
        <section className="form-section">
          <h3>🕉️ Spiritual Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Family Deity</label>
              <input
                type="text"
                name="familyDeity"
                value={formData.familyDeity}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Gotra / Nakshatra</label>
              <input
                type="text"
                name="gotraNakshatra"
                value={formData.gotraNakshatra}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </section>

        {/* Address Information */}
        <section className="form-section">
          <h3>📍 Address Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>District</label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Area / Society / House No.</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
        </section>

        {/* Contact Details */}
        <section className="form-section">
          <h3>📞 Contact Details</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </section>

        {/* Purpose */}
        <section className="form-section">
          <h3>🙏 Purpose</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Purpose of Participation</label>
              <textarea
                name="participationPurpose"
                value={formData.participationPurpose}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label>Ancestor Name for Pitrupooja</label>
              <input
                type="text"
                name="ancestorName"
                value={formData.ancestorName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Relation</label>
              <input
                type="text"
                name="ancestorRelation"
                value={formData.ancestorRelation}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        {/* Yajman Type */}
        <section className="form-section">
          <h3>🕉️ Type of Yajman</h3>
          <div className="yajman-type-options">
            {yajmanTypes.map((type) => (
              <div key={type} className="yajman-type-option">
                <input
                  type="radio"
                  id={type}
                  name="yajmanType"
                  value={type}
                  checked={formData.yajmanType === type}
                  onChange={handleChange}
                  required
                />
                <label htmlFor={type}>{type}</label>
              </div>
            ))}
          </div>
        </section>

        {/* Dakshina Details */}
        <section className="form-section">
          <h3>💰 Dakshina Details</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Total Dakshina (₹)</label>
              <input
                type="number"
                name="totalAmount"
                value={formData.totalAmount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Advance Amount (₹)</label>
              <input
                type="number"
                name="advanceAmount"
                value={formData.advanceAmount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Balance Amount (₹)</label>
              <input
                type="number"
                name="balanceAmount"
                value={formData.balanceAmount}
                readOnly
              />
            </div>
            <div className="form-group">
              <label>Amount in Words</label>
              <input
                type="text"
                name="amountInWords"
                value={formData.amountInWords}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </section>

        <button 
          type="submit" 
          className="submit-button"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Registration"}
        </button>
      </form>
    </div>
  );
};

export default YajmanForm;