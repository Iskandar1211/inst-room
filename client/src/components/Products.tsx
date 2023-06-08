import React from "react";
import { useState } from "react";
import { IProduct } from "../types/Model";
import { Card } from "./Card";
import { TitleForCard } from "./TitleForCard";

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
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/Painting-supplies/Emal-116.png",
      price: 650,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: false,
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
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/electric/screwdriver.png",
      price: 650,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: false,
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
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/overalls/helmet.png",
      price: 410,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: false,
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
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/for-home-and-cottage/2.png",
      price: 410,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: false,
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
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/seasonal/2.png",
      price: 410,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: false,
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
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/tool/2.png",
      price: 410,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: false,
    },
  ]);

  return (
    <div className="bg-[#CBCBCB] pt-6 pb-6">
      <div className=" lg:px-32 md:px-7 max-sm:px-4 sm:px-6 ">
        <div className="flex gap-10 flex-wrap mt-5">
          <div className="flex-1">
            <TitleForCard title="Малярные товары" />
            <div className="flex justify-between">
              {paints.map((paint) => (
                <Card key={paint.id} product={paint} />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <TitleForCard title="Электрооборудование" />
            <div className="flex justify-between">
              {electrical.map((electric) => (
                <Card key={electric.id} product={electric} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-10 flex-wrap mt-5">
          <div className="flex-1">
            <TitleForCard title="Спецодежда" />
            <div className="flex justify-between">
              {overalls.map((overal) => (
                <Card key={overal.id} product={overal} />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <TitleForCard title="Для дома и дачи" />
            <div className="flex justify-between">
              {forHomeAndCottage.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-10 flex-wrap mt-5 mb-5">
          <div className="flex-1">
            <TitleForCard title="Сезонные" />
            <div className="flex justify-between">
              {seasonal.map((prudict) => (
                <Card key={prudict.id} product={prudict} />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <TitleForCard title="Инструмент" />
            <div className="flex justify-between">
              {tools.map((tool) => (
                <Card key={tool.id} product={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
