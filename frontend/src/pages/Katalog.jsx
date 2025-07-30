import { useState } from "react";
import logo from "../../public/assets/images/logo/logo.png";

const sampleData = [
  {
    id: 1,
    title: "Stiker Produk UMKM",
    category: "UMKM",
    size: "Small",
    color: "White",
    material: "Vinyl",
    img: logo,
  },
  {
    id: 2,
    title: "Stiker Promosi Event",
    category: "Promosi",
    size: "Medium",
    color: "Colorful",
    material: "Glossy",
    img: logo,
  },
  {
    id: 3,
    title: "Stiker Dinding Kantor",
    category: "Dekorasi",
    size: "Large",
    color: "Black",
    material: "Matte",
    img: logo,
  },
  // ...tambahkan lebih banyak data
];

const unique = (arr, key) => [...new Set(arr.map((item) => item[key]))];

export default function KatalogPage() {
  const [filters, setFilters] = useState({ size: "", color: "", material: "" });

  const sizes = unique(sampleData, "size");
  const colors = unique(sampleData, "color");
  const materials = unique(sampleData, "material");

  const filteredData = sampleData.filter((item) => {
    return (
      (filters.size === "" || item.size === filters.size) &&
      (filters.color === "" || item.color === filters.color) &&
      (filters.material === "" || item.material === filters.material)
    );
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-sky low-sky px-5 sm:px-7 md:px-6 lg:px-15">
      <div className="py-25 md:py-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-15">
          Galeri
        </h2>

        {/* Filter */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <select
            name="size"
            onChange={handleChange}
            className="p-2 border rounded bg-white"
          >
            <option value="">Ukuran (semua)</option>
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

          <select
            name="color"
            onChange={handleChange}
            className="p-2 border rounded bg-white"
          >
            <option value="">Warna (semua)</option>
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>

          <select
            name="material"
            onChange={handleChange}
            className="p-2 border rounded bg-white"
          >
            <option value="">Bahan (semua)</option>
            {materials.map((mat) => (
              <option key={mat} value={mat}>
                {mat}
              </option>
            ))}
          </select>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="bg-white backdrop-blur-md rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-36 sm:h-auto object-cover"
                />
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    <strong>Ukuran:</strong> {item.size} <br />
                    <strong>Warna:</strong> {item.color} <br />
                    <strong>Bahan:</strong> {item.material}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}
