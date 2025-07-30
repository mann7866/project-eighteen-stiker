import logo from "../../public/assets/images/logo/logo.png";
import CustomButton from ".././components/ComponentsUi";
import React, { useState, useEffect } from "react";
import AboutPage from "./About";
export default function HomePage() {
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
  const products = [
    {
      title: "Stiker Produk UMKM",
      desc: "Label untuk botol, makanan, dan kosmetik. Tahan air dan elegan.",
      img: logo, // sesuaikan
      sizes: "2x5cm, 4x6cm, custom",
      price: "Mulai Rp25.000 / 50pcs",
    },
    {
      title: "Stiker Promosi",
      desc: "Cocok untuk branding event, seminar, dan kampanye iklan.",
      img: logo,
      sizes: "5x5cm, A6, A5, custom",
      price: "Mulai Rp30.000 / 100pcs",
    },
    {
      title: "Stiker Custom",
      desc: "Buat desain sesukamu: karakter, nama, atau logo brand pribadi.",
      img: logo,
      sizes: "Bebas (custom shape & size)",
      price: "Harga menyesuaikan desain",
    },
    //   {
    //     title: "Stiker Dinding & Dekorasi",
    //     desc: "Untuk dekor rumah dan kantor agar lebih hidup & estetik.",
    //     img: logo,
    //     sizes: "A3, A2, custom",
    //     price: "Mulai Rp50.000 / set",
    //   },
  ];
  const [openId, setOpenId] = useState(null);

  const faq = [
    {
      id: 1,
      eventKey: "0",
      title: "Bagaimana cara memesan stiker?",
      desc: "Anda dapat memesan stiker melalui formulir pemesanan atau WhatsApp kami.",
    },
    {
      id: 2,
      eventKey: "1",
      title: "Apakah bisa custom desain sendiri?",
      desc: "Tentu, kami menerima desain custom dari pelanggan sesuai keinginan.",
    },
  ];

  const [animation, setAnimation] = useState("bounce");

  useEffect(() => {
    const cycle = setInterval(() => {
      setAnimation((prev) => (prev === "bounce" ? "flip3d" : "bounce"));
    }, 2000); // Setiap 2 detik ganti animasi

    return () => clearInterval(cycle);
  }, []);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <>
      <div className="home-header h-[1080px] sm:h-[1050px] md:h-[900px] lg:h-[700px] pt-[150px]">
        <div className="home text-black flex ">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center py-0 px-5 sm:px-7 md:px-6 lg:px-15">
            <div>
              <h1 className="text-5xl/tight md:text-6xl/tight font-bold mb-4">
                Stiker Custom{" "}
                <span className="bg-red-500 p-1 text-4xl md:text-5xl">
                  Berkualitas
                </span>{" "}
                untuk Segala Kebutuhan
              </h1>
              <p className="text-base/loose opacity-50 mb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatibus explicabo exercitationem ducimus modi dolor sunt,
                earum dicta quidem distinctio mollitia!
              </p>
              <div className="flex items-center sm:gap-4 gap-2">
                <CustomButton
                  label="Pesan Sekarang"
                  className="bg-gradient-to-br shadow-lg shadow-blue-300 from-blue-600 via-blue-200 to-blue-800 hover:from-blue-800 hover:via-blue-200 hover:to-blue-600 text-white"
                />
                <CustomButton
                  className="bg-gradient-to-br shadow-lg shadow-red-200 from-red-400 via-red-200 to-red-700 hover:from-red-700 hover:via-red-200 hover:to-red-400 text-white"
                  label="Lihat Produk"
                />
              </div>
            </div>
            <div>
              <img
                loading="lazy"
                src={logo}
                alt="Hero Image"
                className="w-[450px] md:ml-auto rounded-lg mt-7 md:mt-0 animate-bounce-delay"
              />
            </div>
          </div>
        </div>
      </div>

      {/* about page */}
      <div className="bg-sky home-sky min-h-[400px] px-5 py-18 sm:px-7 md:px-6 lg:px-15 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-0 mt-20">
          <div className="backdrop-blur-md shadow-lg rounded-lg w-full p-6 sm:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-white bg-white/30">
            <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-sm sm:text-base text-justify mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero aut
              sint minima praesentium exercitationem officia autem, animi ullam
              repudiandae porro rem nihil! Dignissimos amet enim itaque
              quibusdam quod. Error sed autem, tenetur minus quae ducimus minima
              facilis commodi quaerat illo!
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <div className="w-[300px] rounded-lg overflow-hidden perspective-1000">
              <img
                loading="lazy"
                src={logo}
                alt="Hero"
                className={`w-full rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${animation}`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* product page */}
      <div className="bg-sky px-5 sm:px-7 md:px-6 lg:px-15 py-0 max-w-7xl mx-auto">
        <div className="mb-8 py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-br from-blue-200 via-blue-400 to-blue-800 bg-clip-text text-transparent">
            Produk & Layanan
          </h2>

          <p className=" max-w-2xl text-center mx-auto mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            fugiat aut reprehenderit dolorum. Excepturi, modi. Nostrum nisi a
            dolorum perspiciatis possimus quod officiis dolorem earum?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-2 px-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white backdrop-blur-md rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              {/* Gambar */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              {/* Konten */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 mb-3">{item.desc}</p>
                <p className="text-sm">
                  <span className="font-semibold">Ukuran:</span> {item.sizes}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Harga Estimasi:</span>{" "}
                  {item.price}
                </p>
              </div>

              {/* Tombol muncul saat hover */}
              <div className="absolute inset-0 bg-sky-200/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <button className="bg-white text-sky-900 px-4 py-2 rounded-md shadow-lg hover:bg-sky-800 hover:text-white transition-all duration-300 cursor-pointer">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-15">
          <CustomButton
            className="bg-gradient-to-br from-emerald-400 via-emerald-200 to-emerald-600 hover:from-emerald-600 hover:via-emerald-200 hover:to-emerald-400 text-white"
            label="Lihat Semua Layanan"
          />
        </div>
      </div>

      {/* galery */}
      <div className="bg-blue-300 mt-20 px-5 sm:px-7 md:px-6 lg:px-15">
        <div className="py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5 text-white">
            Galeri
          </h2>
          <p className=" max-w-2xl text-center mx-auto mb-25 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            fugiat aut reprehenderit dolorum. Excepturi, modi. Nostrum nisi a
            dolorum perspiciatis possimus quod officiis dolorem earum?
          </p>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleData.map((item) => (
              <div
                key={item.id}
                className="bg-white backdrop-blur-md rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover"
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
            <div className="flex justify-center mt-15">
              <CustomButton
                className="bg-gradient-to-br shadow-lg from-blue-400 via-blue-200 to-blue-600 hover:from-blue-600 hover:via-blue-200 hover:to-blue-400 text-white"
                label="Lihat Semua Layanan"
              />
            </div>
        </div>
      </div>

      {/* faq */}
      <div className="bg-sky">
        <div className="px-5 sm:px-7 md:px-6 lg:px-8 max-w-6xl mx-auto py-40">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Pertanyaan yang Sering Diajukan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faq.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg shadow-md bg-white backdrop-blur-sm"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left px-6 py-4 font-medium text-lg flex justify-between items-center hover:bg-gray-100 transition"
                >
                  {item.title}
                  <span className="ml-4 text-gray-500">
                    {openId === item.id ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`px-6 pt-0 pb-4 text-sm text-gray-700 transition-all duration-300 ease-in-out ${
                    openId === item.id
                      ? "max-h-screen opacity-100"
                      : "max-h-0 overflow-hidden opacity-0"
                  }`}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* kontak */}
      <div className="bg-sky low-sky">
        <div className=" px-5 sm:px-7 md:px-6 lg:px-15 py-12 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            Kontak Kami
          </h2>

          <div className="flex justify-center items-start px-4">
            <form className="bg-white backdrop-blur-md p-6 rounded-lg shadow-lg space-y-5 w-full max-w-xl">
              <h3 className="text-xl font-semibold mb-2">Kirim Pesan</h3>
              <div>
                <label className="block text-sm font-medium mb-1">Nama</label>
                <input
                  type="text"
                  placeholder="Nama Anda"
                  className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="email@domain.com"
                  className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Pesan</label>
                <textarea
                  rows="4"
                  placeholder="Tulis pesan Anda..."
                  className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
