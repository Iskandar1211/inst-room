import React from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

interface Props {
  title: string;
}

export const TitleForCard = ({ title }: Props) => {
  return (
    <div className="flex gap-4 mb-4">
      <p className="text-3xl text-start">{title}</p>
      <div className="flex gap-2">
        <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer bg-white rounded-full">
          <MdOutlineArrowBackIos />
        </div>
        <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer bg-white rounded-full">
          <MdOutlineArrowForwardIos />
        </div>
      </div>
    </div>
  );
};
