import React, { useState, useEffect } from "react";
import { IProduct } from "../types/Model";
import { FeaturesCarousel } from "./UX-UI/carousel/FeaturesCarousel";

export const FeaturedItems = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [itemList, setItemList] = useState("");
  const [activeLink, setActiveLink] = useState<boolean>(false);

  useEffect(() => {
    fetch("http://localhost:3009/products")
      .then((response) => response.json())
      .then((products) => {
        if (itemList === "") {
          setProducts(
            products.filter((product: IProduct) => product.isNew === true)
          );
          setActiveLink(false);
        } else if (itemList === "Акции") {
          setProducts(
            products.filter((product: IProduct) => product.isNew === false)
          );
          setActiveLink(true);
        } else if (itemList === "Новинки") {
          setProducts(
            products.filter((product: IProduct) => product.isNew === true)
          );
          setActiveLink(false);
        }
      });
  }, [itemList]);

  const styleLinkNews = !activeLink
    ? "text-white cursor-pointer"
    : "text-[#212526] cursor-pointer";
  const styleStock = activeLink
    ? "text-white cursor-pointer"
    : "text-[#212526] cursor-pointer";
  return (
    <div className="bg-[#212526]">
      <div className="bg-black py-3 px-2 lg:px-32 md:px-7 max-sm:px-4 sm:px-6">
        <ul className="flex gap-12">
          <li onClick={() => setItemList("Новинки")} className={styleLinkNews}>
            Новинки
          </li>
          <li onClick={() => setItemList("Акции")} className={styleStock}>
            Акции
          </li>
        </ul>
      </div>
      <div className="bg-[#212526] py-5">
        <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 ">
          <div className="md:w-[93%] m-auto w-[78%]">
            <FeaturesCarousel products={products} slideToShow={4} />
          </div>
        </div>
      </div>
    </div>
  );
};
