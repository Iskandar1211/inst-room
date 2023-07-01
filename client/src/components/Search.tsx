import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../types/Model";

interface Props {
  filterProduct: IProduct;
}

export const Search = ({ filterProduct }: Props) => {
 
  return (
    <Link to={`/card-product/${filterProduct.id}`} className="flex shadow-md hover:scale-105 items-center px-6 py-3 md:w-[90%] md:flex-row md:justify-between w-fit flex-col">
      <img
        className="md:h-[60px] md:w-[60px] h-[45px] w-[45px]"
        src={filterProduct.img}
        alt={filterProduct.name}
      />
      <p className="md:w-[250px] w-[35vw]">{filterProduct.name}</p>
      <b>{filterProduct.price} ₽</b>
    </Link>
  );
};
