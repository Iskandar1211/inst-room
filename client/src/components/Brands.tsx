import React from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";


export const Brands = () => {
  return (
    <div className="bg-[#212526]">
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 py-10">
        <div className="text-start py-2 text-2xl text-white">Наши бренды</div>
        <div className="flex items-center ">
          <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer bg-white rounded-full">
            <MdOutlineArrowBackIos />
          </div>
          <div className="flex justify-between overflow-hidden px-4 w-[100%]">
            <img
              className="bg-[white] rounded"
              src="/brands/centro.png"
              alt="centro"
            />
            <img
              className="bg-[white] rounded"
              src="/brands/ceresit.png"
              alt="centro"
            />
            <img
              className="bg-[white] rounded"
              src="/brands/farbitex.png"
              alt="centro"
            />
            <img
              className="bg-[white] rounded"
              src="/brands/finland.png"
              alt="centro"
            />
            <img
              className="bg-[white] rounded"
              src="/brands/kapro.png"
              alt="centro"
            />
            
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer bg-white rounded-full">
            <MdOutlineArrowForwardIos />
          </div>
        </div>
      </div>
    </div>
  );
};
