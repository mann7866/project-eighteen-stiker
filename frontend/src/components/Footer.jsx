import React from "react";
import { Link } from "react-router-dom";
import { SiShopee } from "react-icons/si";
import "swiper/css";

const FooterComponent = () => {
  return (
    <footer className="backdrop-blur-md text-black py-10 px-5 sm:px-7 md:px-6 lg:px-15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Info Utama */}
        <div>
          <h3 className="text-2xl text-black font-bold mb-4">
            EighteenSticker
          </h3>
          <p className="text-sm leading-relaxed">
            Melayani jasa percetakan stiker, gantungan kunci, banner, undangan,
            dan berbagai produk cetak lainnya dengan kualitas terbaik dan harga
            terjangkau.
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

        {/* Ikon Sosial (statis di tengah) */}
        <div className="flex md:justify-center">
          <div className="flex gap-4 text-xl mt-4">
            <a
              href="https://www.instagram.com/eighteensticker"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 cursor-pointer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://wa.me/6283891620352"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <a
              href="https://s.shopee.co.id/5pyhHxJJSy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600 cursor-pointer"
            >
              <SiShopee size={20} />
            </a>
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
      <div className="mt-6 border-t border-gray-300 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} by{" "}
        <span className="font-bold">Rohman</span> — Crafted with ♥ ReactJs +
        Tailwindcss. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterComponent;
