import React from "react";
import { FiFacebook } from "react-icons/fi";
import { RxInstagramLogo } from "react-icons/rx";
import { SlSocialVkontakte } from "react-icons/sl";

export const Footter = () => {
  return (
    <div className="bg-[#212526]">
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6">
        <div className="flex gap-12 py-10 ">
          <div className="flex-1 text-white text-start flex flex-col gap-3">
            <p>Малярные товары</p>
            <p>Электрооборудование</p>
            <p>Спецодежда</p>
            <p>Для дома и дачи</p>
          </div>
          <div className="flex-1 text-white text-start flex flex-col gap-3">
            <p>О компании</p>
            <p>Контакты</p>
            <p>Новинки</p>
          </div>
          <div className="flex-1 text-start">
            <div className="flex flex-col gap-3">
              <div>
                <img src="logo.svg" alt="logo" />
              </div>
              <div className="text-white">
                <p>+7 495 120-32-14</p>
                <p>+7 495 120-32-15</p>
              </div>
              <div className="flex gap-2">
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
