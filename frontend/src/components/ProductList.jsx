import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../public/datas";

const ProductList = ({ limit }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const handleOrderClick = (type) => {
    navigate(`/order/now?type=${type}`);
  };

  const toggleDesc = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Kalau ada limit → slice, kalau tidak ada → tampilkan semua
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-4">
      {displayedProducts.map((item, index) => (
        <div
          key={index}
          className="group relative z-0 hover:z-10 bg-white/30 backdrop-blur-md rounded-lg shadow-md overflow-visible transition-all transform hover:scale-105"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          data-aos-delay={index * 200}
          data-aos-once="true"
        >
          {/* Gambar */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-auto object-cover"
          />

          {/* Konten */}
          <div className="p-3">
            <h3 className="text-xs sm:text-sm md:text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <div className="mt-2 flex justify-center">
              <button
                onClick={() => handleOrderClick(item.type)}
                className="bg-white text-sky-900 px-2 md:px-4 py-1 md:py-2 text-[10px] sm:text-xs md:text-base rounded-md shadow hover:bg-sky-800 hover:text-white transition-all duration-300"
              >
                Pesan Sekarang
              </button>
            </div>
          </div>

          {/* Deskripsi muncul ke bawah */}
          <div className="absolute left-0 top-full w-full z-20 opacity-0 scale-y-0 origin-top group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-white text-gray-700 p-3 text-[10px] sm:text-xs md:text-sm shadow-lg rounded-b-lg">
            <p className="mb-1">{item.desc}</p>
            <p className="mb-1">
              <span className="font-semibold">Ukuran:</span> {item.sizes}
            </p>
            <p>
              <span className="font-semibold">Harga Estimasi:</span> {item.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
