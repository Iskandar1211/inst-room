import React, { useState } from "react";
import { AiFillHeart, AiOutlineCheck } from "react-icons/ai";
import { FiBarChart2, FiCheckCircle } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { useAppDispatch } from "../../../store/hooks/hooks";
import { addToCart } from "../../../store/reducers/Cart";
import { IProduct } from "../../../types/Model";

interface Props {
  favorite: IProduct;
}

export const CardFavorites = ({ favorite }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const dispatch = useAppDispatch();

  const bgBuy = isClicked ? "bg-[#F05A00] text-white" : "";
  const buyStyles = [
    "border text-3xl cursor-pointer w-[60px] h-[56px] flex justify-center items-center border-[#F05A00] text-[#F05A00]",
    bgBuy,
  ].join(" ");
  return (
    <div
      key={favorite.id}
      className="bg-white flex gap-2 flex-col justify-between border px-2 py-2 w-[280px] h-[380px]"
    >
      <div className="flex justify-between ">
        <p>
          {favorite.isNew ? (
            <span className="bg-[#180A3E] text-white px-1 py-1">Новинка</span>
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
      <div className="flex justify-center">
        <img
          className="w-[210px] h-[185px]"
          src={favorite.img}
          alt={favorite.name}
        />
      </div>
      <h1 className="hover:text-blue-500 cursor-pointer">
        {favorite.name}
      </h1>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <p className="font-bold">{favorite.price} ₽</p>
          <p className="text-[#DEDBDB] line-through">
            {favorite.isNew === false &&
              favorite.price + (favorite.price / 100) * 5}
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
  );
};
