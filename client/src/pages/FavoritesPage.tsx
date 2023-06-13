import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { addToCart } from "../store/reducers/Cart";
import { AiFillHeart, AiOutlineCheck } from "react-icons/ai";
import { FiBarChart2, FiCheckCircle } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";

export const FavoritesPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const favorites = useAppSelector((state) => state.favorites.items);
  const dispatch = useAppDispatch();


  const bgBuy = isClicked ? "bg-[#F05A00] text-white" : "";
  const buyStyles = [
    "border text-3xl cursor-pointer w-[60px] h-[56px] flex justify-center items-center border-[#F05A00] text-[#F05A00]",
    bgBuy,
  ].join(" ");
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
        <div className="flex-1 text-start font-bold">
          {favorites.length} товаров
        </div>
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
          <div
            key={favorite.id}
            className="bg-white flex gap-2 flex-col justify-between border px-2 py-2"
          >
            <div className="flex justify-between ">
              <p>
                {favorite.isNew ? (
                  <span className="bg-[#180A3E] text-white px-1 py-1">
                    Новинка
                  </span>
                ) : (
                  ""
                )}
              </p>
              <div className="text-gray-400 flex gap-2 text-2xl cursor-pointer">
                <FiBarChart2 />
                <div>
                  <AiFillHeart className="text-[#FC573B]" />
                </div>
              </div>
            </div>
            <h1>{favorite.name}</h1>
            <div className="flex justify-center">
              <img src={favorite.img} alt={favorite.name} />
            </div>
            <div className="flex gap-2">
              <span className="flex-1 bg-[#DEDBDB] cursor-pointer h-[3px] rounded"></span>
              <span className="flex-1 bg-[#DEDBDB] cursor-pointer h-[3px] rounded"></span>
              <span className="flex-1 bg-[#F05A00] cursor-pointer h-[3px] rounded"></span>
              <span className="flex-1 bg-[#DEDBDB] cursor-pointer h-[3px] rounded"></span>
            </div>
            <p className="text-start">{favorite.detailed}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <p className="font-bold">{favorite.price} ₽</p>
                <p className="text-[#DEDBDB] line-through">
                  {favorite.price + 200}
                </p>
              </div>
              <div className=" w-fit flex gap-3 items-center">
                <p>
                  {favorite.inStock ? (
                    <span className="text-[#126935] flex gap-2 items-center justify-center">
                      <AiOutlineCheck /> в наличии
                    </span>
                  ) : (
                    <span className="text-red-500">нет в наличии</span>
                  )}
                </p>
                <div
                  onClick={() => {
                    if (!isAddedToCart) {
                      dispatch(addToCart(favorite));
                      setIsAddedToCart(true);
                      setIsClicked(true);
                    }
                  }}
                  style={{ borderRadius: "5px 0px" }}
                  className={buyStyles}
                >
                  {!isClicked ? <SlBasket /> : <FiCheckCircle />}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
