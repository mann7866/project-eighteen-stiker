import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { OrderSchema } from "../utils/validators/OrderValidation";
import { Send } from "lucide-react";

const OrderNow = () => {
  const [type, setType] = useState("");
  const [subtype, setSubtype] = useState("");
  const [description, setDescription] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [errors, setErrors] = useState({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const urlType = searchParams.get("type");
    if (
      urlType === "Stiker" ||
      urlType === "Gaci" ||
      urlType === "Banner" ||
      urlType === "Jasa Desain"
    ) {
      setType(urlType);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    const result = OrderSchema.safeParse({
      type,
      subtype,
      height,
      width,
      description,
    });

    if (!result.success) {
      const fieldErrors = {};

      if (Array.isArray(result.error?.issues)) {
        result.error.issues.forEach((err) => {
          if (err.path && err.path.length > 0) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
      }

      setErrors(fieldErrors);
      return;
    }

    let message = `*Pesanan Baru*\n`;

    if (type) {
      message += `*Jenis:* ${type}\n`;
    }

    if (subtype) {
      message += `*Tipe:* ${subtype}\n`;
    }

    if (type === "Stiker" && height && width) {
      message += `*Ukuran:* tinggi ${height} cm x lebar ${width} cm\n`;
    }

    if (type === "Banner" && height && width) {
      message += `*Ukuran Banner:* tinggi ${height} cm x lebar ${width} cm\n`;
    }

    if (description) {
      message += `*Deskripsi:*\n_${description}_\n`;
    }

    message += `\n📎 *Catatan:* Silakan kirim foto desain secara manual di chat ini.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/6283891620352?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div
      className="bg-sky low-sky"
      data-aos="fade-in"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="max-w-xl mx-auto p-4 py-20 md:py-50">
        <h2 className="text-2xl font-bold text-center mb-4">Pesan Sekarang</h2>

        <div className="bg-yellow-100 text-yellow-800 border border-yellow-300 p-3 rounded mb-4 text-sm">
          📎 <strong>Catatan:</strong> Foto desain bisa dikirim manual setelah
          form ini dikirim melalui WhatsApp.
        </div>

        <form onSubmit={handleSubmit}>
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
              setErrors({});
            }}
            className="w-full border border-gray-300 p-2 rounded mb-1"
          >
            <option value="">-- Pilih --</option>
            <option value="Stiker">Stiker</option>
            <option value="Gaci">Gaci</option>
            <option value="Banner">Banner</option>
            <option value="Jasa Desain">Jasa Desain</option>
          </select>
          {errors.type && (
            <p className="text-red-500 text-sm mb-2">{errors.type}</p>
          )}

          {type === "Stiker" && (
            <div className="bg-gray-100 p-4 rounded mb-4">
              <label className="block mb-1 font-semibold">Tipe Stiker</label>
              <select
                name="subtype"
                value={subtype}
                onChange={(e) => setSubtype(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded mb-1"
              >
                <option value="">-- Pilih --</option>
                <option value="Biasa">Biasa</option>
                <option value="Premium">Premium</option>
              </select>
              {errors.subtype && (
                <p className="text-red-500 text-sm mb-2">{errors.subtype}</p>
              )}

              <div className="flex gap-3 mb-1">
                <div className="relative w-1/2">
                  <input
                    type="number"
                    name="height"
                    placeholder="Tinggi"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full border border-gray-300 p-2 pr-10 rounded"
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
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                    cm
                  </span>
                </div>
              </div>
              {errors.height && (
                <p className="text-red-500 text-sm">{errors.height}</p>
              )}
              {errors.width && (
                <p className="text-red-500 text-sm">{errors.width}</p>
              )}
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
              >
                <option value="">-- Pilih --</option>
                <option value="Akrilik">Akrilik</option>
                <option value="Plastik">Plastik</option>
              </select>
              {errors.subtype && (
                <p className="text-red-500 text-sm mt-1">{errors.subtype}</p>
              )}
            </div>
          )}

          {type === "Banner" && (
            <div className="bg-gray-100 p-4 rounded mb-4">
              <div className="flex gap-3 mb-1">
                <div className="relative w-1/2">
                  <input
                    type="number"
                    name="height"
                    placeholder="Tinggi"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full border border-gray-300 p-2 pr-10 rounded"
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
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                    cm
                  </span>
                </div>
              </div>
              {errors.height && (
                <p className="text-red-500 text-sm">{errors.height}</p>
              )}
              {errors.width && (
                <p className="text-red-500 text-sm">{errors.width}</p>
              )}
            </div>
          )}

          <label className="block mb-1 font-semibold">Deskripsi</label>
          <textarea
            name="description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded mb-1"
            placeholder="Tuliskan detail tambahan di sini..."
          />
          {errors.description && (
            <p className="text-red-500 text-sm mb-2">{errors.description}</p>
          )}

          <button
            type="submit"
            className="w-full flex items-center gap-2 text-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
          >
            <Send size={18} className="stroke-white" />
            Kirim Pesanan
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderNow;
