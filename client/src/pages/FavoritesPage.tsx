import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { GrClose } from "react-icons/gr";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../store/reducers/Cart";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Card } from "../components/Card";

export const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.items);
 
  return (
    <div className=" lg:px-32 md:px-7 flex flex-col gap-6 max-sm:px-4 sm:px-6 py-6 bg-[#CBCBCB]">
      <div className="flex gap-2">
        <span className="text-[#8A8A8A]">
          <Link to="/">Главная</Link>
        </span>
        / <Link to="/favorites">Избранное</Link>
      </div>
      <div className="text-4xl text-start">Избранное</div>
      <div className="flex">
        <div className="flex-1 text-start font-bold">{favorites.length} товаров</div>
        <div className="flex flex-[2] justify-start">
          <p className="font-bold">Сортировать:</p>
          <select className="bg-white">
            <option
              className="border-none"
              value="По популярности"
              label="По популярности"
            />
            <option value="По возрастанию цены" label="По возрастанию цены" />
            <option value="По убыванию цены" label="По убыванию цены" />
            <option value="Сначала новые" label="Сначала новые" />
            <option value="От А до Я" label="От А до Я" />
            <option value="От Я до А" label="От Я до А" />
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {favorites.map((favorite) => (
          <Card key={favorite.id} product={favorite} />
        ))}
      </div>
    </div>
  );
};
