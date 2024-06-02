import React from 'react';

const CreditCardMasker = ({ creditCardNumber }) => {
  const maskCreditCardNumber = () => {
    // Check if the credit card number is provided and has at least 4 characters
    if (creditCardNumber && creditCardNumber.length >= 4) {
      const maskedPart = creditCardNumber.slice(0, -4).replace(/\d/g, '*'); // Mask all digits except the last four
      const lastFourDigits = creditCardNumber.slice(-4); // Get the last four digits
      return maskedPart + lastFourDigits; // Combine the masked part and the last four digits
    }
    return ''; // Return empty string if no credit card number is provided or it has less than 4 characters
  };

  return <span>{maskCreditCardNumber()}</span>;
};

export default CreditCardMasker;


import React from 'react';
import CreditCardMasker from './CreditCardMasker';

const App = () => {
  return (
    <div>
      <h1>Credit Card Masker</h1>
      <p>Your credit card number: <CreditCardMasker creditCardNumber="1234567890123456" /></p>
    </div>
  );
};

export default App;
