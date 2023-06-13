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

  return (
    <div className="bg-[#212526] py-5">
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 flex flex-col gap-3">
        <div className="flex gap-2 text-white">
          <span className="text-[#8A8A8A]">
            <Link to="/">Главная</Link>
          </span>
          /{" "}
          <Link className="text-white" to="/dark-compair">
            Сравнение
          </Link>
        </div>
        <div className="text-4xl text-white flex justify-between">
          <div>Сравнение товаров</div>
          <div className="flex gap-2 text-black text-xl">
            <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer bg-white rounded-full">
              <MdOutlineArrowBackIos />
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer bg-white rounded-full">
              <MdOutlineArrowForwardIos />
            </div>
          </div>
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
        <div className="flex">
          <div className="text-[#F05A00] flex-1">Покозать только отличия</div>
          <div className="flex-[2] grid grid-cols-4">
            {comparison.map((compar) => (
              <CompareCard key={compar.id} compar={compar} />
            ))}
          </div>
        </div>
        <div>
          <div className="text-white text-start font-bold">
            Основные характеристики
          </div>
          <div className="grid grid-cols-5 grid-rows-{10}">
            <div className="grid">1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
        </div>
      </div>
    </div>
  );
};
