import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useAppDispatch } from "../store/hooks/hooks";
import { addToCart } from "../store/reducers/Cart";
import { IProduct } from "../types/Model";
import { removeFromСomparison } from "../store/reducers/Сomparison";

interface Props {
  compar: IProduct;
}

export const CompareCard = ({ compar }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useAppDispatch();

  const buyStyles = [
    " text-3xl cursor-pointer text-[#F05A00] flex justify-center items-center text-[#F05A00]",
  ].join(" ");
  return (
    <div
      key={compar.id}
      className="bg-[#3B3B3B] p-[16px] gap-2 relative w-[200px] h-[200px] flex flex-col justify-center items-center"
    >
      <AiOutlineClose
        onClick={() => dispatch(removeFromСomparison(compar.id))}
        className="absolute right-1 top-1 text-white cursor-pointer text-2xl"
      />
      <img className="w-1/2" src={compar.img} alt={compar.name} />
      <p className="text-start text-white">{compar.detailed}</p>
      <div className="flex justify-between w-[100%]">
        <div className="text-white">{compar.price} ₽</div>
        <div
          onClick={() => {
            dispatch(addToCart(compar));
            setIsClicked(true);
          }}
          style={{ borderRadius: "5px 0px" }}
          className={buyStyles}
        >
          {!isClicked ? <SlBasket /> : <FiCheckCircle />}
        </div>
      </div>
    </div>
  );
};
