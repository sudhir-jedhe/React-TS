// Step.js
import React from 'react';
import PropTypes from 'prop-types';
import './Step.css'; // Assuming you have a CSS file for styling

const Step = ({ children, indicator }) => {
  return (
    <div className="step">
      <div className="step-indicator">{indicator}</div>
      <div className="step-content">{children}</div>
    </div>
  );
};

Step.propTypes = {
  children: PropTypes.node.isRequired,
  indicator: PropTypes.node,
};

export default Step;
