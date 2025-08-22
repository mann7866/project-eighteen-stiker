import { useEffect, useState } from "react";
import logo from "../../public/assets/images/logo/logo.png";
import { Link, useLocation } from "react-router-dom";
import CustomButton from "./ComponentsUi";
import { ChevronUp, ChevronDown, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  // Buat array daftar path untuk menu "Lainnya"
  const otherPaths = ["/galery", "/faq", "/contact", "/pesan"];

  // Cek apakah path sekarang cocok
  const isOtherActive = otherPaths.includes(currentPath);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 px-6 py-4 transition-all duration-300 w-full h-[80px] ${
        scrolled
          ? "bg-sky backdrop-blur-md shadow-md text-black"
          : "bg-transparent text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo (Mobile) */}
        <div className="md:hidden">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        </div>

        {/* Title (Desktop Only) */}
        <div className="relative mt-1 inline-block hidden md:block">
          <h1 className="text-xl font-bold relative z-10 text-stroke title-text">
            <span className="">Eighteen</span>Sticker
          </h1>
          <h1 className="text-xl font-bold absolute top-0 left-0 z-0 title-background blur-sm">
            <span>Eighteen</span>Sticker
          </h1>
        </div>

        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`
    group hidden md:flex absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2
    z-50 h-20 items-center overflow-hidden rounded-full transition-all duration-500 ease-in-out
    ${
      scrolled
        ? "bg-sky shadow-md text-black"
        : "bg-gradient-to-br from-blue-600 via-white to-pink-400 text-white shadow-lg"
    }
    ${hovered ? "w-56 px-4 justify-start" : "w-20 justify-center"}
  `}
        >
          {/* Logo tetap satu */}
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 object-contain flex-shrink-0"
          />

          {/* Teks muncul saat hover */}
          <div
            className={`
      overflow-hidden transition-all duration-500 ease-in-out
      ${hovered ? "max-w-xs ml-2 opacity-100" : "max-w-0 ml-0 opacity-0"}
    `}
          >
            <div className="font-bold inline-block">
              <div className="relative inline-block md:block">
                <h1 className="text-md font-bold relative z-10 text-stroke title-text">
                  <span className="">Eighteen</span>Sticker
                </h1>
                <h1 className="text-md font-bold absolute top-0 left-0 z-0">
                  <span>Eighteen</span>Sticker
                </h1>
              </div>
            </div>
          </div>
        </div>

        <ul
          className={`hidden font-bold mt-1 lg:flex space-x-1 items-center ${
            scrolled ? "text-sky-700" : "text-sky-900"
          }`}
        >
          <li>
            <Link
              to="/"
              className={`py-1 px-2 hover:bg-red-400 hover:text-white ${
                currentPath === "/" ? "bg-red-400 text-white " : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`py-1 px-2 hover:bg-red-400 hover:text-white ${
                currentPath === "/about" ? "bg-red-400 text-white " : ""
              }`}
            >
              Tentang
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              className={`py-1 px-2 hover:bg-red-400 hover:text-white ${
                currentPath === "/service" ? "bg-red-400 text-white " : ""
              }`}
            >
              Layanan
            </Link>
          </li>
          <li className="relative mr-5">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`py-1 px-3 flex items-center gap-1 cursor-pointer transition-all duration-200
      hover:bg-red-400 hover:text-white
      ${isDropdownOpen ? "bg-red-400 text-white" : ""}
    `}
            >
              Lainnya
              <ChevronUp
                className={`w-4 h-4 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <ul className="absolute bg-white text-sky-900 shadow-md mt-1 rounded-sm z-10 min-w-max">
                <li>
                  <Link
                    to="/galery"
                    className={`block py-1 px-4 hover:bg-red-400 hover:text-white ${
                      currentPath === "/galery" ? "bg-red-400 text-white" : ""
                    }`}
                  >
                    Galeri
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className={`block py-1 px-4 hover:bg-red-400 hover:text-white ${
                      currentPath === "/faq" ? "bg-red-400 text-white" : ""
                    }`}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`block py-1 px-4 hover:bg-red-400 hover:text-white ${
                      currentPath === "/contact" ? "bg-red-400 text-white" : ""
                    }`}
                  >
                    Kontak
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order/history"
                    className={`block py-1 px-4 hover:bg-red-400 hover:text-white ${
                      currentPath === "/order/history" ? "bg-red-400 text-white" : ""
                    }`}
                  >
                    Order History
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="group flex items-center">
            <Link
              to="/order/now"
              className={`
      flex items-center gap-2 px-3 py-2 border border-sky-500 rounded-md overflow-hidden transition-all duration-300
      hover:bg-sky-500 hover:text-white
      ${currentPath === "/order/now" ? "bg-sky-500 text-white" : "text-sky-500"}
    `}
            >
              <ShoppingBag size={22} className="flex-shrink-0" />

              {/* Text muncul saat hover */}
              <span
                className={`
        max-w-0 overflow-hidden whitespace-nowrap transition-all duration-500
        group-hover:max-w-xs group-hover:ml-1
      `}
              >
                Pesan Sekarang
              </span>
            </Link>
          </li>
        </ul>
        {/* Hamburger Menu Button (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className={`w-6 h-6 ${scrolled ? "text-gray-700" : "text-gray-400"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 bg-white rounded shadow-lg px-4 py-3 space-y-2 text-gray-800">
          <Link to="/" className="block">
            Home
          </Link>
          <Link to="/about" className="block">
            Tentang
          </Link>
          <Link to="/service" className="block">
            Layanan
          </Link>
          <Link to="/galery" className="block">
            Galeri
          </Link>
          <Link to="/faq" className="block">
            FAQ
          </Link>
          <Link to="/contact" className="block">
            Kontak
          </Link>
          <Link to="/order/now" className="block">
            Pesan Sekarang
          </Link>
        </div>
      )}
    </nav>
  );
}
