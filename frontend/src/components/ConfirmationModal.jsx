import React from "react";

const ConfirmationModal = ({ isOpen, title, message, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-3 py-1 border rounded"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-3 py-1 bg-red-600 text-white rounded"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
