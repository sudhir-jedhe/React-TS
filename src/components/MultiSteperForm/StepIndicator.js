// StepIndicator.js
import React from 'react';
import PropTypes from 'prop-types';
import './StepIndicator.css'; // Assuming you have a CSS file for styling

const StepIndicator = ({ children, variant, color }) => {
  const classes = `step-indicator ${variant ? `step-indicator-${variant}` : ''} ${color ? `step-indicator-${color}` : ''}`;

  return <div className={classes}>{children}</div>;
};

StepIndicator.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['solid', 'outlined']),
  color: PropTypes.string,
};

export default StepIndicator;
