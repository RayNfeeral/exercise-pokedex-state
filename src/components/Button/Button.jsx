import React from 'react';
import './styles.css';

const Button = ({ className, disabled = false, onClick, children }) => (
  <button 
    className={`btn ${className}`}
    disabled={ disabled }
    onClick={ onClick }
  >
    { children }
  </button>
);

export default Button;
