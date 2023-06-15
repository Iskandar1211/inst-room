import { Input } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

export const OrderFormPage = () => {
  return (
    <div className="bg-[#CBCBCB]">
      <div className="lg:px-32 md:px-7 flex flex-col gap-6">
        <div className="flex gap-2">
          <span className="text-[#8A8A8A]">
            <Link to="/">Главная</Link>
          </span>
          / <Link to="/order-page">Оформление заказа</Link>
        </div>
        <div className="text-4xl text-start">Оформление заказа</div>
        <div className="flex bg-orange-400">
          <div className="bg-blue-700 flex-[2]">
            <div className=" mb-2 flex gap-6 text-[20px] font-normal-400">
              <Link to="/">Данные покупателя</Link>
              <Link className="text-[#8A8A8A]" to="/">
                Доставка
              </Link>
              <Link className="text-[#8A8A8A]" to="/">
                Оплата
              </Link>
            </div>
            <div className="flex w-[100%] flex-col gap-4 mb-4 bg-white">
              <div className="flex gap-[100px] bg-blue-500">
                <div className="flex bg-red-400 flex-col gap-2">
                  <Input size="lg" label="Фамилия" />
                  <Input label="Имя" />
                </div>
                <div className="flex flex-col bg-red-400 gap-2">
                  <Input label="Фамилия" />
                  <Input label="Имя" />
                </div>
              </div>
              <button className="w-[308px] h-[50px] bg-[#212526] text-white">
                ДАЛЕЕ
              </button>
            </div>
          </div>
          <div className="flex-1">asdasda</div>
        </div>
      </div>
    </div>
  );
};
