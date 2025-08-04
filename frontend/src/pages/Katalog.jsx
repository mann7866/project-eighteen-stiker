import { useState, useEffect } from "react";
import { katalogDatas } from "../../public/datas";

const unique = (arr, key) => [...new Set(arr.map((item) => item[key]))];

export default function KatalogPage() {
  const [filters, setFilters] = useState({ size: "", color: "", material: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const sizes = unique(katalogDatas, "size");
  const colors = unique(katalogDatas, "color");
  const materials = unique(katalogDatas, "material");

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setCurrentPage(1); // Reset ke halaman 1 jika filter berubah
  };

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(5);
      } else {
        setItemsPerPage(10);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const filteredData = katalogDatas.filter((item) => {
    return (
      (filters.size === "" || item.size === filters.size) &&
      (filters.color === "" || item.color === filters.color) &&
      (filters.material === "" || item.material === filters.material)
    );
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="bg-sky low-sky px-5 sm:px-7 md:px-6 lg:px-15">
      <div className="py-25 md:py-50">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-20"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Galeri
        </h2>

        {/* Filter */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <select
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-once="true"
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
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-once="true"
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
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-once="true"
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

        {/* Gallery Pinterest Style */}
        <div className="columns-2 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {currentItems.map((item, index) => (
            <div
            data-aos="zoom-in-right"
                data-aos-duration="1000"
                data-aos-delay="1300"
                data-aos-once="true"
              key={item.id}
              className="break-inside-avoid bg-white/40 backdrop-blur-md rounded-lg shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  <strong>Ukuran:</strong> {item.size} <br />
                  <strong>Warna:</strong> {item.color} <br />
                  <strong>Bahan:</strong> {item.material}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded text-sm ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
