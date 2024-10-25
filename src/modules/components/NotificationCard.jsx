// NotificationCard.jsx
import React, { useEffect } from 'react';

export default function NotificationCard({ type, message, onClose }) {
  const baseStyles = "p-4 rounded-md shadow-md flex items-center space-x-3";
  const successStyles = "bg-green-100 text-green-800 border border-green-200";
  const errorStyles = "bg-red-100 text-red-800 border border-red-200";

  const iconSuccess = (
    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );

  const iconError = (
    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${baseStyles} ${type === 'success' ? successStyles : errorStyles}`}>
      <div>
        {type === 'success' ? iconSuccess : iconError}
      </div>
      <div>
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  );
}
