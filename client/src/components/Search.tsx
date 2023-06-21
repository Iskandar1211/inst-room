import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../types/Model";

interface Props {
  filterProduct: IProduct;
}

export const Search = ({ filterProduct }: Props) => {
 
  return (
    <Link to={`/card-product/${filterProduct.id}`} className="flex shadow-md hover:scale-105 items-center px-6 py-3 w-[90%] justify-between">
      <img
        className="h-[60px] w-[60px]"
        src={filterProduct.img}
        alt={filterProduct.name}
      />
      <p className="w-[250px]">{filterProduct.name}</p>
      <b>{filterProduct.price} ₽</b>
    </Link>
  );
};
