import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccessScreen = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold text-green-500 mb-4">Order Successful!</h1>
      <p className="text-lg text-gray-700 mb-4">Thank you for your order.</p>
      <Link to="/orders" className="bg-abay-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
        View Your Orders
      </Link>
      <Link to="/home" className="mt-2 text-abay-green hover:underline">
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccessScreen;