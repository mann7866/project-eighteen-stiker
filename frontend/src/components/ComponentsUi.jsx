import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({
  to = "#",
  label = "Klik di sini",
  className = "",
  external = false, // jika true maka <a>, kalau false maka <Link>
  icone = null
}) => {
  const buttonClasses = ` px-6 py-3 rounded-md font-semibold shadow-md transition duration-300 hover:opacity-90 ${className}`;

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
        {label}
        {icone}
      </a>
    );
  }

  return (
    <>
    <Link to={to} className={buttonClasses}>
      {label}
      {icone}
    </Link>
    </>
  );
};

export default CustomButton;
