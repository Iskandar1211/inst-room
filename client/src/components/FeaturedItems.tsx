import React, { useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { IProduct } from "../types/Model";
import { Card } from "./Card";
import { Carousel } from "./UX-UI/Carousel/Carousel";
import { FeaturesCarousel } from "./UX-UI/Carousel/FeaturesCarousel";

export const FeaturedItems = () => {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: crypto.randomUUID(),
      name: "Emal Big",
      img: "/Painting-supplies/Emal-116-big.png",
      price: 500,
      inStock: true,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
      total: 0,
      quantity: 0,
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/Painting-supplies/Emal-116.png",
      price: 650,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
      total: 0,
      quantity: 0,
    },
    {
      id: crypto.randomUUID(),
      name: "Emal Big",
      img: "/electric/nozzle.png",
      price: 500,
      inStock: true,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
      total: 0,
      quantity: 0,
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/electric/screwdriver.png",
      price: 650,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
      total: 0,
      quantity: 0,
    },
    {
      id: crypto.randomUUID(),
      name: "Emal Big",
      img: "/Painting-supplies/Emal-116-big.png",
      price: 500,
      inStock: true,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
      total: 0,
      quantity: 0,
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/Painting-supplies/Emal-116.png",
      price: 650,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
      total: 0,
      quantity: 0,
    },
    {
      id: crypto.randomUUID(),
      name: "Emal Big",
      img: "/electric/nozzle.png",
      price: 500,
      inStock: true,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
      total: 0,
      quantity: 0,
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/electric/screwdriver.png",
      price: 650,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
      total: 0,
      quantity: 0,
    },
  ]);

  return (
    <div className="bg-[#212526]">
      <div className="bg-black py-3 px-2 lg:px-32 md:px-7 max-sm:px-4 sm:px-6">
        <ul className="flex gap-12">
          <li className="text-white">Новинки</li>
          <li className="text-[#212526]">Акции</li>
          <li className="text-[#212526]">Хиты продаж</li>
        </ul>
      </div>
      <div className="bg-[#212526] py-5">
        <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 ">
          <div className="w-[94%] m-auto">
            <FeaturesCarousel products={products} slideToShow={4} />
          </div>
        </div>
      </div>
    </div>
  );
};
