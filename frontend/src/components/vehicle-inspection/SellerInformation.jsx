import React from "react";
import VehicleYearSelect from "./VehicleYearSelect";
import VehicleMakeSelect from "./VehicleMakeSelect";
import VehicleModelSelect from "./VehicleModelSelect";
import AddressInput from "./AddressInput";

const SellerInformation = ({
  // Vehicle Year/Make/Model
  vehicleYear,
  setVehicleYear,
  selectedMake,
  setSelectedMake,
  selectedModel,
  setSelectedModel,

  // Seller/Dealership
  sellerName,
  setSellerName,
  contactNumber,
  setContactNumber,

  // VIN
  vin,
  setVin,

  // Address
  address,
  setAddress,
}) => {
  return (
    <div className="p-4 rounded-md space-y-6 bg-gray-50">
      <h2 className="text-xl font-bold text-gray-800">
        Vehicle to be Inspected
      </h2>

      {/* Year, Make, Model */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <VehicleYearSelect
          vehicleYear={vehicleYear}
          setVehicleYear={setVehicleYear}
        />
        <VehicleMakeSelect
          selectedMake={selectedMake}
          setSelectedMake={setSelectedMake}
          setSelectedModel={setSelectedModel}
        />
        <VehicleModelSelect
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          selectedMake={selectedMake}
        />
      </div>

      {/* Seller/Dealership Name (Optional) and Contact Number (Required) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="seller-name"
            className="block text-md font-medium text-gray-700"
          >
            Seller/Dealership Name (Optional)
          </label>
          <input
            type="text"
            id="seller-name"
            className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
            placeholder="John Doe or XYZ Dealership"
          />
        </div>

        <div>
          <label
            htmlFor="contact-number"
            className="block text-md font-medium text-gray-700"
          >
            Seller's Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="contact-number"
            className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="Enter seller's contact number"
            required
          />
        </div>
      </div>

      {/* VIN (Optional) */}
      <div>
        <label
          htmlFor="vin"
          className="block text-md font-medium text-gray-700"
        >
          VIN (Optional)
        </label>
        <input
          type="text"
          id="vin"
          className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
          placeholder="Vehicle Identification Number"
        />
      </div>

      {/* Address (Required) */}
      <AddressInput address={address} setAddress={setAddress} />
    </div>
  );
};

export default SellerInformation;
