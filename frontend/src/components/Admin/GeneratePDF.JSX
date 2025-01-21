// src/components/Admin/GeneratePDF.js

import { jsPDF } from "jspdf";
import "jspdf-autotable";

/**
 * Generate a detailed PDF with:
 *  - Client Info
 *  - Inspection Info
 *  - Inspection Items (table)
 *  - Observations, Recommendations, Condition
 *  - Images
 */
export async function generatePDF(formData, images = []) {
  const doc = new jsPDF({
    orientation: "p",
    unit: "pt",
    format: "letter",
  });

  // ========================
  // 1) Header Section
  // ========================
  doc.setFontSize(18);
  doc.text("Vehicle Inspection Report", 40, 40);

  doc.setFontSize(12);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 400, 40); // top-right corner

  // Prepared By, Inspector
  doc.text(`Prepared By: ${formData.preparedBy || "N/A"}`, 40, 60);
  doc.text(`Inspector: ${formData.inspectorName || "N/A"}`, 40, 80);

  // ========================
  // 2) Client Information Table
  // ========================
  doc.text("Client Information", 40, 110);
  doc.autoTable({
    startY: 120,
    theme: "grid",
    head: [["Field", "Details"]],
    body: [
      ["Full Name", formData.clientFullName || "N/A"],
      ["Email", formData.clientEmail || "N/A"],
      ["Phone", formData.clientPhone || "N/A"],
      ["Address", formData.clientAddress || "N/A"],
    ],
    styles: { halign: "left" },
  });

  // We'll track finalY so the next table doesn't overlap
  let finalY = doc.lastAutoTable.finalY;

  // ========================
  // 3) Inspection Info
  // ========================
  doc.text("Inspection Information", 40, finalY + 30);
  doc.autoTable({
    startY: finalY + 40,
    theme: "grid",
    head: [["Field", "Details"]],
    body: [
      ["Location", formData.location || "N/A"],
      ["Conducted On", formData.conductedOn || "N/A"],
      ["Vehicle ID Type", formData.vehicleIdentificationType || "N/A"],
      ["VIN", formData.vin || "N/A"],
      ["License Plate", formData.licensePlate || "N/A"],
      ["Identification Type", formData.identificationType || "N/A"],
      ["Mileage", formData.mileage || "N/A"],
    ],
    styles: { halign: "left" },
  });
  finalY = doc.lastAutoTable.finalY;

  // ========================
  // 4) Inspection Items Table
  // ========================
  doc.text("Inspection Items", 40, finalY + 30);

  // We know your form has many fields. We'll filter out
  // fields that are strictly "inspection items" (like brakeSystem, etc.).
  // We'll skip the main fields used above (client / location / etc.).
  // Then create an array for autoTable.
  const ignoreKeys = new Set([
    "clientFullName",
    "clientEmail",
    "clientPhone",
    "clientAddress",
    "location",
    "preparedBy",
    "conductedOn",
    "vehicleIdentificationType",
    "vin",
    "licensePlate",
    "identificationType",
    "mileage",
    "otherObservations",
    "overallCondition",
    "recommendations",
    "inspectorName",
    "notes",
  ]);

  // Build data for all non-ignored string fields
  const inspectionItems = Object.entries(formData)
    .filter(([key, value]) => typeof value === "string" && !ignoreKeys.has(key))
    .map(([key, value]) => [capitalizeLabel(key), value]);

  doc.autoTable({
    startY: finalY + 40,
    theme: "grid",
    head: [["Component", "Status (or Value)"]],
    body: inspectionItems,
    styles: { halign: "left" },
  });
  finalY = doc.lastAutoTable.finalY;

  // ========================
  // 5) Observations, Recommendations, Condition
  // ========================
  doc.text("Other Observations", 40, finalY + 30);
  doc.setFontSize(11);
  doc.text(formData.otherObservations || "N/A", 40, finalY + 50, {
    maxWidth: 500,
  });

  doc.setFontSize(12);
  doc.text("Recommendations", 40, finalY + 80);
  doc.setFontSize(11);
  doc.text(formData.recommendations || "N/A", 40, finalY + 100, {
    maxWidth: 500,
  });

  doc.setFontSize(12);
  doc.text("Overall Condition", 40, finalY + 130);
  doc.setFontSize(11);
  doc.text(formData.overallCondition || "N/A", 40, finalY + 150, {
    maxWidth: 500,
  });

  // If the content goes too far, we can check if finalY+someHeight
  // is beyond the page, and add doc.addPage if needed.
  // But for simplicity, let's let autoTable handle page breaks.

  // ========================
  // 6) Images
  // ========================
  if (images.length > 0) {
    doc.addPage();
    doc.setFontSize(14);
    doc.text("Inspection Photos", 40, 40);

    let yPos = 70; // start after the heading

    for (let i = 0; i < images.length; i++) {
      const file = images[i];
      const base64Image = await fileToBase64(file);

      // If it's PNG use "PNG", otherwise use "JPEG"
      const isPng = file.type.toLowerCase().includes("png");
      const imgType = isPng ? "PNG" : "JPEG";

      // Add the image at (x=40, y=yPos) with a fixed size
      doc.addImage(base64Image, imgType, 40, yPos, 200, 120);
      yPos += 140;

      // If we approach bottom, add a new page:
      if (yPos > 680) {
        doc.addPage();
        yPos = 40;
      }
    }
  }

  // ========================
  // 7) Save the PDF
  // ========================
  doc.save("VehicleInspectionReport.pdf");
}

/**
 * Convert a File object to base64 string
 */
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

/**
 * Nicely format field names like 'brakeSystem' -> 'Brake System'
 */
function capitalizeLabel(key) {
  // Replace camelCase with spaced words
  const spaced = key.replace(/([A-Z])/g, " $1");
  // Capitalize first letter
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}
