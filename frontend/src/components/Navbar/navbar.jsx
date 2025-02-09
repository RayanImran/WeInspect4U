import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import carInspection from "../../assets/HomeImages/inspectionpicture.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  const handleAdminClick = () => {
    handleMenuClick();
    navigate("/admin", { state: { resetAuth: true } });
  };

  const handleOrderInspectionClick = () => {
    navigate("/inspection");
  };

  const handleHomeClick = () => {
    navigate("/"); // Navigate to the main home page
    handleMenuClick(); // Close the menu on mobile if it's open
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with Image */}
        <div className="flex items-center space-x-2">
          <img
            src={carInspection}
            alt="Car Inspection Logo"
            className="h-10 w-12"
          />
          <button
            onClick={handleHomeClick}
            className="text-white text-2xl font-bold tracking-wide hover:text-yellow-300 transition duration-300 focus:outline-none"
          >
            AutoInspectors
          </button>
        </div>

        {/* Hamburger Icon (shown on mobile only) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Links */}
        <ul
          className={`lg:flex lg:space-x-6 w-full lg:w-auto lg:items-center lg:justify-between lg:bg-transparent bg-gray-700 lg:static absolute left-0 lg:left-auto lg:top-auto top-16 py-4 lg:py-0 px-6 lg:px-0 overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 lg:max-h-full lg:opacity-100"
          }`}
        >
          {/* Order Inspection Button */}
          <li className="mb-4 lg:mb-0">
            <button
              onClick={handleOrderInspectionClick}
              className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700 transition transform hover:scale-105 duration-300"
            >
              BOOK AN INSPECTION
            </button>
          </li>

          {/* Links */}
          <li className="mb-4 lg:mb-0">
            <button
              onClick={handleHomeClick}
              className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105 focus:outline-none"
            >
              Home
            </button>
          </li>
          {[ "FAQ", "Blog", "Contact Us"].map((link, idx) => (
            <li key={idx} className="mb-4 lg:mb-0">
              <button
                onClick={() => {
                  navigate(`/${link.replace(/\s+/g, "").toLowerCase()}`);
                  handleMenuClick();
                }}
                className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105 focus:outline-none"
              >
                {link}
              </button>
            </li>
          ))}

          {/* Admin Link */}
          <li className="mb-4 lg:mb-0">
            <button
              className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105 focus:outline-none"
              onClick={handleAdminClick}
            >
              Admin
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
