import React from "react";
import { useNavigate } from "react-router-dom";
import carImage from "../../assets/HomeImages/corosol.jpg"; // Ensure the path is correct

const Carousel = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/inspection");
  };

  return (
    <div className="relative w-full h-[700px] overflow-hidden -mt-1">
      {/* Background Image */}
      <img
        src={carImage}
        alt="Car background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center -20px" }} // Adjust -20px as needed
        loading="eager"
      />

      {/* Refined Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg mb-4 transition-opacity duration-1000 ease-out">
          Don’t Buy Trouble – Get It Inspected First!
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed transition-opacity duration-1000 ease-out">
          Get your pre-purchase car inspection today with AutoInspectors. We’re
          here to ensure you don’t drive off with trouble.
        </p>
        <button
          onClick={handleButtonClick}
          className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition transform hover:scale-105 duration-300 ease-out"
        >
          ORDER INSPECTION
        </button>
      </div>
    </div>
  );
};

export default Carousel;
