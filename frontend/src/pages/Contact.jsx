
import FormContact from "../components/FormContact";

export default function ContactPage() {
  return (
    <div className="bg-sky low-sky px-5 sm:px-7 md:px-6 lg:px-15 mx-auto">
      <div className="py-25 md:py-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-20">
          Kontak Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Info Kontak */}
          <div className="bg-white backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Informasi Kontak</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                📍 <strong>Alamat:</strong> Jl.Sumber Wadung
              </li>
              <li>
                📞 <strong>Telepon:</strong> +62 838 9162 0352
              </li>
              <li>
                📧 <strong>Email:</strong> info@stikerkita.co.id
              </li>
              <li>
                🕘 <strong>Jam Operasional:</strong> Senin - Jumat (09.00 -
                17.00)
              </li>
            </ul>

            <div className="w-full max-w-3xl mt-4">
              <h3 className="text-lg font-semibold mb-3 text-center">
                Lokasi Kami
              </h3>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.001947499571!2d114.13049717406824!3d-8.302603391732552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6ada5ab8f7a5f%3A0x1a155ee613997ed7!2sEighteenSticker!5e0!3m2!1sid!2sid!4v1753933270036!5m2!1sid!2sid"
                  width="600"
                  height="450"
                  style={{ border:0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <FormContact />
        </div>
      </div>
    </div>
  );
}
