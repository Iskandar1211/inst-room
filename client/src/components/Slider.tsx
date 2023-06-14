import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

interface ISlider {
  id: string;
  name: string;
  imgSrc: string;
}

export const Slider = () => {
  const [indexSlider, setIndexSlider] = useState(0);
  setTimeout(() => {
    nextSlide();
  }, 4000);

  const sliderCatalog: ISlider[] = [
    {
      id: crypto.randomUUID(),
      name: "DeWALT - Инструмент с настоящим характером",
      imgSrc: "/slider/1/saw.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Садовых инструментов без которых не обойтись",
      imgSrc: "/slider/1/garden.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Молярные инструменты виды и область применения",
      imgSrc: "/slider/1/molyar.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Насосы для воды: для дома и дачы",
      imgSrc: "/slider/1/nasosi.jpeg",
    },
  ];
  const sliderStocks: ISlider[] = [
    {
      id: crypto.randomUUID(),
      name: "Акции",
      imgSrc: "/slider/2/ratchet.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Акции",
      imgSrc: "/slider/2/tools-electrician.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Акции",
      imgSrc: "/slider/2/emal.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Акции",
      imgSrc: "/slider/2/rotband.jpg",
    },
  ];
  const sliderPaints: ISlider[] = [
    {
      id: crypto.randomUUID(),
      name: "Новое поступление",
      imgSrc: "/slider/3/paint.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Новое поступление",
      imgSrc: "/slider/3/paint2.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Новое поступление",
      imgSrc: "/slider/3/paint3.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Новое поступление",
      imgSrc: "/slider/3/paint4.jpg",
    },
  ];
  const sliderDrill: ISlider[] = [
    {
      id: crypto.randomUUID(),
      name: "Акции на сверла",
      imgSrc: "/slider/4/drill.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Акции на сверла",
      imgSrc: "/slider/4/2.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Акции на сверла",
      imgSrc: "/slider/4/3.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Акции на сверла",
      imgSrc: "/slider/4/4.jpg",
    },
  ];
  const nextSlide = () => {
    if (indexSlider >= 3) {
      setIndexSlider(0);
    } else {
      setIndexSlider(indexSlider + 1);
    }
  };
  return (
    <div className="bg-[#212526] h-[60vh]">
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 flex gap-2 h-[100%] py-2">
        <div
          style={{
            backgroundImage: `url(${sliderCatalog[indexSlider].imgSrc})`,
            backgroundSize: "cover",
            transition: "1s linear",
          }}
          className="flex-[2] flex relative px-8 py-5"
        >
          <div className="text-white w-[100%] flex flex-col gap-32">
            <h1 className="text-5xl text-start">
              {sliderCatalog[indexSlider].name}
            </h1>
            <Link
              to="/catalog"
              className="px-8 py-4 bg-[#F05A00] self-start hover:bg-black "
            >
              ПЕРЕЙТИ В КАТАЛОГ
            </Link>
          </div>
          <div
            onClick={nextSlide}
            className="px-2 py-2 bg-black w-fit text-3xl absolute left-1 bottom-1 hover:bg-[#F05A00] cursor-pointer"
          >
            <AiOutlineArrowRight className="text-white" />
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${sliderStocks[indexSlider].imgSrc})`,
            backgroundSize: "cover",
            transition: "1s linear",
          }}
          className="flex-1 relative px-4"
        >
          <div className="text-white text-3xl text-start">
            {sliderStocks[indexSlider].name}
          </div>
          <div className="px-2 py-2 bg-black w-fit text-3xl absolute left-1 bottom-1 hover:bg-[#F05A00] cursor-pointer">
            <AiOutlineArrowRight className="text-white" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div
            className="flex-1 relative px-4"
            style={{
              backgroundImage: `url(${sliderPaints[indexSlider].imgSrc})`,
              backgroundSize: "cover",
              transition: "1s linear",
            }}
          >
            <div className="text-white text-2xl text-start">
              {sliderPaints[indexSlider].name}
            </div>
            <div className="px-2 py-2 bg-black w-fit text-3xl absolute left-1 bottom-1 hover:bg-[#F05A00] cursor-pointer">
              <AiOutlineArrowRight className="text-white" />
            </div>
          </div>
          <div
            className="flex-1 relative px-4"
            style={{
              backgroundImage: `url(${sliderDrill[indexSlider].imgSrc})`,
              backgroundSize: "cover",
            transition: "1s linear",

            }}
          >
            <div className="text-white text-2xl text-start">
              {sliderDrill[indexSlider].name}
            </div>

            <div className="px-2 py-2 bg-black w-fit text-3xl absolute left-1 bottom-1 hover:bg-[#F05A00] cursor-pointer">
              <AiOutlineArrowRight className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
