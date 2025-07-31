import React from "react";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer className="backdrop-blur-md text-black py-10 px-5 sm:px-7 md:px-6 lg:px-15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Info Utama */}
        <div>
          <h3 className="text-2xl text-black font-bold mb-4">EighteenSticker</h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            assumenda eligendi ea, accusantium, dolorum nulla totam deserunt
            repellat modi at magni quos earum eveniet suscipit? Deleniti minus
            saepe praesentium illum reprehenderit cumque magnam provident? Nam
            praesentium excepturi iste quisquam inventore?
          </p>

          <div className="mt-4 space-y-2">
            <Link
              to="#"
              className="flex items-center gap-2 text-sm hover:underline"
            >
              <i className="fa-brands fa-whatsapp"></i>
              +62 822-668-194-51
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 text-sm hover:underline"
            >
              <i className="fa-regular fa-envelope"></i>
              test@gmail.com
            </Link>
          </div>
        </div>

        <div className="flex md:justify-center">
          <div className="flex gap-4 text-xl mt-4">
            <i className="fa-brands fa-github hover:text-black cursor-pointer"></i>
            <i className="fa-brands fa-instagram hover:text-pink-600 cursor-pointer"></i>
            <i className="fa-brands fa-twitter hover:text-blue-500 cursor-pointer"></i>
            <i className="fa-brands fa-linkedin hover:text-blue-700 cursor-pointer"></i>
          </div>
        </div>
        {/* Menu Navigasi */}
        <div className="md:col-span-1">
          <h5 className="text-lg font-semibold mb-3">Menu</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                Tentang
              </Link>
            </li>
            <li>
              <Link to="/service" className="hover:underline">
                Layanan
              </Link>
            </li>
            <li>
              <Link to="/galery" className="hover:underline">
                Galeri
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} by{" "}
        <span className="font-bold">Rohman</span> — All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterComponent;
