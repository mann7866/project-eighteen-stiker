export default function ContactPage() {
  return (
    <div className="bg-sky low-sky px-5 sm:px-7 md:px-6 lg:px-15 mx-auto">
      <div className="py-25 md:py-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-20">Kontak Kami</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Info Kontak */}
        <div className="bg-white backdrop-blur-md p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Informasi Kontak</h3>
          <ul className="space-y-3 text-sm sm:text-base">
            <li>
              📍 <strong>Alamat:</strong> Jl. Contoh No.123, Jakarta
            </li>
            <li>
              📞 <strong>Telepon:</strong> +62 812 3456 7890
            </li>
            <li>
              📧 <strong>Email:</strong> info@stikerkita.co.id
            </li>
            <li>
              🕘 <strong>Jam Operasional:</strong> Senin - Jumat (09.00 - 17.00)
            </li>
          </ul>
        </div>

        {/* Form Kontak */}
        <form className="bg-white backdrop-blur-md p-6 rounded-lg shadow-lg space-y-5">
          <h3 className="text-xl font-semibold mb-2">Kirim Pesan</h3>
          <div>
            <label className="block text-sm font-medium mb-1">Nama</label>
            <input
              type="text"
              placeholder="Nama Anda"
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="email@domain.com"
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Pesan</label>
            <textarea
              rows="4"
              placeholder="Tulis pesan Anda..."
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
      </div>

    </div>
  );
}
