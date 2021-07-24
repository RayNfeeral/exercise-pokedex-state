import React from 'react';
import './styles.css';

const Button = ({ className = '', disabled = false, onClick, children, ...rest }) => (
  <button 
    className={`btn ${className}`}
    disabled={ disabled }
    onClick={ onClick }
    { ...rest }
  >
    { children }
  </button>
);

export default Button;
