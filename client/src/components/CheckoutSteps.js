import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const steps = [
    { label: 'Sign In', path: '/login', active: step1 },
    { label: 'Shipping', path: '/shipping', active: step2 },
    { label: 'Payment', path: '/payment', active: step3 },
    { label: 'Place Order', path: '/placeorder', active: step4 },
  ];

  return (
    <div className="flex justify-center items-center gap-6 mb-8">
      {steps.map((step, index) => (
        <div key={index} className="relative flex items-center">
          {step.active ? (
            <Link
              to={step.path}
              className="px-4 py-2 rounded-md bg-green-100 text-green-600 font-medium hover:bg-green-200 transition-colors"
            >
              {step.label}
            </Link>
          ) : (
            <span className="px-4 py-2 rounded-md text-gray-500 font-medium opacity-60 cursor-not-allowed">
              {step.label}
            </span>
          )}

          {index < steps.length - 1 && (
            <span className="absolute right-[-1.5rem] top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CheckoutSteps;
