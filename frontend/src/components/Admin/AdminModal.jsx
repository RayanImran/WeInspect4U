// src/components/Admin/AdminModal.jsx

import React from "react";

const AdminModal = ({
  isOpen,
  fieldLabel,
  currentNote,
  onClose,
  onChange,
  onDelete,
  onSave,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-6 rounded-md shadow-lg">
        <h3 className="text-lg font-bold mb-4">Add/Edit Note</h3>
        <textarea
          value={currentNote}
          onChange={onChange}
          className="w-full p-2 border rounded-md mb-4"
          rows="4"
          placeholder={`Add or edit a note for ${fieldLabel}`}
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Delete Note
          </button>
          <button
            onClick={onSave}
            className="ml-4 bg-blue-500 text-white px-4 py-1 rounded-md text-sm"
          >
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminModal;
