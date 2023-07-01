import React, { useEffect } from "react";
import { useState } from "react";
import { IProduct } from "../types/Model";
import { Carousel } from "./UX-UI/carousel/Carousel";


export const Products = () => {
  const [paintingSupplies, setPaintingSupplies] = useState<IProduct[]>([]);
  const [overalls, setOveralls] = useState<IProduct[]>([]);
  const [forHomeAndCottage, setForHomeAndCottage] = useState<IProduct[]>([]);
  const [electricals, setElectricals] = useState<IProduct[]>([])
  
  
  
  useEffect(() => {
    fetch("http://localhost:3009/painting-supplies")
      .then((response) => response.json())
      .then((pating) => setPaintingSupplies(pating));
    fetch("http://localhost:3009/overalls")
      .then((response) => response.json())
      .then((overall) => setOveralls(overall));
    fetch("http://localhost:3009/electrical")
      .then((response) => response.json())
      .then((electrical) => setElectricals(electrical));
    fetch("http://localhost:3009/for-home-and-cottage")
      .then((response) => response.json())
      .then((forHome) => setForHomeAndCottage(forHome));
  }, []);

  return (
    <div className="bg-[#CBCBCB] pt-6 pb-6">
      <div className=" lg:px-32 md:px-7 max-sm:px-4 sm:px-6 ">
        <div className="lg:flex lg:justify-between lg:gap-8">
          <Carousel
            slideToShow={2}
            title="Малярные товары"
            products={paintingSupplies}
          />
          <Carousel
            slideToShow={2}
            title="Электрооборудование"
            products={electricals}
          />
        </div>
        <div className="lg:flex lg:justify-between lg:gap-8">
          <Carousel slideToShow={2} title="Спецодежда" products={overalls} />
          <Carousel
            slideToShow={2}
            title="Для дома и дачи"
            products={forHomeAndCottage}
          />
        </div>
      </div>
    </div>
  );
};
