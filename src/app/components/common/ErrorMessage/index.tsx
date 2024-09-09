import React from 'react';

const ErrorMessage: React.FC<{ message: string, className:string }> = ({ message, className }) => {
  return (
    <div className={`flex items-center bg-[#FFEDEE] border-t-4 border-red-500 text-[#FF030B] px-3 py-2 mt-2 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 5.636a9 9 0 11-12.728 0 9 9 0 0112.728 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
      </svg>
      <p className="text-[16px] font-poppins">{message}</p>
    </div>
  );
};

export default ErrorMessage;
