import React from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { BrandSlides } from "./UX-UI/carousel/BrandSlides";

const srcImg = [
  { id: crypto.randomUUID(), img: "/brands/centro.png" },
  { id: crypto.randomUUID(), img: "/brands/ceresit.png" },
  { id: crypto.randomUUID(), img: "/brands/farbitex.png" },
  { id: crypto.randomUUID(), img: "/brands/finland.png" },
  { id: crypto.randomUUID(), img: "/brands/kapro.png" },
];

export const Brands = () => {
  return (
    <div className="bg-[#212526]">
      <div className="lg:px-32 md:px-7 px-4 w-[73%] md:w-full m-auto py-10">
        <div className="md:text-start text-center py-2 text-2xl text-white">Наши бренды</div>
        <BrandSlides slideToShow={4} products={srcImg} />
      </div>
    </div>
  );
};
