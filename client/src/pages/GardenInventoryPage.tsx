import React, {useState} from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { IProduct } from "../types/Model";

export const GardenInventoryPage = () => {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: crypto.randomUUID(),
      name: "Emal Big",
      img: "/Painting-supplies/Emal-116-big.png",
      price: 500,
      inStock: true,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
      total: 0,
      quantity: 0
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/Painting-supplies/Emal-116.png",
      price: 650,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: false,
      total: 0,
      quantity: 0
    },
    {
      id: crypto.randomUUID(),
      name: "Emal Big",
      img: "/electric/nozzle.png",
      price: 500,
      inStock: true,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
      total: 0,
      quantity: 0
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/electric/screwdriver.png",
      price: 650,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: false,
      total: 0,
      quantity: 0
    },
    {
      id: crypto.randomUUID(),
      name: "Пиджак",
      img: "/overalls/blazer.png",
      price: 860,
      inStock: true,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
      total: 0,
      quantity: 0
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/overalls/helmet.png",
      price: 410,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: false,
      total: 0,
      quantity: 0
    },
    {
      id: crypto.randomUUID(),
      name: "Пиджак",
      img: "/for-home-and-cottage/1.png",
      price: 860,
      inStock: true,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
      total: 0,
      quantity: 0
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/for-home-and-cottage/2.png",
      price: 410,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: false,
      total: 0,
      quantity: 0
    },
    {
      id: crypto.randomUUID(),
      name: "Пиджак",
      img: "/seasonal/1.png",
      price: 860,
      inStock: true,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
      total: 0,
      quantity: 0
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/seasonal/2.png",
      price: 410,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: false,
      total: 0,
      quantity: 0
    },
    {
      id: crypto.randomUUID(),
      name: "Пиджак",
      img: "/tool/1.png",
      price: 860,
      inStock: true,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
      total: 0,
      quantity: 0
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/tool/2.png",
      price: 410,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: false,
      total: 0,
      quantity: 0
    },
  ]);
  return (
    <div>
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 flex flex-col gap-5">
        <div className="text-start mt-4 flex gap-2">
          <Link className="text-[#8A8A8A]" to="/">
            Главная
          </Link>
          /
          <Link className="text-[#8A8A8A]" to="/catalog">
            Каталог
          </Link>
          / <Link to="/garden-inventory-page">Садово-огородный инвентарь</Link>
        </div>
        <div className="text-4xl text-start">Садово-огородный инвентарь</div>
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col gap-6 mb-5">
            <div className="bg-[#212526] text-white">
              <ul>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Малярные товары <IoIosArrowForward />
                </li>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Электроинструмент <IoIosArrowForward />
                </li>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Спецодежда <IoIosArrowForward />
                </li>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Сезонное <IoIosArrowForward />
                </li>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Для дома и дачи <IoIosArrowForward />
                </li>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Инструменты <IoIosArrowForward />
                </li>
              </ul>
            </div>
            <div className="bg-[#212526] text-white">
              <ul>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Цена, ₽ <IoIosArrowDown />
                </li>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Бренд <IoIosArrowDown />
                </li>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Старна производитель <IoIosArrowDown />
                </li>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Цвет <IoIosArrowDown />
                </li>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Способ доставки <IoIosArrowDown />
                </li>
              </ul>
            </div>
            <div className="relative ">
              <div className="absolute left-5 top-5 text-white text-start">
                <p className="font-bold">Новое поступление</p>
                <p className="text-[12px]">Успей покататься</p>
              </div>
              <img
                className="w-[100%]"
                src="/new-arrival.png"
                alt="new-arrival"
              />
            </div>
            <div className="relative ">
              <div className="absolute left-5 top-5 text-white text-start">
                <p className="font-bold">Печи со скидкой</p>
                <p className="text-[12px]">до 30%</p>
              </div>
              <img className="w-[100%]" src="/oven.png" alt="new-arrival" />
            </div>
          </div>
          <div className="flex flex-col flex-[2] ">
            <div className="flex">
              <div className="flex">
                <p className="font-bold">Сортировать:</p>
                <select className="bg-white">
                  <option
                    className="border-none"
                    value="По популярности"
                    label="По популярности"
                  />
                  <option
                    value="По возрастанию цены"
                    label="По возрастанию цены"
                  />
                  <option value="По убыванию цены" label="По убыванию цены" />
                  <option value="Сначала новые" label="Сначала новые" />
                  <option value="От А до Я" label="От А до Я" />
                  <option value="От Я до А" label="От Я до А" />
                </select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 py-8">
              {products.map(product => (
                <Card key={product.id} product={product}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
