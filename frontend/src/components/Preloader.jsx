import { useState, useEffect } from "react";
import logo from "../../public/assets/images/logo/logo.png";
const PageLoader = () => {
  const [animation, setAnimation] = useState("bounce");

  useEffect(() => {
    const cycle = setInterval(() => {
      setAnimation((prev) => (prev === "bounce" ? "flip3d" : "bounce"));
    }, 2000);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="loader-container">
      <img src={logo} alt="Loading..." className={`logo-loader ${animation}`} />
    </div>
  );
};

export default PageLoader;
