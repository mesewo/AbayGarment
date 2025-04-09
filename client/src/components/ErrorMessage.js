import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorMessage = ({ variant, children }) => {
  return (
    <Alert variant={variant}>
      {children}
    </Alert>
  );
};

ErrorMessage.defaultProps = {
  variant: 'danger', // Default style is set to 'danger' for error messages
};

export default ErrorMessage;
