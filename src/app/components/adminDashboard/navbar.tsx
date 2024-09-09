import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/login");
  };
  return (
    <header className="bg-[#174A6D] text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <div>
          <button
            type="button"
            onClick={handleLogout}
            className="min-w-[100px] min-h-[40px] items-center bg-[#7ABCDB] flex justify-center px-[20px] text-[16px] rounded-full text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
