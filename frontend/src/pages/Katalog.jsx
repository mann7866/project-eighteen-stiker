import { useState, useEffect } from "react";
import { katalogDatas } from "../../public/datas";

const unique = (arr, key) => {
  const values = arr.flatMap((item) =>
    Array.isArray(item[key]) ? item[key] : [item[key]]
  );
  return [...new Set(values)];
};

// Custom dropdown with checkbox
function MultiSelectDropdown({ label, name, options, selected, onChange }) {
  const [open, setOpen] = useState(false);

  const toggleOption = (value) => {
    if (selected.includes(value)) {
      onChange(
        name,
        selected.filter((v) => v !== value)
      );
    } else {
      onChange(name, [...selected, value]);
    }
  };

  return (
    <div className="relative">
      {/* Dropdown button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full p-2 border rounded bg-white text-left"
      >
        {selected.length > 0
          ? `${label}: ${selected.join(", ")}`
          : `${label} (semua)`}
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg max-h-48 overflow-y-auto">
          {options.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => toggleOption(opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default function KatalogPage() {
  const [filters, setFilters] = useState({
    size: [],
    color: [],
    material: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const sizes = unique(katalogDatas, "size");
  const colors = unique(katalogDatas, "color");
  const materials = unique(katalogDatas, "material");

  const handleFilterChange = (name, values) => {
    setFilters({ ...filters, [name]: values });
    setCurrentPage(1);
  };

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      setItemsPerPage(width < 768 ? 5 : 10);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const filteredData = katalogDatas.filter((item) => {
    const matchSize =
      filters.size.length === 0 ||
      (Array.isArray(item.size)
        ? item.size.some((s) => filters.size.includes(s))
        : filters.size.includes(item.size));

    const matchColor =
      filters.color.length === 0 ||
      (Array.isArray(item.color)
        ? item.color.some((c) => filters.color.includes(c))
        : filters.color.includes(item.color));

    const matchMaterial =
      filters.material.length === 0 ||
      (Array.isArray(item.material)
        ? item.material.some((m) => filters.material.includes(m))
        : filters.material.includes(item.material));

    return matchSize && matchColor && matchMaterial;
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
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-20">
          Galeri
        </h2>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <MultiSelectDropdown
            label="Ukuran"
            name="size"
            options={sizes}
            selected={filters.size}
            onChange={handleFilterChange}
          />

          <MultiSelectDropdown
            label="Warna"
            name="color"
            options={colors}
            selected={filters.color}
            onChange={handleFilterChange}
          />

          <MultiSelectDropdown
            label="Bahan"
            name="material"
            options={materials}
            selected={filters.material}
            onChange={handleFilterChange}
          />
        </div>

        {/* Gallery */}
        <div className="columns-2 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {currentItems.map((item, i) => (
            <div
              key={item.id}
              className="break-inside-avoid bg-white/40 backdrop-blur-md rounded-lg shadow-lg hover:shadow-2xl transition-all overflow-hidden animate__animated animate__fadeInUp animate__delay-1s"
             
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  <strong>Ukuran:</strong>{" "}
                  {Array.isArray(item.size) ? item.size.join(", ") : item.size}{" "}
                  <br />
                  <strong>Warna:</strong>{" "}
                  {Array.isArray(item.color)
                    ? item.color.join(", ")
                    : item.color}{" "}
                  <br />
                  <strong>Bahan:</strong>{" "}
                  {Array.isArray(item.material)
                    ? item.material.join(", ")
                    : item.material}
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
