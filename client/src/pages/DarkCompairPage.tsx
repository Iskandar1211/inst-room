import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { News } from "../components/News";
import { SlBasket } from "react-icons/sl";
import { FiCheckCircle } from "react-icons/fi";
import { addToCart } from "../store/reducers/Cart";
import { IProduct } from "../types/Model";
import { CompairCard } from "../components/UX-UI/cards/CompairCard";

export const DarkCompairPage = () => {
  const comparison = useAppSelector((state) => state.comparison.comparison);

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
        <div className="grid grid-cols-3 gap-3 text-white py-2">
          {comparison.map((product) => (
            <CompairCard key={product.id} product={product} />
          ))}
        </div>
        <News />
      </div>
    </div>
  );
};
