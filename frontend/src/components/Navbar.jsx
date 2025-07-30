import { useEffect, useState } from "react";
import logo from "../../public/assets/images/logo/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md text-black" : "bg-transparent text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="relative inline-block">
          <h1 className="text-lg font-bold relative z-10 text-stroke title-text">
            <span className="">Eighteen</span>Sticker
          </h1>
          <h1 className="text-xl font-bold absolute top-0 left-0 z-0 title-background blur-sm">
            <span>Eighteen</span>Sticker
          </h1>
        </div>

        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center z-50 ${
            scrolled
              ? "bg-white text-black"
              : "bg-gradient-to-br from-blue-600 via-white to-pink-400 text-white shadow-lg"
          }`}
        >
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        </div>

        <ul className="flex space-x-6">
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
      </div>
    </nav>
  );
}
