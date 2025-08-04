import logo from "../../public/assets/images/logo/logo.png";
import CustomButton from ".././components/ComponentsUi";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { katalogDatas, products, faq } from "../../public/datas";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import FormContact from "../components/FormContact";
import { ArrowBigRight, ArrowBigRightDash } from "lucide-react";
import ProductList from "../components/ProductList";

export default function HomePage() {
  const [openId, setOpenId] = useState(null);

  const [animation, setAnimation] = useState("bounce");

  useEffect(() => {
    const cycle = setInterval(() => {
      setAnimation((prev) => (prev === "bounce" ? "flip3d" : "bounce"));
    }, 2000); // Setiap 2 detik ganti animasi

    return () => clearInterval(cycle);
  }, []);

  const navigate = useNavigate();

  const handleOrderClick = (type) => {
    navigate(`/order/now?type=${type}`);
  };

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <>
      <div className="home-header h-[1080px] sm:h-[1050px] md:h-[900px] lg:h-[700px] pt-[150px]">
        <div className="home text-black flex ">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center py-0 px-5 sm:px-7 md:px-6 lg:px-15">
            <div>
              <h1 className="text-5xl/tight md:text-6xl/tight font-bold mb-4  animate__animated animate__fadeInUp animate__delay-1s">
                Stiker Custom{" "}
                <span className="bg-red-500 p-1 text-4xl md:text-5xl">
                  Berkualitas
                </span>{" "}
                untuk Segala Kebutuhan
              </h1>
              <p className="text-base/loose opacity-50 mb-6  animate__animated animate__fadeInUp animate__delay-2s">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatibus explicabo exercitationem ducimus modi dolor sunt,
                earum dicta quidem distinctio mollitia!
              </p>

              <div className="flex items-center sm:gap-4 gap-2  animate__animated animate__fadeInUp animate__delay-2s">
                <CustomButton
                  to="/order/now"
                  label="Pesan Sekarang"
                  className="bg-gradient-to-br shadow-lg shadow-blue-300 from-blue-600 via-blue-200 to-blue-800 hover:from-blue-800 hover:via-blue-200 hover:to-blue-600 text-white"
                />
                <CustomButton
                  to="/service"
                  className="bg-gradient-to-br shadow-lg shadow-red-200 from-red-400 via-red-200 to-red-700 hover:from-red-700 hover:via-red-200 hover:to-red-400 text-white"
                  label="Lihat Layanan"
                />
              </div>
            </div>
            <div className="animate__animated animate__fadeInUp animate__delay-3s">
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
          <div
            className="backdrop-blur-md shadow-lg rounded-lg w-full p-6 sm:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-white bg-white/30"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
            data-aos-once="true"
          >
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
          <div
            className="w-full flex justify-center md:justify-end"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
            data-aos-once="true"
          >
            <div className="w-[300px] rounded-lg overflow-hidden perspective-1000">
              <img
                loading="lazy"
                src={logo}
                alt="Hero"
                className={`w-full rounded-lg transition-all duration-300 hover:scale-105 ${animation}`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* product page */}
      <div className="bg-sky px-5 sm:px-7 md:px-6 lg:px-15 py-0 max-w-7xl mx-auto">
        <div
          className="py-20"
         
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-br from-blue-200 via-blue-400 to-blue-800 bg-clip-text text-transparent"
           data-aos="zoom-in-right"
          data-aos-duration="1000"
          data-aos-once="true"
          >
            Produk & Layanan
          </h2>

          <p className=" max-w-2xl text-center mx-auto mt-4"
           data-aos="zoom-in-right"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            fugiat aut reprehenderit dolorum. Excepturi, modi. Nostrum nisi a
            dolorum perspiciatis possimus quod officiis dolorem earum?
          </p>
        </div>

        <ProductList />
        <div
          className="flex justify-center mt-15"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <CustomButton
            to="/service"
            className="bg-gradient-to-br flex gap-2 items-center from-emerald-400 via-emerald-200 to-emerald-600 hover:from-emerald-600 hover:via-emerald-200 hover:to-emerald-400 text-white"
            label="Lihat Semua Layanan"
            icone={<ArrowBigRightDash size={20} />}
          />
        </div>
      </div>

      {/* galery */}
      <div className="bg-blue-300 mt-20 px-5 sm:px-7 md:px-6 lg:px-15">
        <div className="py-20">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-5 text-white"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Galeri
          </h2>
          <p
            className="max-w-2xl text-center mx-auto mb-10 text-white"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            fugiat aut reprehenderit dolorum. Excepturi, modi. Nostrum nisi a
            dolorum perspiciatis possimus quod officiis dolorem earum?
          </p>

          {/* Swiper Gallery */}
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={16}
            slidesPerView={2} // <-- default untuk ukuran kecil (misal HP)
            breakpoints={{
              640: { slidesPerView: 2 }, // untuk ukuran >= 640px
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="my-10"
          >
            {katalogDatas.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div
                  className="bg-white backdrop-blur-md rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all h-full"
                  data-aos="zoom-in-left"
                  data-aos-duration="1000"
                  data-aos-delay={index * 1000}
                  data-aos-once="true"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto object-cover"
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
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className="flex justify-center mt-10"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <CustomButton
              icone={<ArrowBigRight size={20} />}
              to="/galery"
              className="bg-gradient-to-br shadow-lg flex gap-2 from-blue-400 via-blue-200 to-blue-600 hover:from-blue-600 hover:via-blue-200 hover:to-blue-400 text-white"
              label="Lihat galeri"
            />
          </div>
        </div>
      </div>

      {/* faq */}
      <div className="bg-sky">
        <div className="px-5 sm:px-7 md:px-6 lg:px-8 max-w-6xl mx-auto py-40">
          <div className="text-2xl sm:text-3xl font-bold text-center mb-10">
            <h2
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faq.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay={item.delay}
                data-aos-once="true"
                className="border border-gray-200 rounded-lg shadow-md bg-white backdrop-blur-sm"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left px-6 py-4 font-medium text-sm md:text-lg flex justify-between items-center hover:bg-gray-100 transition"
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
      <div
        className="bg-sky low-sky"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className=" px-5 sm:px-7 md:px-6 lg:px-15 py-12 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            Kontak Kami
          </h2>

          <div className="flex justify-center items-start px-4">
            <FormContact />
          </div>
        </div>
      </div>
    </>
  );
}
