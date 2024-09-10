import React from 'react';
import { Link } from 'react-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-[#174A6D] text-white">
      <div className="p-4 text-lg font-semibold flex justify-start items-center h-[72px]">Admin Dashboard</div>
      <nav>
        <ul>
          <li className='my-6 mx-4'>
            <Link to="/dashboard/registration"  className="relative block-inline py-2 lg:py-0 text-[16px] font-poppins text-black lg:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#7ABCDB] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-[cubic-bezier(.58,.3,.005,1)] hover:text-[#7ABCDB] hover:after:scale-x-100"
              > Create Manager</Link>
          </li>
          <li className='my-6 mx-4'>
            <Link to="/dashboard"  className="relative block-inline py-2 lg:py-0 text-[16px] font-poppins text-black lg:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#7ABCDB] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-[cubic-bezier(.58,.3,.005,1)] hover:text-[#7ABCDB] hover:after:scale-x-100"
              >User and web pages content Management </Link>
          </li>
          <li className='my-6 mx-4'>
            <Link to="/dashboard"  className="relative block-inline py-2 lg:py-0 text-[16px] font-poppins text-black lg:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#7ABCDB] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-[cubic-bezier(.58,.3,.005,1)] hover:text-[#7ABCDB] hover:after:scale-x-100"
              >View Survey</Link>
          </li>
          <li className='my-6 mx-4'>
            <Link to="/dashboard"  className="relative block-inline py-2 lg:py-0 text-[16px] font-poppins text-black lg:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#7ABCDB] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-[cubic-bezier(.58,.3,.005,1)] hover:text-[#7ABCDB] hover:after:scale-x-100"
              >Competency Management 
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
