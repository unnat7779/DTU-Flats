"use client"
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    floorNumber: '',
    units: '',
    monthlyCharges: '',
    certificateIssued: '',
    document: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFormData((prevData) => ({
        ...prevData,
        document: file
      }));
    } else {
      alert('Please upload a PDF file only');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Further processing of formData can be done here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Date of Birth:
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <br />

      <label>
        Address:
        <textarea name="address" value={formData.address} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Floor Number:
        <select name="floorNumber" value={formData.floorNumber} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="UG">Upper Ground</option>
          <option value="FF">First Floor</option>
          <option value="SF">Second Floor</option>
          <option value="TF">Third Floor</option>
          <option value="SU">Single Unit</option>
        </select>
      </label>
      <br />

      <label>
        No of Units:
        <input type="number" name="units" value={formData.units} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Monthly Charges:
        <input type="number" name="monthlyCharges" value={formData.monthlyCharges} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Certificate Issued:
        <select name="certificateIssued" value={formData.certificateIssued} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>
      <br />

      <label>
        Upload Document (PDF only):
        <input type="file" accept="application/pdf" onChange={handleFileChange} />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
