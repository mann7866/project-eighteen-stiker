import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ProductsPage from "../pages/Product";
import KatalogPage from "../pages/Katalog";
import FaqPage from "../pages/Faq";
import ContactPage from "../pages/Contact";
import FooterComponent from "../components/Footer";
import Navbar from "../components/Navbar";

function AppRoutes() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ProductsPage />} />
        <Route path="/galery" element={<KatalogPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      
      <FooterComponent />
    </div>
  );
}

export default AppRoutes;
