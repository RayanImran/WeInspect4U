import React from "react";
import { useNavigate } from "react-router-dom";
import inspectionGif from "../../assets/HomeImages/inspection-gif.gif"; // Update this path if needed

const Carousel = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/inspection");
  };

  return (
    <div className="relative w-full h-[700px] overflow-hidden -mt-1">
      {/* GIF Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${inspectionGif})`,
        }}
      ></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
        <h1
          className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-6 transition-opacity duration-1000 ease-out"
          style={{ color: "#E6B422" }} // Golden color for emphasis
        >
          Buying a Used Car in Winnipeg?
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold drop-shadow-md mb-6 transition-opacity duration-1000 ease-out">
          Let us Inspect it First – Right Where You Are, When You Need It!
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
          Avoid car scams and fake safety inspections with our trusted mechanics. We provide detailed inspection reports to ensure you're making safe, informed purchases—all at your convenience.
        </p>
        <button
          onClick={handleButtonClick}
          className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition transform hover:scale-105 duration-300 ease-out"
        >
          BOOK AN INSPECTION
        </button>
        <div className="mt-8 text-gray-300 text-sm">
          <p>Trusted by thousands of car buyers in Winnipeg</p>
          <p>Fast, Reliable, and On-Demand Services</p>
          {/* abcs */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
