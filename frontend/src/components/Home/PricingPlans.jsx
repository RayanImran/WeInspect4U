import React from "react";

const ComparisonTable = () => {
  const competitors = [
    {
      name: "AutoInspectors",
      price: "$199",
      certified: true,
      home: true,
      unbiased: true,
      service: true,
      warranty: true,
      repairs: true,
    },
    {
      name: "BMW",
      price: "$220",
      certified: true,
      home: false,
      unbiased: false,
      service: false,
      warranty: false,
      repairs: false,
    },
    {
      name: "Canadian Tire",
      price: "$140-$200",
      certified: true,
      home: false,
      unbiased: false,
      service: false,
      warranty: false,
      repairs: false,
    },
    {
      name: "Local Repair Shops",
      price: "$70-$130",
      certified: true,
      home: false,
      unbiased: false,
      service: false,
      warranty: false,
      repairs: false,
    },
    {
      name: "Other Mobile Companies",
      price: "$169-$329",
      certified: "depends",
      home: "depends",
      unbiased: "depends",
      service: "depends",
      warranty: "depends",
      repairs: false,
    },
  ];

  const renderIcon = (value) => {
    if (value === true)
      return <span className="text-green-500 font-bold">✔️</span>;
    if (value === false)
      return <span className="text-red-500 font-bold">✖️</span>;
    return <span className="text-yellow-500 font-bold">⚠️</span>; // For "depends"
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
          Why Choose <span className="text-green-600">AutoInspectors?</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Compare our unbiased, certified inspections with others in the market.
        </p>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-800 text-white text-left">
                <th className="py-3 px-4 font-medium">Service</th>
                {competitors.map((competitor, index) => (
                  <th key={index} className="py-3 px-4 font-medium text-center">
                    {competitor.name}
                    <p className="text-sm text-gray-300">{competitor.price}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Rows */}
              <tr className="hover:bg-gray-100">
                <td className="py-3 px-4 font-medium text-gray-800">
                  Certified Mechanics
                </td>
                {competitors.map((competitor, index) => (
                  <td key={index} className="py-3 px-4 text-center">
                    {renderIcon(competitor.certified)}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="py-3 px-4 font-medium text-gray-800">
                  Stay at Home
                </td>
                {competitors.map((competitor, index) => (
                  <td key={index} className="py-3 px-4 text-center">
                    {renderIcon(competitor.home)}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="py-3 px-4 font-medium text-gray-800">
                  Unbiased Opinion
                </td>
                {competitors.map((competitor, index) => (
                  <td key={index} className="py-3 px-4 text-center">
                    {renderIcon(competitor.unbiased)}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="py-3 px-4 font-medium text-gray-800">
                  Service Under 24h
                </td>
                {competitors.map((competitor, index) => (
                  <td key={index} className="py-3 px-4 text-center">
                    {renderIcon(competitor.service)}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="py-3 px-4 font-medium text-gray-800">
                  Repairs to Plan
                </td>
                {competitors.map((competitor, index) => (
                  <td key={index} className="py-3 px-4 text-center">
                    {renderIcon(competitor.repairs)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Call to Action
        <div className="text-center mt-8">
          <button
            onClick={() => alert("Navigate to booking")}
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg shadow-lg font-bold transition"
          >
            Book Inspection
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ComparisonTable;
