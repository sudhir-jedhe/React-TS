import React, { useState } from 'react';

function PhoneNumberParser() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');

    const handleChange = (event) => {
        const inputPhoneNumber = event.target.value;
        const formatted = formatPhoneNumber(inputPhoneNumber);
        setPhoneNumber(inputPhoneNumber);
        setFormattedPhoneNumber(formatted);
    };

    const formatPhoneNumber = (phoneNumber) => {
        // Remove all non-digit characters from the input
        const digitsOnly = phoneNumber.replace(/\D/g, '');

        // Check if the input is empty or invalid
        if (!digitsOnly || digitsOnly.length < 3) {
            return digitsOnly; // Return the input as it is
        }

        // Format the phone number
        let formattedNumber = '';
        if (digitsOnly.length <= 3) {
            formattedNumber = digitsOnly; // No need to format area code
        } else if (digitsOnly.length <= 7) {
            formattedNumber = `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`; // Format with area code
        } else {
            formattedNumber = `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`; // Format with area code and hyphen
        }

        return formattedNumber;
    };

    return (
        <div>
            <label>
                Enter phone number:
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={handleChange}
                />
            </label>
            <div>Formatted phone number: {formattedPhoneNumber}</div>
        </div>
    );
}

export default PhoneNumberParser;



/************************ */


import React, { useState } from 'react';

function PhoneNumberParser() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const input = e.target.value;
        setPhoneNumber(input);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validatePhoneNumber(phoneNumber)) {
            setError('');
            // Handle submitting the valid phone number
        } else {
            setError('Invalid phone number format');
        }
    };

    const validatePhoneNumber = (input) => {
        const phoneNumberPattern = /^\(\d{3}\) \d{3}-\d{4}$/;
        return phoneNumberPattern.test(input);
    };
  
    return (
        <form onSubmit={handleSubmit} className="PhoneNumberParser">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handleChange}
                placeholder="(123) 456-7890"
            />
            {error && <p className="error">{error}</p>}
            <button type="submit">Submit</button>
        </form>
    );
}

export default PhoneNumberParser;
