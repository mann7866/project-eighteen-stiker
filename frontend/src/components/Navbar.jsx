import { useEffect, useState } from "react";
import logo from "../../public/assets/images/logo/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
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
        scrolled ? "bg-white shadow-md text-black" : "bg-transparent text-black"
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
        ? "bg-white text-black"
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
          className={`hidden font-bold mt-1 md:flex space-x-6 ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
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
        <div className="md:hidden mt-4 bg-white rounded shadow-lg px-4 py-3 space-y-2 text-gray-800">
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            About
          </a>
          <a href="#" className="block">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
