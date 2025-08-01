import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../public/datas";

const ProductList = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const handleOrderClick = (type) => {
    navigate(`/order/now?type=${type}`);
  };

  const toggleDesc = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-4">
      {products.map((item, index) => (
        <div
          key={index}
          className="group bg-white/30 backdrop-blur-md rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
        >
          {/* Gambar */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-auto object-cover"
          />

          {/* Konten */}
          <div className="p-4">
            {/* Judul dengan toggle untuk mobile */}
            <h3
              className="text-xs sm:text-sm md:text-xl font-semibold mb-2 cursor-pointer md:cursor-default"
              onClick={() => toggleDesc(index)}
            >
              {item.title}
            </h3>

            {/* Deskripsi - Tampil saat hover di desktop, toggle di mobile */}
            <div
              className={`
                    text-gray-700 space-y-1 transition-all
                    ${openIndex === index ? "block" : "hidden"} md:block
                    group-hover:block
                  `}
            >
              <p className="text-[10px] sm:text-xs md:text-sm">{item.desc}</p>
              <p className="text-[10px] sm:text-xs md:text-sm">
                <span className="font-semibold">Ukuran:</span> {item.sizes}
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm">
                <span className="font-semibold">Harga Estimasi:</span>{" "}
                {item.price}
              </p>
            </div>

            {/* Tombol langsung terlihat (bukan hover overlay) */}
            <div className="mt-3 flex justify-center items-center">
              <button
                onClick={() => handleOrderClick(item.type)}
                className="bg-white text-sky-900 px-2 md:px-4 py-1 md:py-2 text-[10px] sm:text-xs md:text-base rounded-md shadow hover:bg-sky-800 hover:text-white transition-all duration-300"
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
