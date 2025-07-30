import React from "react";
import logo from "../../public/assets/images/logo/logo.png";
import CustomButton from "../components/ComponentsUi";

// Ganti dengan gambar nyata nantinya
const products = [
  {
    title: "Stiker Produk UMKM",
    desc: "Label untuk botol, makanan, dan kosmetik. Tahan air dan elegan.",
    img: logo, // sesuaikan
    sizes: "2x5cm, 4x6cm, custom",
    price: "Mulai Rp25.000 / 50pcs",
  },
  {
    title: "Stiker Promosi",
    desc: "Cocok untuk branding event, seminar, dan kampanye iklan.",
    img: logo,
    sizes: "5x5cm, A6, A5, custom",
    price: "Mulai Rp30.000 / 100pcs",
  },
  {
    title: "Stiker Custom",
    desc: "Buat desain sesukamu: karakter, nama, atau logo brand pribadi.",
    img: logo,
    sizes: "Bebas (custom shape & size)",
    price: "Harga menyesuaikan desain",
  },
//   {
//     title: "Stiker Dinding & Dekorasi",
//     desc: "Untuk dekor rumah dan kantor agar lebih hidup & estetik.",
//     img: logo,
//     sizes: "A3, A2, custom",
//     price: "Mulai Rp50.000 / set",
//   },
];

const ProductsPage = () => {
  return (
    <div className="bg-sky low-sky px-5 sm:px-7 md:px-6 lg:px-15  max-w-7xl mx-auto">
      <div className="py-25 md:py-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-20">
        Produk & Layanan
      </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2 px-4 sm:gap-6 sm:px-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white backdrop-blur-md rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              {/* Gambar */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-32 sm:h-auto object-cover"
              />

              {/* Konten */}
              <div className="p-3 sm:p-6">
                <h3 className="text-sm sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-3">
                  {item.desc}
                </p>
                <p className="text-xs sm:text-sm">
                  <span className="font-semibold">Ukuran:</span> {item.sizes}
                </p>
                <p className="text-xs sm:text-sm">
                  <span className="font-semibold">Harga Estimasi:</span>{" "}
                  {item.price}
                </p>
              </div>

              {/* Tombol muncul saat hover */}
              <div className="absolute inset-0 bg-sky-200/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <button className="bg-white text-sky-900 text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-md shadow-lg hover:bg-sky-800 hover:text-white transition-all duration-300 cursor-pointer">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
