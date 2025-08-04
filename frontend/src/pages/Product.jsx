import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../public/datas";
import ProductList from "../components/ProductList";

const ProductsPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const handleOrderClick = (type) => {
    navigate(`/order/now?type=${type}`);
  };

  const toggleDesc = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-sky low-sky px-5 sm:px-7 md:px-6 lg:px-15 max-w-7xl mx-auto mt-20">
      <div className="py-16 md:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12"
        data-aos="zoom-in-right"
                data-aos-duration="1000"
                data-aos-once="true"
                >
          Produk & Layanan
        </h2>

        <ProductList/>
      </div>
    </div>
  );
};

export default ProductsPage;
