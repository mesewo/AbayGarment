import React from 'react';

const Message = ({ variant, children }) => {
  const variantClass = {
    danger: 'text-red-800 bg-red-100 border border-red-200',
    success: 'text-green-800 bg-green-100 border border-green-200',
    warning: 'text-yellow-800 bg-yellow-100 border border-yellow-200',
    info: 'text-blue-800 bg-blue-100 border border-blue-200',
    primary: 'text-blue-900 bg-blue-200 border border-blue-300',
  };

  return (
    <div className={`my-4 py-4 px-6 rounded-md text-base leading-relaxed ${variantClass[variant]}`}>
      {children}
    </div>
  );
};

Message.defaultProps = {
  variant: 'info', // Default style is set to 'info'
};

export default Message;
