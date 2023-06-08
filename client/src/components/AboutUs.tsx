import React from "react";

export const AboutUs = () => {
  return (
    <div className="bg-[#CBCBCB]">
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 py-10 flex gap-10">
        <div className="flex-1">
          <img src="/about/about-img.png" alt="about-img" />
        </div>
        <div className="flex-1 flex flex-col gap-10">
          <p className="text-5xl text-[bold] text-start">О нас</p>
          <p className="text-start">
            Торговое или промышленное предприятие, торгово-промышленное
            объединение предпринимателей, форма организации предприятия,
            при которой его правосубъектность отличается от правосубъектности
            лиц, в нем участвующих. Торговое или промышленное предприятие,
            торгово-промышленное объединение предпринимателей, форма организации
            предприятия
          </p>
          <button className="bg-[#212526] w-[230px] h-[50px] text-white">ПЕРЕЙТИ В КАТАЛОГ</button>
        </div>
      </div>
    </div>
  );
};
