import logo from "../../public/assets/images/logo/logo.png";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [animation, setAnimation] = useState("bounce");

  useEffect(() => {
    const cycle = setInterval(() => {
      setAnimation((prev) => (prev === "bounce" ? "flip3d" : "bounce"));
    }, 2000); // Setiap 2 detik ganti animasi

    return () => clearInterval(cycle);
  }, []);

  return (
    <>
      <div className="bg-sky low-sky min-h-[500px] px-5 py-8 sm:px-7 md:px-6 lg:px-15 ">
        <div className="mt-20 md:mt-40">
          <div className="mb-15 flex justify-center">
            <h1
              className="font-extrabold text-lg md:text-2xl lg:text-3xl"
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Tentang EighteenSticker
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div
              className="backdrop-blur-md shadow-lg rounded-lg w-full p-6 sm:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-white bg-white/30"
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-once="true"
            >
              {/* <h1 className="md:text-xl text-md font-bold mb-4 text-center sm:text-left">
                Tentang EighteenSticker
              </h1> */}
              <p className="md:text-lg text-sm text-justify mb-6">
                EighteenSticker lahir dari sebuah mimpi sederhana: bagaimana
                caranya menghadirkan stiker, gantungan kunci, dan desain kreatif
                yang bukan hanya sekadar produk, tapi juga punya cerita dan
                makna di baliknya. Kami percaya, setiap orang butuh cara untuk
                mengekspresikan diri. Lewat desain yang unik, detail yang rapi,
                dan kualitas yang terjaga, EighteenSticker berusaha jadi teman
                setiap langkahmu—baik untuk kebutuhan personal, komunitas,
                hingga bisnis. Dengan semangat anak muda, kami membangun
                EighteenSticker dari nol. Bukan hanya soal usaha, tapi juga
                tentang perjalanan, kegigihan, dan keinginan untuk selalu
                berkembang. Itulah kenapa kami selalu terbuka dengan kritik,
                saran, bahkan ide dari pelanggan, karena kami ingin
                tumbuh bersama kalian.
              </p>
            </div>
            <div
              className="w-full flex justify-center md:justify-end"
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <div className="w-[250px] md:w-[300px] rounded-lg overflow-hidden perspective-1000">
                <img
                  loading="lazy"
                  src={logo}
                  alt="Hero"
                  className={`w-full rounded-lg transition-all duration-300 hover:scale-105  ${animation}`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section - Order 1 di mobile, 2 di desktop */}
          <div
            className="order-1 md:order-2 backdrop-blur-md shadow-lg rounded-lg w-full p-6 sm:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-white bg-white/30"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-delay="1000"
            data-aos-once="true"
          >
            <div className="mb-6">
              <h2 className="md:text-xl text-md font-semibold mb-2">Visi</h2>
              <p className="md:text-lg text-sm text-justify">
                Menyediakan jasa percetakan yang profesional, terpercaya, dan
                berkualitas, dengan hasil yang memuaskan.
              </p>
            </div>
            <div>
              <h2 className="md:text-xl text-md font-semibold mb-2">Misi</h2>
              <ul className="list-disc list-inside md:text-lg text-sm text-justify space-y-1">
                <li>
                  Mengerjakan setiap pesanan dengan penuh ketelitian dan
                  tanggung jawab.
                </li>
                <li>
                  Memberikan pelayanan terbaik yang ramah dan profesional.
                </li>
                <li>
                  Menjamin ketepatan waktu dalam proses pengerjaan pesanan.
                </li>
                <li>
                  Menyediakan produk cetak berkualitas tinggi dan tahan lama.
                </li>
                <li>
                  Mendukung kreativitas pelanggan melalui desain fleksibel dan
                  personalisasi.
                </li>
                <li>
                  Terus berinovasi dengan teknologi produksi modern dan
                  penggunaan bahan ramah lingkungan.
                </li>
              </ul>
            </div>
          </div>

          {/* Image Section - Order 2 di mobile, 1 di desktop */}
          <div
            className="order-2 md:order-1 w-full flex justify-center md:justify-start"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-delay="1100"
            data-aos-once="true"
          >
            <div className="w-[300px] rounded-lg overflow-hidden perspective-1000">
              <img
                loading="lazy"
                src={logo}
                alt="Hero"
                className={`w-full rounded-lg transition-all duration-300 hover:scale-105  ${animation}`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
