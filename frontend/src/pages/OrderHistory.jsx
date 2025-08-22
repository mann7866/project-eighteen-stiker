import React, { useEffect, useState } from "react";
import { Clock, Package, Trash } from "lucide-react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrders, setSelectedOrders] = useState([]); // untuk ceklist
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    let savedOrders = JSON.parse(localStorage.getItem("orderStickers")) || [];
    setOrders(savedOrders);
  }, []);

  // Hapus per item
  const deleteOrder = (index) => {
    const updated = orders.filter((_, i) => i !== index);
    setOrders(updated);
    localStorage.setItem("orderStickers", JSON.stringify(updated));
  };

  // Hapus yang dipilih via ceklist
  const deleteSelected = () => {
    const updated = orders.filter((_, i) => !selectedOrders.includes(i));
    setOrders(updated);
    localStorage.setItem("orderStickers", JSON.stringify(updated));
    setSelectedOrders([]);
  };

  // Hapus semua
  const deleteAll = () => {
    localStorage.removeItem("orderStickers");
    setOrders([]);
    setSelectedOrders([]);
  };

  // Handle ceklist toggle
  const toggleSelect = (index) => {
    if (selectedOrders.includes(index)) {
      setSelectedOrders(selectedOrders.filter((i) => i !== index));
    } else {
      setSelectedOrders([...selectedOrders, index]);
    }
  };

  // Filter tanggal (pakai createdAt)
  const filteredOrders = orders.filter((order) => {
    if (!startDate && !endDate) return true;

    const orderDate = new Date(order.createdAt); // valid karena ISO
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    if (start && orderDate < start) return false;
    if (end) {
      // tambahin 1 hari biar inclusive
      end.setHours(23, 59, 59, 999);
      if (orderDate > end) return false;
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
        <button
          onClick={deleteSelected}
          className="text-red-600 flex gap-2 cursor-pointer"
          disabled={selectedOrders.length === 0}
        >
          {selectedOrders.length > 0 && (
            <span className="font-bold">{selectedOrders.length}</span>
          )}
          Hapus terpilih <Trash size={20} />
        </button>
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
              {/* Checklist */}
              <input
                type="checkbox"
                checked={selectedOrders.includes(index)}
                onChange={() => toggleSelect(index)}
                className="mt-1"
              />

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Package size={18} className="text-green-600" />
                    {order.type}
                  </h3>
                  <button
                    onClick={() => deleteOrder(index)}
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
    </div>
  );
};

export default OrderHistory;
