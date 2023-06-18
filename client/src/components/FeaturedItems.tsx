import React, { useState, useEffect } from "react";
import { IProduct } from "../types/Model";
import { FeaturesCarousel } from "./UX-UI/carousel/FeaturesCarousel";

export const FeaturedItems = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const [news, SetNews] = useState<IProduct[]>([]);
  const [filterProducts, setFilterProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:3009/products")
      .then((response) => response.json())
      .then((product) => {
        setProducts(product);
        SetNews(products.filter((product) => product.isNew === true));
      });
  });

  const onFilterProducts = (item: string) => {
    if (item === "Новинки") {
      setFilterProducts(products.filter((product) => product.isNew === true));
      setActiveLink(false);
    } else if (item === "Акции") {
      setFilterProducts(products.filter((product) => product.isNew === false));
      setActiveLink(true);
    }
  };
  const [activeLink, setActiveLink] = useState(false);
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
          <li
            onClick={() => onFilterProducts("Новинки")}
            className={styleLinkNews}
          >
            Новинки
          </li>
          <li onClick={() => onFilterProducts("Акции")} className={styleStock}>
            Акции
          </li>
        </ul>
      </div>
      <div className="bg-[#212526] py-5">
        <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 ">
          <div className="w-[93%] m-auto">
            {filterProducts.length === 0 ? (
              <FeaturesCarousel products={news} slideToShow={4} />
            ) : (
              <FeaturesCarousel products={filterProducts} slideToShow={4} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
