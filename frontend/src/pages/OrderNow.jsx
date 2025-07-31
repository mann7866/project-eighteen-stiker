import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const OrderNow = () => {
  const [type, setType] = useState("");
  const [subtype, setSubtype] = useState("");
  const [description, setDescription] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const urlType = searchParams.get("type");
    if (urlType) {
      setType(urlType);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "Stiker" && (Number(height) <= 0 || Number(width) <= 0)) {
      alert("Tinggi dan Lebar harus lebih dari 0 cm.");
      return;
    }

    let message = `*Pesanan Baru*\n`;
    message += `Jenis: ${type}\n`;
    message += `Tipe: ${subtype}\n`;

    if (type === "Stiker") {
      message += `Ukuran: tinggi ${height} cm x lebar ${width} cm\n`;
    }

    message += `Deskripsi:\n${description}\n`;
    message += `\n📎 *Catatan:* Silakan kirim foto desain secara manual di chat ini.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/6283891620352?text=${encodedMessage}`; // Ganti nomor dengan punyamu

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="max-w-xl mx-auto p-4 py-20 md:py-50">
      <h2 className="text-2xl font-bold text-center mb-4">Pesan Sekarang</h2>

      {/* Notifikasi pengiriman gambar */}
      <div className="bg-yellow-100 text-yellow-800 border border-yellow-300 p-3 rounded mb-4 text-sm">
        📎 <strong>Catatan:</strong> Foto desain bisa dikirim manual setelah
        form ini dikirim melalui WhatsApp.
      </div>

      <form onSubmit={handleSubmit}>
        {/* Pilih Jenis */}
        <label className="block mb-2 font-semibold">Pilih Jenis</label>
        <select
          name="type"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setSubtype("");
            setHeight("");
            setWidth("");
            setDescription("");
          }}
          className="w-full border border-gray-300 p-2 rounded mb-4"
          required
        >
          <option value="">-- Pilih --</option>
          <option value="Stiker">Stiker</option>
          <option value="Gaci">Gaci</option>
        </select>

        {/* Dynamic Form */}
        {type === "Stiker" && (
          <div className="bg-gray-100 p-4 rounded mb-4">
            <label className="block mb-1 font-semibold">Tipe Stiker</label>
            <select
              name="subtype"
              value={subtype}
              onChange={(e) => setSubtype(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded mb-3"
              required
            >
              <option value="">-- Pilih --</option>
              <option value="Biasa">Biasa</option>
              <option value="Premium">Premium</option>
            </select>

            <div className="flex gap-3 mb-3">
              <div className="relative w-1/2">
                <input
                  type="number"
                  name="height"
                  placeholder="Tinggi"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full border border-gray-300 p-2 pr-10 rounded"
                  required
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                  cm
                </span>
              </div>
              <div className="relative w-1/2">
                <input
                  type="number"
                  name="width"
                  placeholder="Lebar"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="w-full border border-gray-300 p-2 pr-10 rounded"
                  required
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                  cm
                </span>
              </div>
            </div>
          </div>
        )}

        {type === "Gaci" && (
          <div className="bg-gray-100 p-4 rounded mb-4">
            <label className="block mb-1 font-semibold">Tipe Gaci</label>
            <select
              name="subtype"
              value={subtype}
              onChange={(e) => setSubtype(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            >
              <option value="">-- Pilih --</option>
              <option value="Akrilik">Akrilik</option>
              <option value="Plastik">Plastik</option>
            </select>
          </div>
        )}

        {/* Deskripsi */}
        <label className="block mb-1 font-semibold">Deskripsi</label>
        <textarea
          name="description"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded mb-4"
          placeholder="Tuliskan detail tambahan di sini..."
          required
        />

        {/* Tombol Kirim */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
        >
          Kirim via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default OrderNow;
