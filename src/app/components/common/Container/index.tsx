import React from 'react';

// interface ContainerProps {
//   className?: string;
//   children: React.ReactNode;
// }

const Container = ({ className = '', children }) => {
  return (
    <div className={`${className} container max-w-[1520px] px-[20px] md:px-[40px] mx-auto`}>
      {children}
    </div>
  );
};

export default Container;
