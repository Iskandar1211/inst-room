import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
export const ContactsPage = () => {
  return (
    <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 py-10">
      <Breadcrumbs className="mt-4">
        <Link className="opacity-60 " to="/">
          Главная
        </Link>
        <Link to="/contacts">Контакты</Link>
      </Breadcrumbs>
      <div className="flex text-3xl font-bold my-10">
        <h1>Контакты</h1>
      </div>
      <div className="flex md:flex-row flex-col gap-10">
        <img
          className="md:w-[50vw]"
          src="Contacts/photoContact1.png"
          alt="Contacts"
        />
        <span className="md:px-0 px-4">
          <p className="text-[#8a8a8a]">ул. 1-я Дубравная, 15</p>
          <p className="text-[#8a8a8a]">г. Можайск, Московская область</p>
          <p className="text-[#8a8a8a]">+7 495 120-32-15</p>
          <p className="mt-4">ул. Маяковского, 120</p>
          <p className="text-[#8a8a8a]">г. Краснодар</p>
          <p>+7 495 110-10-12</p>
          <p className="text-[#8a8a8a] mt-4">ул. Маршака, 2</p>
          <p className="text-[#8a8a8a]">г. Санкт-Петербург</p>
          <p className="text-[#8a8a8a]">+7 495 560-12-11</p>
          <p className="flex gap-3">
            <p className="text-[#8a8a8a]">инстаграм</p>|<p>вконтакте</p>|
            <p className="text-[#8a8a8a]">фейсбук</p>
          </p>
        </span>
      </div>
    </div>
  );
};
