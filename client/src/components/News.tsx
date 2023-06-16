import React from "react";
import { Link } from "react-router-dom";

export const News = () => {
  return (
    <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 mb-10">
      <div className="mt-16 flex flex-col lg:flex-row gap-4">
        <div className="flex-1 flex flex-col justify-start gap-7 ">
          <p className="text-3xl ">Новости</p>
          <p className="text-start">
            Торговое или промышленное предприятие, торгово-промышленное
            объединение предпринимателей, форма организации предприятия,
            при которой его правосубъектность отличается от правосубъектности
            лиц, в нем участвующих. Компании имеют статус юридического лица.
          </p>
          <Link to='/detail-news' className="bg-[#F05A00] hover:bg-black text-white w-[250px] flex justify-center items-center h-[50px] ">
            ПЕРЕЙТИ К НОВОСТЯМ
          </Link>
        </div>
        <div className="flex-1 flex flex-col gap-6 lg:grid lg:grid-cols-1 md:grid-cols-2">
          <div>
            <img src="/news/1.png" alt="news" />
            <p className="text-start text-2xl ">Название новости</p>
            <p className="text-start">12 января 2023</p>
          </div>
          <div>
            <img src="/news/2.png" alt="news" />
            <p className="text-start text-2xl">Название новости</p>
            <p className="text-start">12 января 2023</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6 lg:grid lg:grid-cols-1 md:grid-cols-2">
          <div>
            <img src="/news/2.png" alt="news" />
            <p className="text-start text-2xl ">Название новости</p>
            <p className="text-start">12 января 2023</p>
          </div>
          <div>
            <img src="/news/1.png" alt="news" />
            <p className="text-start text-2xl">Название новости</p>
            <p className="text-start">12 января 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};
