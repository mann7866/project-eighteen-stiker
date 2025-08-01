import logo from "../../public/assets/images/logo/logo.png";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [animation, setAnimation] = useState("bounce");

  useEffect(() => {
    const cycle = setInterval(() => {
      setAnimation((prev) => (prev === "bounce" ? "flip3d" : "bounce"));
    }, 2000); // Setiap 2 detik ganti animasi

    return () => clearInterval(cycle);
  }, []);

  return (
    <>
      <div className="bg-sky low-sky min-h-[500px] px-5 py-8 sm:px-7 md:px-6 lg:px-15 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-20 md:mt-50">
          <div className="backdrop-blur-md shadow-lg rounded-lg w-full p-6 sm:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-white bg-white/30">
            <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-sm sm:text-base text-justify mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero aut
              sint minima praesentium exercitationem officia autem, animi ullam
              repudiandae porro rem nihil! Dignissimos amet enim itaque
              quibusdam quod. Error sed autem, tenetur minus quae ducimus minima
              facilis commodi quaerat illo!
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <div className="w-[300px] rounded-lg overflow-hidden perspective-1000">
              <img
                loading="lazy"
                src={logo}
                alt="Hero"
                className={`w-full rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${animation}`}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section - Order 1 di mobile, 2 di desktop */}
          <div className="order-1 md:order-2 backdrop-blur-md shadow-lg rounded-lg w-full p-6 sm:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-white bg-white/30">
            <div className="mb-4">
              <h2 className="text-lg sm:text-xl font-semibold mb-2">Visi</h2>
              <p className="text-sm sm:text-base text-justify">
                Menjadi penyedia stiker custom terpercaya dan inovatif di
                Indonesia dengan kualitas terbaik dan layanan prima.
              </p>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">Misi</h2>
              <ul className="list-disc list-inside text-sm sm:text-base text-justify space-y-1">
                <li>
                  Menyediakan produk stiker berkualitas tinggi dan tahan lama.
                </li>
                <li>
                  Memberikan layanan pelanggan yang cepat, ramah, dan
                  profesional.
                </li>
                <li>
                  Mendukung kreativitas pelanggan melalui desain yang fleksibel
                  dan personalisasi.
                </li>
                <li>
                  Terus berinovasi dalam teknologi produksi dan bahan ramah
                  lingkungan.
                </li>
              </ul>
            </div>
          </div>

          {/* Image Section - Order 2 di mobile, 1 di desktop */}
          <div className="order-2 md:order-1 w-full flex justify-center md:justify-start">
            <div className="w-[300px] rounded-lg overflow-hidden perspective-1000">
              <img
                loading="lazy"
                src={logo}
                alt="Hero"
                className={`w-full rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${animation}`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
