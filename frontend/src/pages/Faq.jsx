import React, { useState } from "react";
import { faq } from "../../public/datas";

const FaqPage = () => {
  const [openId, setOpenId] = useState(null);
  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-sky low-sky">
       <div className="px-5 sm:px-7 md:px-6 max-w-6xl lg:px-8 mx-auto">
      <div className="py-25 md:py-50">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-20">
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
    </div>
   
  );
};

export default FaqPage;
