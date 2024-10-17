//WeInspect4U/frontend/src/components/Admin/Admin.jsx
import React, { useState } from "react";

function Admin() {
  const [formData, setFormData] = useState({
    clientFullName: "",
    clientEmail: "",
    clientPhone: "",
    clientAddress: "",
    location: "",
    preparedBy: "",
    conductedOn: "",
    vehicleIdentificationType: "VIN",
    vin: "",
    licensePlate: "",
    identificationType: "",
    mileage: "",
    brakeSystem: "OK",
    parkingBrakes: "OK",
    brakeDrums: "OK",
    brakeHose: "OK",
    lowPressureWarning: "OK",
    fifthWheel: "OK",
    pintleHooks: "OK",
    towbar: "OK",
    fanBelts: "OK",
    oilPressure: "OK",
    radiator: "OK",
    battery: "OK",
    exhaustSystem: "OK",
    wiringAndFuelLine: "OK",
    muffler: "OK",
    fuelLeak: "OK",
    fuelCap: "OK",
    fuelTankAttached: "OK",
    headlights: "OK",
    brakeLights: "OK",
    tailLights: "OK",
    dashLights: "OK",
    clearanceLights: "OK",
    turnIndicators: "OK",
    seatBelts: "OK",
    fireExtinguisher: "OK",
    flagsFlares: "OK",
    decals: "OK",
    spareBulbs: "OK",
    cargoProtection: "OK",
    liftGate: "OK",
    steeringWheelFreePlay: "OK",
    steeringColumn: "OK",
    frontAxleBeam: "OK",
    steeringGearBox: "OK",
    pitmanArm: "OK",
    powerSteering: "OK",
    ballSocketJoints: "OK",
    tieRods: "OK",
    uBolts: "OK",
    springAssembly: "OK",
    tireCondition: "OK",
    tireAirPressure: "OK",
    chains: "OK",
    wheelsRims: "OK",
    lockRings: "OK",
    fasteners: "OK",
    welds: "OK",
    windshield: "OK",
    wiperBlades: "OK",
    transmissionFluid: "OK",
    clutchFreePlay: "OK",
    heaterDefroster: "OK",
    mirrors: "OK",
    frame: "OK",
    body: "OK",
    otherObservations: "",
    overallCondition: "Good",
    recommendations: "",
    inspectorName: "",
    notes: {}
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentField, setCurrentField] = useState("");
  const [currentNote, setCurrentNote] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddNoteClick = (field) => {
    setCurrentField(field);
    setCurrentNote(formData.notes[field] || "");
    setIsModalOpen(true);
  };

  const handleSaveNote = () => {
    setFormData({
      ...formData,
      notes: {
        ...formData.notes,
        [currentField]: currentNote,
      },
    });
    setIsModalOpen(false);
  };

  const handleDeleteNote = () => {
    const updatedNotes = { ...formData.notes };
    delete updatedNotes[currentField];
    setFormData({
      ...formData,
      notes: updatedNotes,
    });
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNoteChange = (e) => {
    setCurrentNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit the form data to the server or process it as needed
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Vehicle Inspection Form</h1>
      <form className="bg-white p-6 shadow-md rounded-md" onSubmit={handleSubmit}>
        {/* Client Information */}
        <h2 className="text-xl font-semibold mb-2">Client Information</h2>
        {["clientFullName", "clientEmail", "clientPhone", "clientAddress"].map((item) => (
          <div className="mb-4" key={item}>
            <label className="block text-gray-700 capitalize">{item.replace(/([A-Z])/g, " $1")}</label>
            <input
              type="text"
              name={item}
              value={formData[item]}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        ))}

        {/* Location and Inspection Info */}
        <h2 className="text-xl font-semibold mb-2">Inspection Information</h2>
        {["location", "preparedBy", "conductedOn"].map((item) => (
          <div className="mb-4" key={item}>
            <label className="block text-gray-700 capitalize">{item.replace(/([A-Z])/g, " $1")}</label>
            <div className="flex items-center">
              <input
                type="text"
                name={item}
                value={formData[item]}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
              <button
                type="button"
                onClick={() => handleAddNoteClick(item)}
                className="ml-4 bg-blue-500 text-white px-4 py-1 rounded-md text-sm"
              >
                {formData.notes[item] ? "Edit Note" : "Add Note"}
              </button>
            </div>
            {formData.notes[item] && <p className="text-sm text-gray-500 mt-1">Note: {formData.notes[item]}</p>}
          </div>
        ))}

        <div className="mb-4">
          <label className="block text-gray-700">Vehicle Identification Type</label>
          <div className="flex items-center">
            <select
              name="vehicleIdentificationType"
              value={formData.vehicleIdentificationType}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="VIN">VIN</option>
              <option value="License Plate #">License Plate #</option>
              <option value="Other">Other</option>
            </select>
            <button
              type="button"
              onClick={() => handleAddNoteClick("vehicleIdentificationType")}
              className="ml-4 bg-blue-500 text-white px-4 py-1 rounded-md text-sm"
            >
              {formData.notes.vehicleIdentificationType ? "Edit Note" : "Add Note"}
            </button>
          </div>
          {formData.notes.vehicleIdentificationType && <p className="text-sm text-gray-500 mt-1">Note: {formData.notes.vehicleIdentificationType}</p>}
        </div>

        {/* VIN and License Plate */}
        {["vin", "licensePlate", "identificationType", "mileage"].map((item) => (
          <div className="mb-4" key={item}>
            <label className="block text-gray-700 capitalize">{item.replace(/([A-Z])/g, " $1")}</label>
            <div className="flex items-center">
              <input
                type="text"
                name={item}
                value={formData[item]}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
              <button
                type="button"
                onClick={() => handleAddNoteClick(item)}
                className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md text-sm"
              >
                {formData.notes[item] ? "Edit Note" : "Add Note"}
              </button>
            </div>
            {formData.notes[item] && <p className="text-sm text-gray-500 mt-1">Note: {formData.notes[item]}</p>}
          </div>
        ))}

        {/* Inspection Items */}
        <h2 className="text-xl font-semibold mt-6 mb-2">Inspection Items</h2>
        {[
          "brakeSystem", "parkingBrakes", "brakeDrums", "brakeHose", "lowPressureWarning", 
          "fifthWheel", "pintleHooks", "towbar", "fanBelts", "oilPressure", "radiator", "battery",
          "exhaustSystem", "wiringAndFuelLine", "muffler", "fuelLeak", "fuelCap", "fuelTankAttached",
          "headlights", "brakeLights", "tailLights", "dashLights", "clearanceLights", "turnIndicators",
          "seatBelts", "fireExtinguisher", "flagsFlares", "decals", "spareBulbs", "cargoProtection", 
          "liftGate", "steeringWheelFreePlay", "steeringColumn", "frontAxleBeam", "steeringGearBox", 
          "pitmanArm", "powerSteering", "ballSocketJoints", "tieRods", "uBolts", "springAssembly",
          "tireCondition", "tireAirPressure", "chains", "wheelsRims", "lockRings", "fasteners", 
          "welds", "windshield", "wiperBlades", "transmissionFluid", "clutchFreePlay", "heaterDefroster", 
          "mirrors", "frame", "body"
        ].map((item) => (
          <div className="mb-4" key={item}>
            <label className="block text-gray-700 capitalize">{item.replace(/([A-Z])/g, " $1")}</label>
            <div className="flex items-center">
              <select
                name={item}
                value={formData[item]}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="OK">OK</option>
                <option value="Needs Repair">Needs Repair</option>
                <option value="Not Applicable">Not Applicable</option>
              </select>
              <button
                type="button"
                onClick={() => handleAddNoteClick(item)}
                className="ml-4 bg-blue-500 text-white px-4 py-1 rounded-md text-sm"
              >
                {formData.notes[item] ? "Edit Note" : "Add Note"}
              </button>
            </div>
            {formData.notes[item] && <p className="text-sm text-gray-500 mt-1">Note: {formData.notes[item]}</p>}
          </div>
        ))}

        {/* Summary */}
        <div className="mb-4">
          <label className="block text-gray-700">Enter any other observations</label>
          <textarea
            name="otherObservations"
            value={formData.otherObservations}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Overall Condition</label>
          <select
            name="overallCondition"
            value={formData.overallCondition}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
            <option value="High Risk">High Risk</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Recommendations</label>
          <textarea
            name="recommendations"
            value={formData.recommendations}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Inspector Name</label>
          <input
            type="text"
            name="inspectorName"
            value={formData.inspectorName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Submit
        </button>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-6 rounded-md shadow-lg">
            <h3 className="text-lg font-bold mb-4">Add/Edit Note</h3>
            <textarea
              value={currentNote}
              onChange={handleNoteChange}
              className="w-full p-2 border rounded-md mb-4"
              rows="4"
              placeholder={`Add or edit a note for ${currentField.replace(/([A-Z])/g, " $1")}`}
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={handleCloseModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteNote}
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Delete Note
              </button>
              <button
                onClick={handleSaveNote}
                className="ml-4 bg-blue-500 text-white px-4 py-1 rounded-md text-sm"
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;