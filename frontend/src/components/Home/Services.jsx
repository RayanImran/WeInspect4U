import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Wrench, FileText } from "lucide-react"; // Icons from lucide-react
import { motion } from "framer-motion"; // For animations (install with `npm install framer-motion`)

const Services = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/inspection");
  };

  return (
    <div className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-5xl font-bold text-center mb-12 text-yellow-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          How It Works
        </motion.h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition-transform hover:scale-105 duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-yellow-400 p-4 rounded-full mb-4">
              <Calendar size={40} className="text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">
              Step 1: Book Your Inspection
            </h3>
            <p className="text-center text-gray-300 mb-6 leading-relaxed">
              <span className="font-semibold text-yellow-300">Share</span> your
              car's details, seller's info, and your preferred inspection time.{" "}
              <span className="italic text-yellow-200">It's quick and easy!</span>
            </p>
            <button
              onClick={handleButtonClick}
              className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700 transition duration-300"
            >
              Order Inspection
            </button>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition-transform hover:scale-105 duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-yellow-400 p-4 rounded-full mb-4">
              <Wrench size={40} className="text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">
              Step 2: Inspection
            </h3>
            <p className="text-center text-gray-300 leading-relaxed">
              Our expert mechanic will{" "}
              <span className="font-semibold text-yellow-300">coordinate</span>{" "}
              with the seller, confirm the car is available, and inspect it
              thoroughly—<span className="italic text-yellow-200">hassle-free!</span>
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition-transform hover:scale-105 duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-yellow-400 p-4 rounded-full mb-4">
              <FileText size={40} className="text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">
              Step 3: Get Your Report
            </h3>
            <p className="text-center text-gray-300 mb-6 leading-relaxed">
              <span className="font-semibold text-yellow-300">Get</span> a
              detailed inspection report with everything you need to make a{" "}
              <span className="italic text-yellow-200">confident decision.</span>
            </p>
            <a
              href="/sample-report"
              className="text-yellow-400 font-semibold hover:underline"
            >
              View Sample Report
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
