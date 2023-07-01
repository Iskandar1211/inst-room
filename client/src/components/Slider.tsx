import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

interface ISlider {
  id: string;
  name: string;
  imgSrc: string;
}

export const Slider = () => {
  const [indexCatalog, setIndexCatalog] = useState(0);
  const [indexStocks, setIndexStocks] = useState(0);
  const [indexPaints, setIndexPaints] = useState(0);
  const [indexDrill, setIndexDrill] = useState(0);

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
  const nextCatalog = () => {
    if (indexCatalog >= 3) {
      setIndexCatalog(0);
    } else {
      setIndexCatalog(indexCatalog + 1);
    }
  };
  const nextStocks = () => {
    if (indexStocks >= 3) {
      setIndexStocks(0);
    } else {
      setIndexStocks(indexStocks + 1);
    }
  };
  const nextPaints = () => {
    if (indexPaints >= 3) {
      setIndexPaints(0);
    } else {
      setIndexPaints(indexPaints + 1);
    }
  };
  const nextDrill = () => {
    if (indexDrill >= 3) {
      setIndexDrill(0);
    } else {
      setIndexDrill(indexDrill + 1);
    }
  };
  return (
    <div className="md:bg-[#212526] md:block md:h-[60vh] hidden">
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 md:flex md:gap-2 md:h-[100%] md:py-2 hidden">
        <div
          style={{
            backgroundImage: `url(${sliderCatalog[indexCatalog].imgSrc})`,
            backgroundSize: "cover",
            transition: "1s linear",
          }}
          className="flex-[2] flex relative px-8 py-5"
        >
          <div className="text-white w-[100%] flex flex-col gap-32">
            <h1 className="text-5xl text-start">
              {sliderCatalog[indexCatalog].name}
            </h1>
            <Link
              to={`/catalog/${"painting-supplies"}`}
              className="px-8 py-4 bg-[#F05A00] self-start hover:bg-black "
            >
              ПЕРЕЙТИ В КАТАЛОГ
            </Link>
          </div>
          <div
            onClick={nextCatalog}
            className="px-2 py-2 bg-black w-fit text-3xl absolute left-1 bottom-1 hover:bg-[#F05A00] cursor-pointer"
          >
            <AiOutlineArrowRight className="text-white" />
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${sliderStocks[indexStocks].imgSrc})`,
            backgroundSize: "cover",
            transition: "1s linear",
          }}
          className="flex-1 relative px-4"
        >
          <div className="text-white text-3xl text-start">
            {sliderStocks[indexStocks].name}
          </div>
          <div
            onClick={nextStocks}
            className="px-2 py-2 bg-black w-fit text-3xl absolute left-1 bottom-1 hover:bg-[#F05A00] cursor-pointer"
          >
            <AiOutlineArrowRight className="text-white" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div
            className="flex-1 relative px-4"
            style={{
              backgroundImage: `url(${sliderPaints[indexPaints].imgSrc})`,
              backgroundSize: "cover",
              transition: "1s linear",
            }}
          >
            <div className="text-white text-2xl text-start">
              {sliderPaints[indexPaints].name}
            </div>
            <div onClick={nextPaints} className="px-2 py-2 bg-black w-fit text-3xl absolute left-1 bottom-1 hover:bg-[#F05A00] cursor-pointer">
              <AiOutlineArrowRight className="text-white" />
            </div>
          </div>
          <div
            className="flex-1 relative px-4"
            style={{
              backgroundImage: `url(${sliderDrill[indexDrill].imgSrc})`,
              backgroundSize: "cover",
              transition: "1s linear",
            }}
          >
            <div className="text-white text-2xl text-start">
              {sliderDrill[indexDrill].name}
            </div>

            <div onClick={nextDrill} className="px-2 py-2 bg-black w-fit text-3xl absolute left-1 bottom-1 hover:bg-[#F05A00] cursor-pointer">
              <AiOutlineArrowRight className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
