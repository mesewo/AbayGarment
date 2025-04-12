import React from 'react';
import './Loader.css'; // Import the Loader.css file

const Loader = ({ text = 'Loading...', size = 80, color = 'var(--primary)', withOverlay = true }) => {
  return (
    <div className={`loader-container ${withOverlay ? 'with-overlay' : ''}`}>
      <div
        className="loader-spinner"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderWidth: `${size / 10}px`,
          borderTopColor: color,
        }}
      ></div>
      {text && <div className="loader-text">{text}</div>}
    </div>
  );
};

export default Loader;