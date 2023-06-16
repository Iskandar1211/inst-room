import React from "react";
import { FiFacebook } from "react-icons/fi";
import { RxInstagramLogo } from "react-icons/rx";
import { SlSocialVkontakte } from "react-icons/sl";

export const Footter = () => {
  return (
    <div className="bg-[#212526]">
      <div className="px-4 py-6 lg:px-32 md:px-7 sm:px-12 max-sm:px-4 text-l lg:text-xl text-white text-start">
        <div className="flex flex-wrap lg:flex-nowrap justify-between">
          <div className="w-full lg:w-auto mb-4 lg:mb-0 flex-1 flex flex-col gap-3">
            <p>Малярные товары</p>
            <p>Электрооборудование</p>
            <p>Спецодежда</p>
            <p>Для дома и дачи</p>
            <p>Сезонное</p>
            <p>Инструмент</p>
          </div>
          <div className="w-full lg:w-auto mb-4 lg:mb-0 flex-1 flex flex-col gap-3">
            <p>О компании</p>
            <p>Контакты</p>
            <p>Новинки</p>
            <p>Хиты сезона</p>
            <p>Распродажи</p>
          </div>
          <div className="w-full lg:w-auto flex-1">
            <div className="flex flex-col gap-3">
              <div>
                <img src="logo.svg" alt="logo" />
              </div>
              <div className="text-white hidden sm:block">
                <p>+7 495 120-32-14</p>
                <p>+7 495 120-32-15</p>
              </div>
              <div className="flex  gap-2 ">
                <RxInstagramLogo className="bg-white cursor-pointer text-3xl rounded-full px-1" />
                <SlSocialVkontakte className="bg-white cursor-pointer text-3xl rounded-full px-1" />
                <FiFacebook className="bg-white cursor-pointer text-3xl rounded-full px-1" />
              </div>
              <div className="text-white hidden sm:block">
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
