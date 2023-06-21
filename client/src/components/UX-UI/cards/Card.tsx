import { Tooltip } from "@material-tailwind/react";
import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineCheck, AiFillHeart } from "react-icons/ai";
import { FiBarChart2, FiCheckCircle } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks/hooks";
import { addToCart } from "../../../store/reducers/Cart";
import { addToFavorites } from "../../../store/reducers/Favorites";
import { addToСomparison } from "../../../store/reducers/Сomparison";
import { IProduct } from "../../../types/Model";

interface Props {
  product: IProduct;
}
export const Card = ({ product }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddFavorites, setIsAddFavorites] = useState(false);
  const [isAddComprison, setIsAddComprisson] = useState(false);

  const dispatch = useAppDispatch();

  const onAddProduct = () => {
    if (!isAddedToCart) {
      dispatch(addToCart(product));
      setIsAddedToCart(true);
      setIsClicked(true);
    }
  };
  const onAddFavorites = () => {
    if (!isAddFavorites) {
      dispatch(addToFavorites(product));
      setIsAddFavorites(true);
    }
  };
  const onAddCompaier = () => {
    if (!isAddComprison) {
      dispatch(addToСomparison(product));
      setIsAddComprisson(true);
    }
  };
  const bgBuy = isClicked ? "bg-[#F05A00] text-white" : "";
  const buyStyles = [
    "border text-3xl cursor-pointer w-[60px] h-[56px] flex justify-center items-center border-[#F05A00] text-[#F05A00]",
    bgBuy,
  ].join(" ");
  return (
    <div className="bg-white flex ml-3 gap-1 flex-col justify-between border px-2 py-2 w-[280px] h-[380px]">
      <div className="flex justify-between ">
        <p>
          {product.isNew ? (
            <span className="bg-[#180A3E] text-white px-1 py-1">Новинка</span>
          ) : (
            ""
          )}
        </p>
        <div className="text-gray-400 flex gap-2 text-2xl cursor-pointer">
          {!isAddComprison ? (
            <FiBarChart2 onClick={onAddCompaier} />
          ) : (
            <FiBarChart2 className="text-[#FC573B]" />
          )}

          <div>
            {isAddFavorites ? (
              <AiFillHeart className="text-[#FC573B]" />
            ) : (
              <AiOutlineHeart onClick={onAddFavorites} />
            )}
          </div>
        </div>
      </div>
      <Link to={`/card-product/${product.id}`} className="flex justify-center">
        <img
          className="w-[210px] h-[185px]"
          src={product.img}
          alt={product.name}
        />
      </Link>
      <Link
        to={`/card-product/${product.id}`}
        className="hover:text-[#F05A00] cursor-pointer"
      >
        {product.name}
      </Link>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <p className="font-bold">{product.price} ₽</p>
          <p className="text-[#DEDBDB] line-through text-[14px]">
            {product.isNew === false &&
              product.price + (product.price / 100) * 5}
          </p>
        </div>
        <div className=" w-fit flex gap-3 items-center">
          <p>
            {product.inStock ? (
              <span className="text-[#126935] text-[12px] flex gap-2 items-center justify-center">
                <AiOutlineCheck /> в наличии
              </span>
            ) : (
              <span className="text-red-500">под заказ</span>
            )}
          </p>
          <div
            onClick={onAddProduct}
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
