import React, { useEffect, useState } from "react";
import { Clock, Package, Trash } from "lucide-react";
import ConfirmationModal from "../components/ConfirmationModal"; // import modal

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrders, setSelectedOrders] = useState([]); 
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [deleteType, setDeleteType] = useState(null); 
  const [deleteIndex, setDeleteIndex] = useState(null);

  useEffect(() => {
    let savedOrders = JSON.parse(localStorage.getItem("orderStickers")) || [];
    setOrders(savedOrders);
  }, []);

  const deleteOrder = (index) => {
    const updated = orders.filter((_, i) => i !== index);
    setOrders(updated);
    localStorage.setItem("orderStickers", JSON.stringify(updated));
  };

  const deleteSelected = () => {
    const updated = orders.filter((_, i) => !selectedOrders.includes(i));
    setOrders(updated);
    localStorage.setItem("orderStickers", JSON.stringify(updated));
    setSelectedOrders([]);
  };

  const deleteAll = () => {
    localStorage.removeItem("orderStickers");
    setOrders([]);
    setSelectedOrders([]);
  };

  const toggleSelect = (index) => {
    if (selectedOrders.includes(index)) {
      setSelectedOrders(selectedOrders.filter((i) => i !== index));
    } else {
      setSelectedOrders([...selectedOrders, index]);
    }
  };

  const filteredOrders = orders.filter((order) => {
    if (!startDate && !endDate) return true;

    const orderDate = new Date(order.createdAt);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    if (start && orderDate < start) return false;
    if (end) {
      const endCopy = new Date(end);
      endCopy.setHours(23, 59, 59, 999);
      if (orderDate > endCopy) return false;
    }

    return true;
  });

  const formatDate = (isoString) => {
    const d = new Date(isoString);
    return d.toLocaleString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const confirmDelete = (type, index = null) => {
    setDeleteType(type);
    setDeleteIndex(index);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    if (deleteType === "single" && deleteIndex !== null) {
      deleteOrder(deleteIndex);
    } else if (deleteType === "selected") {
      deleteSelected();
    } else if (deleteType === "all") {
      deleteAll();
    }

    setShowModal(false);
    setDeleteType(null);
    setDeleteIndex(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 py-10 mt-40 mb-40">
      <h2 className="text-2xl font-bold text-center mb-10">Riwayat Pesanan</h2>

      {/* Filter tanggal */}
      <div className="flex justify-center gap-4 mb-6">
        <div>
          <label className="text-sm text-gray-600">Dari</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border p-1 rounded ml-2"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">Sampai</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border p-1 rounded ml-2"
          />
        </div>
      </div>

      {/* Tombol hapus */}
      <div className="flex justify-end gap-4 mb-4 p-2">
          {filteredOrders.length > 0 && (

        <button
          onClick={() => confirmDelete("selected")}
          className="text-red-600 flex gap-2 cursor-pointer"
          disabled={selectedOrders.length === 0}
        >
          {selectedOrders.length > 0 && (
            <span className="font-bold">{selectedOrders.length}</span>
          )}
          Hapus terpilih <Trash size={20} />
        </button>
          )}

        {/* {orders.length > 0 && (
          <button
            onClick={() => confirmDelete("all")}
            className="text-red-600 flex gap-2 cursor-pointer"
          >
            Hapus semua <Trash size={20} />
          </button>
        )} */}
      </div>

      {/* List pesanan */}
      {filteredOrders.length === 0 ? (
        <p className="text-center text-gray-500">
          Tidak ada pesanan dalam rentang ini.
        </p>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-start gap-3"
            >
              <input
                type="checkbox"
                checked={selectedOrders.includes(index)}
                onChange={() => toggleSelect(index)}
                className="mt-1"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Package size={18} className="text-green-600" />
                    {order.type}
                  </h3>
                  <button
                    onClick={() => confirmDelete("single", index)}
                    className="text-red-600 cursor-pointer"
                  >
                    <Trash size={20} />
                  </button>
                </div>
                <p className="text-gray-700 mb-1">
                  <strong>Nama:</strong> {order.name}
                </p>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock size={14} />
                  {formatDate(order.createdAt)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Konfirmasi */}
      <ConfirmationModal
        isOpen={showModal}
        title="Konfirmasi Hapus"
        message={
          deleteType === "single"
            ? "Yakin ingin menghapus pesanan ini?"
            : deleteType === "selected"
            ? "Yakin ingin menghapus pesanan yang dipilih?"
            : "Yakin ingin menghapus semua pesanan?"
        }
        onCancel={() => setShowModal(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default OrderHistory;
