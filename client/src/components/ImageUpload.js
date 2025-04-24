// src/components/ImageUpload.js
import React, { useState } from 'react';
import axios from 'axios';
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa';

const ImageUpload = ({ value, onChange }) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          setProgress(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          );
        },
      };

      const { data } = await axios.post('/api/upload', formData, config);
      onChange(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const removeImageHandler = () => {
    onChange('');
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
      
      {value ? (
        <div className="relative">
          <img src={value} alt="Product" className="h-40 object-contain border rounded-md" />
          <button
            onClick={removeImageHandler}
            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
          >
            <FaTimes className="text-xs" />
          </button>
        </div>
      ) : (
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            {uploading ? (
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-abay-blue h-2.5 rounded-full" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            ) : (
              <>
                <div className="flex text-sm text-gray-600 justify-center">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-abay-blue hover:text-blue-800 focus-within:outline-none">
                    <span>Upload an image</span>
                    <input 
                      id="file-upload" 
                      name="file-upload" 
                      type="file" 
                      className="sr-only" 
                      onChange={uploadFileHandler}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;