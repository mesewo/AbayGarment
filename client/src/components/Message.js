import React from 'react';
import './Message.css'; // Import the Message.css file

const Message = ({ variant, children }) => {
  return <div className={`message ${variant}`}>{children}</div>;
};

Message.defaultProps = {
  variant: 'info', // Default style is set to 'info'
};

export default Message;