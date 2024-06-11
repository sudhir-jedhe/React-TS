import React from 'react';
import styles from './Button.module.css';

const Button = ({ type, size, onClick, children }) => {
  let buttonClass = styles.button;
  
  if (type === 'primary') {
    buttonClass += ` ${styles.primary}`;
  } else if (type === 'outline') {
    buttonClass += ` ${styles.outline}`;
  } else if (type === 'destructive') {
    buttonClass += ` ${styles.destructive}`;
  }

  if (size === 'small') {
    buttonClass += ` ${styles.small}`;
  } else if (size === 'medium') {
    buttonClass += ` ${styles.medium}`;
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
