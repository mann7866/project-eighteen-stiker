import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProductsPage from "./pages/Product";
import ContactPage from "./pages/Contact";
import FaqPage from "./pages/Faq";
import FooterComponent from "./components/Footer";
import logo from "../public/assets/images/logo/logo.png";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <AppRoutes/>
    </>
  );
}

export default App;
