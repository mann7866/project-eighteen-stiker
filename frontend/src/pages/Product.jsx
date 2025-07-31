import React from "react";
import logo from "../../public/assets/images/logo/logo.png";
import CustomButton from "../components/ComponentsUi";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleOrderClick = (type) => {
    navigate(`/order/now?type=${type}`);
  };
  return (
    <div className="bg-sky low-sky px-5 sm:px-7 md:px-6 lg:px-15  max-w-7xl mx-auto">
      <div className="py-25 md:py-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-20">
          Produk & Layanan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/30 backdrop-blur-md rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              {/* Gambar */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              {/* Konten */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 mb-3">{item.desc}</p>
                <p className="text-sm">
                  <span className="font-semibold">Ukuran:</span> {item.sizes}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Harga Estimasi:</span>{" "}
                  {item.price}
                </p>
              </div>

              {/* Tombol muncul saat hover */}
              <div className="absolute inset-0 bg-sky-200/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <button
                  onClick={() => handleOrderClick("Stiker")} // Asumsikan semua produk di list adalah Stiker, bisa sesuaikan
                  className="bg-white text-sky-900 px-4 py-2 rounded-md shadow-lg hover:bg-sky-800 hover:text-white transition-all duration-300 cursor-pointer"
                >
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
