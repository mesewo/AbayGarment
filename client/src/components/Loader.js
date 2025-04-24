import React from 'react';

const Loader = ({ text = 'Loading...', size = 80, color = '#0d9488', withOverlay = true }) => {
  return (
    <div className={`${withOverlay ? 'fixed inset-0 bg-white/80 z-50' : ''} flex flex-col items-center justify-center min-h-screen`}>
      <div
        className="rounded-full border-4 border-t-transparent animate-spin"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderColor: `${color} transparent transparent transparent`,
        }}
      />
      {text && (
        <div className="mt-4 text-lg text-gray-700 text-center animate-pulse">
          {text}
        </div>
      )}
    </div>
  );
};

export default Loader;
