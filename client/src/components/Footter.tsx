import React from "react";
import { FiFacebook } from "react-icons/fi";
import { RxInstagramLogo } from "react-icons/rx";
import { SlSocialVkontakte } from "react-icons/sl";
import { Link } from "react-router-dom";

export const Footter = () => {
  return (
    <div className="bg-[#212526]">
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6">
        <div className="flex gap-12 py-10 ">
          <div className="md:flex-1 md:text-white md:text-start md:flex md:flex-col md:gap-3 hidden">
            <Link className="hover:text-[#F05A00]" to={`/catalog/${"painting-supplies"}`}>Малярные товары</Link>
            <Link className="hover:text-[#F05A00]" to={`/catalog/${"electrical"}`}>Электрооборудование</Link>
            <Link className="hover:text-[#F05A00]" to={`/catalog/${"overalls"}`}>Спецодежда</Link>
            <Link className="hover:text-[#F05A00]" to={`/catalog/${"for-home-and-cottage"}`}>Для дома и дачи</Link>
          </div>
          <div className="md:flex-1 md:text-white md:text-start md:flex md:flex-col md:gap-3 hidden">
            <Link to='/about' className="hover:text-[#F05A00] w-fit">О компании</Link>
            <Link to='/contacts' className="hover:text-[#F05A00] w-fit">Контакты</Link>
            <Link to='/new-product' className="hover:text-[#F05A00] w-fit">Новинки</Link>
          </div>
          <div className="flex-1 text-start">
            <div className="md:flex md:flex-col md:gap-3 flex flex-col items-center gap-2">
              <div>
                <img className="md:block hidden" src="logo.svg" alt="logo" />
              </div>
              <div className="text-white">
                <p>+7 495 120-32-14</p>
                <p>+7 495 120-32-15</p>
              </div>
              <div className="md:flex md:gap-2 hidden">
                <RxInstagramLogo className="bg-white cursor-pointer text-3xl rounded-full px-1" />
                <SlSocialVkontakte className="bg-white cursor-pointer text-3xl rounded-full px-1" />
                <FiFacebook className="bg-white cursor-pointer text-3xl rounded-full px-1" />
              </div>
              <div className="text-white ">
                <p>Соглашение пользователя</p>
                <p>«Copyright © Название 2023»</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
