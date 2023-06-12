import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ICatalog {
  id: string;
  name: string;
  img: string;
}

export const CatalogPage = () => {
  const [catalogs, setCatalogs] = useState<ICatalog[]>([
    {
      id: crypto.randomUUID(),
      name: "Поливочный инвентарь",
      img: "/catalog/1.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Насосы",
      img: "/catalog/2.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Поликарбонат",
      img: "/catalog/3.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Садово-огородный инвентарь",
      img: "/catalog/4.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Поливочный инвентарь",
      img: "/catalog/5.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Грунд",
      img: "/catalog/6.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Сетка Рабица",
      img: "/catalog/7.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Летний душ",
      img: "/catalog/4.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Умывальники, рукомойники",
      img: "/catalog/3.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Побелка",
      img: "/catalog/5.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Краска садовая",
      img: "/catalog/2.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Удобрения",
      img: "/catalog/6.png",
    },
  ]);

  return (
    <div className="bg-[#CBCBCB;]">
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 pt-5 flex flex-col gap-4">
        <div className="text-start">
          <span className="text-[#8A8A8A]">
            <Link to="/">Главная</Link>
          </span>
          / <Link to="/catalog">Каталог</Link>
        </div>
        <div className="text-4xl text-start">Каталог</div>
        <div className="bg-white">
          <div className="mb-8">
            <div className="flex">
              <div className="flex-1 bg-white py-3 border cursor-pointer border-blue-gray-200">
                Малярные товары
              </div>
              <div className="flex-1 bg-white py-3 border cursor-pointer border-blue-gray-200">
                Электрооборудование
              </div>
              <div className="flex-1 bg-white py-3 border cursor-pointer border-blue-gray-200">
                Спецодежда
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 bg-white py-3 border cursor-pointer border-blue-gray-200">
                Сезонное
              </div>
              <div className="flex-1 py-3 border border-blue-gray-400 cursor-pointer bg-[#F05A00] text-white">
                Для дома и дачи
              </div>
              <div className="flex-1 bg-white py-3 border border-blue-gray-200 cursor-pointer">
                Инструменты
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {catalogs.map((catalog) => (
              <div className="w-[310px] h-[348px] flex flex-col bg-[#F2F5F7]">
                <div className="flex justify-center py-[44px] px-[55px]">
                  <img src={catalog.img} alt={catalog.name} />
                </div>
                {catalog.name === "Садово-огородный инвентарь" ? (
                  <Link
                    className="py-4 hover:bg-[#F05A00] cursor-pointer bg-black text-white"
                    to="/garden-inventory-page"
                  >
                    Садово-огородный инвентарь
                  </Link>
                ) : (
                  <p className="py-4 hover:bg-[#F05A00] cursor-pointer bg-black text-white">
                    {catalog.name}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
