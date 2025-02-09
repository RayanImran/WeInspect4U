import React, { useState } from "react";

const AddonsSelect = ({ addons, setAddons }) => {
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleAddonsChange = (e) => {
    const { name, checked } = e.target;
    setAddons({ ...addons, [name]: checked });
  };

  return (
    <div className="border p-4 bg-gray-100 rounded-md">
      <h3 className="text-lg font-bold text-gray-700 mb-2">
        Inspection Add-Ons
      </h3>
      <p className="text-gray-600 mb-4">
        Enhance your inspection package with these optional services!
      </p>

      {/* CARFAX */}
      <div className="space-y-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="carfax"
            id="carfax"
            className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
            checked={addons.carfax}
            onChange={handleAddonsChange}
          />
          <label htmlFor="carfax" className="ml-2 text-gray-700">
            $25.99 - CARFAX Vehicle History Report
            <span className="text-red-500"> (Limited time discount)</span>
          </label>
        </div>
      </div>

      {/* TERMS OF CONDITION */}
      <div className="mt-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="termsCondition"
            id="termsCondition"
            className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
            checked={addons.termsCondition}
            onChange={handleAddonsChange}
          />
          <label htmlFor="termsCondition" className="ml-2 text-gray-700">
            I agree to the{" "}
            <button
              type="button"
              onClick={() => setShowTermsModal(true)}
              className="text-blue-600 underline"
            >
              Terms of Condition
            </button>
          </label>
        </div>
      </div>

      {/* POPUP MODAL FOR TERMS OF CONDITION */}
      {showTermsModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
          <div className="bg-white w-11/12 md:w-1/2 p-6 rounded shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">Terms of Condition</h2>
            <div className="max-h-64 overflow-y-auto text-gray-700">
              <p className="mb-2">
                <strong>Scope:</strong> These Terms of Condition describe the
                responsibilities of both the customer and the inspection service
                provider. By checking the box, you agree to follow these terms.
              </p>
              <p className="mb-2">
                <strong>Inspection Limitations:</strong> The inspection is based
                on visible and accessible components at the time of service. No
                guarantee is offered regarding unforeseen or hidden issues.
              </p>
              <p className="mb-2">
                <strong>Liability:</strong> The provider will not be held liable
                for any subsequent damage or repairs needed after the inspection
                is performed.
              </p>
              <p className="mb-2">
                <strong>Data Use:</strong> Personal data collected is used for
                scheduling and performing the inspection. We do not sell or share
                your information with third parties beyond what is necessary to
                complete the requested service.
              </p>
              <p className="mb-2">
                <em>
                  Note: These are sample terms. Customize or replace them with
                  your actual legal terms/policies.
                </em>
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowTermsModal(false)}
              className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddonsSelect;
