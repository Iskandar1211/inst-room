import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Slider = () => {
  return (
    <div className="bg-[#212526] h-[60vh]">
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 flex gap-2 h-[100%] py-2">
        <div
          style={{ backgroundImage: "url(saw.png)", backgroundSize: "cover" }}
          className="flex-[2] flex relative px-8 py-5"
        >
          <div className="text-white w-[100%] flex flex-col gap-32">
            <h1 className="text-5xl text-start">
              DeWALT - Инструмент с настоящим характером
            </h1>
            <button className="px-8 py-4 bg-[#F05A00] self-start hover:bg-black ">
              ПЕРЕЙТИ В КАТАЛОГ
            </button>
          </div>
          <div className="px-2 py-2 bg-black w-fit text-3xl absolute left-1 bottom-1 hover:bg-[#F05A00] cursor-pointer">
            <AiOutlineArrowRight className="text-white" />
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url(ratchet.png)",
            backgroundSize: "cover",
          }}
          className="flex-1 relative px-4"
        >
          <div className="text-white text-3xl text-start">Акции</div>
          <div className="px-2 py-2 bg-black w-fit text-3xl absolute left-1 bottom-1 hover:bg-[#F05A00] cursor-pointer">
            <AiOutlineArrowRight className="text-white" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div
            className="flex-1 relative px-4"
            style={{
              backgroundImage: "url(paint.png)",
              backgroundSize: "cover",
            }}
          >
            <div className="text-white text-2xl text-start">
              Новое поступление
            </div>
            <div className="px-2 py-2 bg-black w-fit text-3xl absolute left-1 bottom-1 hover:bg-[#F05A00] cursor-pointer">
              <AiOutlineArrowRight className="text-white" />
            </div>
          </div>
          <div
            className="flex-1 relative px-4"
            style={{
              backgroundImage: "url(drill.png)",
              backgroundSize: "cover",
            }}
          >
            <div className="text-white text-2xl text-start">
              Акции на сверла
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
