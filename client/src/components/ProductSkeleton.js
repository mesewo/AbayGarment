// src/components/ProductSkeleton.js
import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className="animate-pulse bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-200 h-48 w-full"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;