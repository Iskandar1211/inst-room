import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useAppDispatch } from "../../../store/hooks/hooks";
import { addToCart } from "../../../store/reducers/Cart";
import { IProduct } from "../../../types/Model";
import { removeFromСomparison } from "../../../store/reducers/Сomparison";
import { SlBasket } from "react-icons/sl";
import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

interface Props {
  product: IProduct;
}

export const CompairCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const [isClicked, setIsClicked] = useState(false);

  const onAddProduct = (product: IProduct) => {
    if (!isClicked) {
      dispatch(addToCart(product));
      setIsClicked(true);
    }
  };

  return (
    <div
      className=" px-2 pb-6 pt-2 rounded-lg bg-[#3B3B3B] h-[600px] shadow-lg"
      key={product.id}
    >
      <div className="flex justify-end ">
        <AiOutlineClose
          onClick={() => dispatch(removeFromСomparison(product.id))}
          className="text-2xl hover:bg-orange-600 hover:text-black/50 rounded-full cursor-pointer"
        />
      </div>
      <div className="flex flex-col h-[100%] justify-around px-3">
        <div className="flex justify-center items-center">
          <img
            className="w-[200px] h-[170px]"
            src={product.img}
            alt={product.name}
          />
        </div>
        <Link
          to={`/card-product/${product.id}`}
          className=" text-xl hover:text-blue-500 cursor-pointer"
        >
          {product.name}
        </Link>
        <div>
          <p className="text-center text-white/80 text-[1.2rem]">
            Описание товара
          </p>
          <p className="text-start h-[170px] text-[14px] overflow-hidden">
            {product.detailed}
          </p>
        </div>
        <div className="flex py-2 justify-between text-4xl ">
          <p>{product.price} ₽</p>
          <div
            className="text-[#FC573B]"
            onClick={() => onAddProduct(product)}
            style={{ borderRadius: "5px 0px" }}
          >
            {!isClicked ? <SlBasket /> : <FiCheckCircle />}
          </div>
        </div>
      </div>
    </div>
  );
};
