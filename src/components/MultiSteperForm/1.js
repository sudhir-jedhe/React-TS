// StepperFormContainer.js
import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const StepperFormContainer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleFormChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value
    });
  };

  return (
    <div className="stepper-form-container">
      <h1>Multi-step Form</h1>
      <StepOne formData={formData} onFormChange={handleFormChange} />
      <StepTwo formData={formData} onFormChange={handleFormChange} />
      <StepThree formData={formData} />
    </div>
  );
};

export default StepperFormContainer;
