import { useEffect, useState } from "react";
import "./App.css";
import AppRoutes from "./routes";
import ScrollToTop from "./components/ScroolToTop";
import PageLoader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => setLoading(false), 2500); // 2.5 detik
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <>
      <ScrollToTop />
      <AppRoutes />
    </>
  );
}

export default App;
