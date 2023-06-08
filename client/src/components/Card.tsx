import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { IProduct } from "../types/Model";

interface Props {
  product: IProduct;
}

export const Card = ({ product }: Props) => {
  return (
    <div className="bg-white flex gap-2 flex-col justify-between border px-2 py-2">
      <div className="flex justify-between ">
        <p>
          {product.isNew ? (
            <span className="bg-[#180A3E] text-white px-1 py-1">Новинка</span>
          ) : (
            ""
          )}
        </p>
        <div className="text-gray-400 flex gap-2 text-2xl cursor-pointer">
          <FiBarChart2 />
          <AiOutlineHeart />
        </div>
      </div>
      <h1>{product.name}</h1>
      <div className="flex justify-center">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="flex gap-2">
        <span className="flex-1 bg-[#DEDBDB] cursor-pointer h-[3px] rounded"></span>
        <span className="flex-1 bg-[#DEDBDB] cursor-pointer h-[3px] rounded"></span>
        <span className="flex-1 bg-[#F05A00] cursor-pointer h-[3px] rounded"></span>
        <span className="flex-1 bg-[#DEDBDB] cursor-pointer h-[3px] rounded"></span>
      </div>
      <p className="text-start">{product.detailed}</p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <p>{product.price}</p>
        </div>
        <div className=" w-fit flex gap-3 items-center">
          <p>
            {product.inStock ? (
              <span className="text-[#126935]">В наличии</span>
            ) : (
              <span className="text-red-500">нет в наличии</span>
            )}
          </p>
          <div
            style={{ borderRadius: "5px 0px" }}
            className="border px-2 py-2 text-2xl rounded-[5px 0px] border-[#F05A00] text-[#F05A00]"
          >
            <SlBasket />
          </div>
        </div>
      </div>
    </div>
  );
};
