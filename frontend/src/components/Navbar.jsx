import { useEffect, useState } from "react";
import logo from "../../public/assets/images/logo/logo.png";
import { Link, useLocation } from "react-router-dom";
import CustomButton from "./ComponentsUi";

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
          ? "bg-white/30  backdrop-blur-md shadow-md text-black"
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

        {/* Middle Floating Logo (Desktop Only) */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`group hidden md:flex absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2
    items-center z-50 overflow-hidden transition-all duration-700 ease-in-out
    ${
      scrolled
        ? "bg-sky shadow-md text-black"
        : "bg-gradient-to-br from-blue-600 via-white to-pink-400 text-white shadow-lg"
    }
    ${
      hovered
        ? "w-48 px-4 h-20 rounded-full justify-start"
        : "w-20 h-20 rounded-full justify-center"
    }
  `}
        >
          {/* Logo Awal – akan menghilang dengan animasi pelan & pendek */}
          <img
            src={logo}
            alt="Logo"
            className={`w-10 h-10 object-contain absolute transition-all duration-900 ease-in-out
      ${hovered ? "opacity-0 translate-x-[-6px]" : "opacity-100 translate-x-0"}
    `}
          />

          {/* Logo + Teks Hover */}
          <div
            className={`flex items-center transition-all duration-700 ease-in-out
      ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
    `}
          >
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 object-contain mr-0"
            />
            <span className="whitespace-nowrap font-bold">
              <div className="relative inline-block md:block">
                <h1 className="text-md font-bold relative z-10 text-stroke title-text">
                  <span className="">Eighteen</span>Sticker
                </h1>
                <h1 className="text-md font-bold absolute top-0 left-0 z-0 title-background blur-sm">
                  <span>Eighteen</span>Sticker
                </h1>
              </div>
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
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
          <li className="relative group mr-5">
            <button
              className={`py-1 px-2 cursor-pointer hover:bg-red-400 hover:text-white ${
                isOtherActive ? "bg-red-400 text-white" : ""
              }`}
            >
              Lainnya
            </button>
            <ul className="absolute hidden group-hover:block bg-white text-sky-900 shadow-md mt-1 rounded-sm z-10 min-w-max">
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
            </ul>
          </li>
          <li>
            <Link
              to="/order/now"
              className={`py-1 px-2 border border-sky-500 hover:bg-sky-500 hover:text-white ${
                currentPath === "/order/now" ? "bg-sky-500 text-white " : ""
              }`}
            >
              Pesan Sekarang
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
              className={`w-6 h-6 ${scrolled ? "text-gray-700" : "text-white"}`}
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
