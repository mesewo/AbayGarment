import React from 'react';
import './ErrorMessage.css'; // Import the ErrorMessage.css file

const ErrorMessage = ({ variant, children }) => {
  return (
    <div className={`error-message ${variant}`}>
      {children}
    </div>
  );
};

ErrorMessage.defaultProps = {
  variant: 'danger', // Default style is set to 'danger' for error messages
};

export default ErrorMessage;