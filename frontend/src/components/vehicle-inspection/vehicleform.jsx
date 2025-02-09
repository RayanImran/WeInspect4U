import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useJsApiLoader } from "@react-google-maps/api";
import emailjs from "emailjs-com";
import backgroundImage from "../../assets/FormImages/inspection-order.jpg";

// Subcomponents
import SellerInformation from "./SellerInformation";
import AddonsSelect from "./AddonsSelect";
import TermsAndConditionsModal from "./TermsAndConditionsModal";

const VehicleForm = () => {
  // PERSONAL DETAILS
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [willBePresent, setWillBePresent] = useState(false);

  // VEHICLE INFO
  const [vehicleYear, setVehicleYear] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [vin, setVin] = useState("");
  const [address, setAddress] = useState("");

  // ADD-ONS
  const [addons, setAddons] = useState({ carfax: false, termsCondition: false });

  // SUBMISSION & TERMS
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [formData, setFormData] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const navigate = useNavigate();

  // Reset submission state on mount
  useEffect(() => {
    setIsSubmitted(false);
  }, []);

  // EmailJS submission
  const sendFormDetails = (finalData) => {
    emailjs
      .send(
        "service_8kk6fug",   // Your EmailJS service ID
        "template_r94velc", // Your EmailJS template ID
        finalData,
        "vdmHT32R3PRC5Ei7c" // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setIsSubmitted(true);
          setTimeout(() => navigate("/inspection"), 2000);
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect all data
    const newFormData = {
      // Personal details
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
      willBePresent: willBePresent ? "Yes" : "No",

      // Vehicle details
      vehicleYear,
      selectedMake,
      selectedModel,
      sellerName,
      contactNumber,
      vin,
      address,

      // Add-ons
      carfax: addons.carfax ? "Yes" : "No",
      termsCondition: addons.termsCondition ? "Yes" : "No",
    };

    // Show Terms & Conditions (the existing final disclaimer) before sending
    setFormData(newFormData);
    setShowTerms(true);
  };

  const handleAcceptTerms = () => {
    setShowTerms(false);
    if (formData) {
      sendFormDetails(formData);
    }
  };

  if (!isLoaded) return <div>Loading Google Maps...</div>;

  return (
    <div className="bg-gray-900 min-h-screen py-8">
      <div className="container mx-auto max-w-4xl px-4">
        {isSubmitted ? (
          // SUCCESS MESSAGE
          <div className="bg-white p-8 shadow-xl rounded-lg text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Thank You!
            </h1>
            <p className="text-lg text-gray-700">
              Your inspection request has been submitted. We will contact you soon.
            </p>
          </div>
        ) : (
          // MAIN FORM
          <form
            className="bg-white p-8 shadow-2xl rounded-lg space-y-6"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
              Order Vehicle Inspection
            </h1>

            {/* PERSONAL DETAILS */}
            <div className="p-4 rounded-md space-y-6 bg-gray-50">
              <h2 className="text-xl font-bold text-gray-800">Personal Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="block text-md font-medium text-gray-700">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                {/* Last Name */}
                <div>
                  <label className="block text-md font-medium text-gray-700">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-md font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-md font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* "I will be present" */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="presentCheckbox"
                  className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                  checked={willBePresent}
                  onChange={(e) => setWillBePresent(e.target.checked)}
                />
                <label htmlFor="presentCheckbox" className="ml-2 text-gray-700">
                  I will be present during the inspection
                </label>
              </div>
            </div>

            {/* VEHICLE TO BE INSPECTED */}
            <SellerInformation
              vehicleYear={vehicleYear}
              setVehicleYear={setVehicleYear}
              selectedMake={selectedMake}
              setSelectedMake={setSelectedMake}
              selectedModel={selectedModel}
              setSelectedModel={setSelectedModel}
              sellerName={sellerName}
              setSellerName={setSellerName}
              contactNumber={contactNumber}
              setContactNumber={setContactNumber}
              vin={vin}
              setVin={setVin}
              address={address}
              setAddress={setAddress}
            />

            {/* ADD-ONS (now includes Terms of Condition) */}
            <AddonsSelect addons={addons} setAddons={setAddons} />

            {/* SUBMIT BUTTON */}
            <div className="text-center mt-8">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition transform hover:scale-105 duration-300 ease-out"
              >
                Submit Inspection Request
              </button>
            </div>
          </form>
        )}

        {/* EXISTING TERMS & CONDITIONS MODAL (FINAL DISCLAIMER) */}
        {showTerms && (
          <TermsAndConditionsModal
            onAccept={handleAcceptTerms}
            onCancel={() => setShowTerms(false)}
          />
        )}
      </div>
    </div>
  );
};

export default VehicleForm;
