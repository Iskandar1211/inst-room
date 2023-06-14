import React from "react";
import { useState } from "react";
import { IProduct } from "../types/Model";
import { Carousel } from "./Carousel/Carousel";
import { products } from "./Carousel/data";

export const Products = () => {
  const [paints, setPaints] = useState<IProduct[]>([
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
      isNew: false,
      total: 0,
      quantity: 0,
    },
  ]);
  const [electrical, setElectrical] = useState([
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
      isNew: false,
      total: 0,
      quantity: 0,
    },
  ]);
  const [overalls, setOveralls] = useState([
    {
      id: crypto.randomUUID(),
      name: "Пиджак",
      img: "/overalls/blazer.png",
      price: 860,
      inStock: true,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
      total: 0,
      quantity: 0,
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/overalls/helmet.png",
      price: 410,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: false,
      total: 0,
      quantity: 0,
    },
  ]);
  const [forHomeAndCottage, setForHomeAndCottage] = useState([
    {
      id: crypto.randomUUID(),
      name: "Пиджак",
      img: "/for-home-and-cottage/1.png",
      price: 860,
      inStock: true,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
      total: 0,
      quantity: 0,
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/for-home-and-cottage/2.png",
      price: 410,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: false,
      total: 0,
      quantity: 0,
    },
  ]);
  const [seasonal, setSeasonal] = useState([
    {
      id: crypto.randomUUID(),
      name: "Пиджак",
      img: "/seasonal/1.png",
      price: 860,
      inStock: true,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
      total: 0,
      quantity: 0,
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/seasonal/2.png",
      price: 410,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: false,
      total: 0,
      quantity: 0,
    },
  ]);
  const [tools, setTools] = useState([
    {
      id: crypto.randomUUID(),
      name: "Пиджак",
      img: "/tool/1.png",
      price: 860,
      inStock: true,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
      total: 0,
      quantity: 0,
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/tool/2.png",
      price: 410,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: false,
      total: 0,
      quantity: 0,
    },
  ]);

  return (
    <div className="bg-[#CBCBCB] pt-6 pb-6">
      <div className=" lg:px-32 md:px-7 max-sm:px-4 sm:px-6 ">
        <div className="lg:flex lg:justify-between lg:gap-8">
          <Carousel  slideToShow={2} title="Малярные товары" products={products} />
          <Carousel  slideToShow={2} title="Электрооборудование" products={products} />
        </div>
        <div className="lg:flex lg:justify-between lg:gap-8">
          <Carousel  slideToShow={2} title="Спецодежда" products={products} />
          <Carousel  slideToShow={2} title="Для дома и дачи" products={products} />
        </div>
        <div className="lg:flex lg:justify-between lg:gap-8">
          <Carousel  slideToShow={2} title="Сезонное" products={products} />
          <Carousel  slideToShow={2} title="Инструмент" products={products} />
        </div>
      </div>
    </div>
  );
};
