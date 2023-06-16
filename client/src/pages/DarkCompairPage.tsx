import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { CompareCard } from "../components/CompareCard";
import { useAppSelector } from "../store/hooks/hooks";

export const DarkCompairPage = () => {
  const comparison = useAppSelector((state) => state.comparison.comparison);

  const addToCart = (productId:string) => {
    const product = comparison.find((p) => p.id === productId);
    
  };

  const removeFromCart = (productId:string) => {
   
  };
  return (
    <div className="bg-[#212526] py-5">
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 flex flex-col gap-3">
        <div className="flex gap-2 text-white">
          <span className="text-[#8A8A8A]">
            <Link to="/">Главная</Link>
          </span>
          /
          <Link className="text-white" to="/dark-compair">
            Сравнение
          </Link>
        </div>
        <div className="text-4xl text-white flex justify-between">
          <div>Сравнение товаров</div>
        </div>
        <div>
          <ul className="flex gap-2 text-white">
            <li className="bg-[#3B3B3B] px-[40px] py-[22px] rounded-[5px] hover:bg-[#F05A00] cursor-pointer">
              Малярные товары
            </li>
            <li className="bg-[#3B3B3B] px-[40px] py-[22px] rounded-[5px] hover:bg-[#F05A00] cursor-pointer">
              Электрооборудование
            </li>
            <li className="bg-[#3B3B3B] px-[40px] py-[22px] rounded-[5px] hover:bg-[#F05A00] cursor-pointer">
              Кисти
            </li>
            <li className="bg-[#3B3B3B] px-[40px] py-[22px] rounded-[5px] hover:bg-[#F05A00] cursor-pointer">
              Тачки садовые
            </li>
            <li className="bg-[#3B3B3B] px-[40px] py-[22px] rounded-[5px] hover:bg-[#F05A00] cursor-pointer">
              Грунт
            </li>
            <li className="bg-[#3B3B3B] px-[40px] py-[22px] rounded-[5px] hover:bg-[#F05A00] cursor-pointer">
              Насосы
            </li>
            <li className="bg-[#3B3B3B] px-[40px] py-[22px] rounded-[5px] hover:bg-[#F05A00] cursor-pointer">
              Поликарбон
            </li>
          </ul>
        </div>
        <div className="flex text-white">
          <table className="border mt-4 mb-4 w-[100%]">
            <thead>
              <tr className="border">
                <th className="border p-2">Имя товара</th>
                <th className="border p-2">Цена</th>
                <th className="border p-2">Описание</th>
                <th className="border p-2">В корзину</th>
                <th className="border p-2">Удалить</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((compar) => (
                <tr key={compar.id}>
                  <td className="border p-2 flex flex-col justify-center items-center">
                    {<img src={compar.img} alt={compar.name}/>}
                    {compar.name}
                  </td>
                  <td className="border p-2">{compar.price}</td>
                  <td className="border p-2">{compar.detailed}</td>
                  <td className="border p-2">
                    <button >
                      В корзину
                    </button>
                  </td> 
                  <td className="border p-2">
                    <button >
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
