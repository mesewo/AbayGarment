import React from 'react';

const ErrorMessage = ({ variant = 'danger', children }) => {
  const variantStyles = {
    danger: 'text-red-700 bg-red-100 border-red-300',
    success: 'text-green-700 bg-green-100 border-green-300',
    warning: 'text-yellow-700 bg-yellow-100 border-yellow-300',
    info: 'text-blue-700 bg-blue-100 border-blue-300',
  };

  return (
    <div className={`px-4 py-2 mb-4 border rounded-md ${variantStyles[variant]}`}>
      {children}
    </div>
  );
};

export default ErrorMessage;
