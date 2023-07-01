import React from "react";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  return (
    <div className="bg-[#CBCBCB]">
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 py-10 md:flex md:gap-10 md:flex-row flex flex-col">
        <div className="flex-1">
          <img src="/about/about-img.png" alt="about-img" />
        </div>
        <div className="flex-1 flex flex-col md:gap-10 gap-4 px-4">
          <p className=" md:text-5xl text-3xl text-[bold] text-start">О нас</p>
          <p className="text-start">
            Торговое или промышленное предприятие, торгово-промышленное
            объединение предпринимателей, форма организации предприятия,
            при которой его правосубъектность отличается от правосубъектности
            лиц, в нем участвующих. Торговое или промышленное предприятие,
            торгово-промышленное объединение предпринимателей, форма организации
            предприятия
          </p>
          <Link
            to={`/catalog/${"painting-supplies"}`}
            className="bg-[#212526] w-[230px] h-[50px] text-white hover:bg-[#F05A00] flex justify-center items-center"
          >
            ПЕРЕЙТИ В КАТАЛОГ
          </Link>
        </div>
      </div>
    </div>
  );
};
