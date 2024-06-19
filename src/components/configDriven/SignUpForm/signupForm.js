// SignupForm.js

import React, { useState } from 'react';
import signupFormConfig from './signupFormConfig'; // Import form configuration
import './SignupForm.css'; // Import CSS file for styling

const SignupForm = () => {
  const initialFormState = signupFormConfig.reduce((acc, field) => {
    acc[field.name] = {
      value: field.value || '',
      touched: field.touched || false,
      error: '',
    };
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
    setFormData({
      ...formData,
      [name]: {
        ...formData[name],
        value: value,
        touched: true,
      },
    });
  };

  const validateField = (fieldName, value) => {
    const fieldConfig = signupFormConfig.find(field => field.name === fieldName);
    let error = '';

    if (fieldConfig.required && value.trim() === '') {
      error = fieldConfig.errorMessage.required;
    } else if (fieldConfig.validation && fieldConfig.validation.minLength && value.length < fieldConfig.validation.minLength) {
      error = fieldConfig.errorMessage.minLength;
    } else if (fieldConfig.validation && fieldConfig.validation.maxLength && value.length > fieldConfig.validation.maxLength) {
      error = fieldConfig.errorMessage.maxLength;
    } else if (fieldConfig.validation && fieldConfig.validation.pattern && !fieldConfig.validation.pattern.test(value)) {
      error = fieldConfig.errorMessage.pattern;
    }

    setFormData({
      ...formData,
      [fieldName]: {
        ...formData[fieldName],
        error: error,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = signupFormConfig.every(field => {
      const { name } = field;
      validateField(name, formData[name].value);
      return !formData[name].error && formData[name].touched;
    });

    setFormValid(isFormValid);

    if (isFormValid) {
      // Handle form submission logic here (e.g., API call)
      console.log('Form data:', formData);
      // Reset form fields after submission if needed
      setFormData(initialFormState);
    }
  };

  return (
    <div className="signup-form-container">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        {signupFormConfig.map(field => (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name].value}
              onChange={handleChange}
              onBlur={() => validateField(field.name, formData[field.name].value)}
              className={formData[field.name].error && formData[field.name].touched ? 'error' : ''}
              required={field.required}
            />
            {formData[field.name].error && formData[field.name].touched && (
              <div className="error-message">{formData[field.name].error}</div>
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
