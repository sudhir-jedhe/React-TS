// Stepper.js
import React from 'react';
import PropTypes from 'prop-types';
import './Stepper.css'; // Assuming you have a CSS file for styling

const Stepper = ({ children, sx }) => {
  return (
    <div className="stepper" style={sx}>
      {children}
    </div>
  );
};

Stepper.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

export default Stepper;
