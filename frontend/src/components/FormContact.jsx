import { useState } from "react";

export default function FormContact() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  const noWa = "6283891620352"; // Nomor WhatsApp tujuan

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo, saya *${nama}*.\n\n${pesan}`;
    const waLink = `https://wa.me/${noWa}?text=${encodeURIComponent(text)}`;
    window.open(waLink, "_blank");
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
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Pesan</label>
        <textarea
          rows="4"
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Tulis pesan Anda..."
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Kirim ke WhatsApp
      </button>
    </form>
  );
}
