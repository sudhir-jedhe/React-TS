import React, { useState } from 'react';

const Form = () => {
  // State to store form field values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // State to store form field errors
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // State to store success message
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any form field is empty
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setFormErrors({ ...formErrors, firstName: 'First name is required.', lastName: 'Last name is required.', email: 'Email is required.', password: 'Password is required.', confirmPassword: 'Confirm password is required.' });
      return;
    }

    // Check if first name is at least 3 characters long
    if (formData.firstName.length < 3) {
      setFormErrors({ ...formErrors, firstName: 'First name should be at least 3 characters long.' });
      return;
    }

    // Check if last name is at least 3 characters long
    if (formData.lastName.length < 3) {
      setFormErrors({ ...formErrors, lastName: 'Last name should be at least 3 characters long.' });
      return;
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormErrors({ ...formErrors, email: 'Invalid email address.' });
      return;
    }

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setFormErrors({ ...formErrors, confirmPassword: 'Passwords do not match.' });
      return;
    }

    // If all validations pass, display success message
    setSuccessMessage('Form submitted successfully!');
  };

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Clear error message when user starts typing in a field
    setFormErrors({ ...formErrors, [name]: '' });
    // Update form data
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" />
          {formErrors.firstName && <p className="error">{formErrors.firstName}</p>}
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" />
          {formErrors.lastName && <p className="error">{formErrors.lastName}</p>}
        </div>
        <div>
          <label>Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" />
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
          {formErrors.password && <p className="error">{formErrors.password}</p>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm your password" />
          {formErrors.confirmPassword && <p className="error">{formErrors.confirmPassword}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default Form;
