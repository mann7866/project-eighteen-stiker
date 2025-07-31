import { useState } from "react";
import { SchemaMessage } from "../utils/validators/MessageValidation";
import { Send } from "lucide-react";

export default function FormContact() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [errors, setErrors] = useState({});

  const noWa = "6283891620352"; // Nomor WhatsApp tujuan

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({}); // reset error

    const result = SchemaMessage.safeParse({ nama, pesan });

    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((err) => {
        if (err.path && err.path.length > 0) {
          fieldErrors[err.path[0]] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    const text = `Halo, saya *${nama}*.\n\n${pesan}`;
    const waLink = `https://wa.me/${noWa}?text=${encodeURIComponent(text)}`;
    window.open(waLink, "_blank");

    // Optional: reset form
    setNama("");
    setPesan("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white backdrop-blur-md p-6 rounded-lg shadow-lg space-y-5 w-full max-w-xl"
    >
      <h3 className="text-xl font-semibold mb-2">Kirim Pesan</h3>

      <div>
        <label className="block text-sm font-medium mb-1">Nama</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Nama Anda"
          className={`w-full p-2 rounded border ${
            errors.nama ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
        />
        {errors.nama && (
          <p className="text-red-500 text-sm mt-1">{errors.nama}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Pesan</label>
        <textarea
          rows="4"
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Tulis pesan Anda..."
          className={`w-full p-2 rounded border ${
            errors.pesan ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
        ></textarea>
        {errors.pesan && (
          <p className="text-red-500 text-sm mt-1">{errors.pesan}</p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-600 flex items-center gap-2 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          <Send size={18} className="stroke-white" />
          Kirim
        </button>
      </div>
    </form>
  );
}
