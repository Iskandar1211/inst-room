import {
  Breadcrumbs,
  Checkbox,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";

export const DeliveryInfoPage = () => {
  const [pickup, setPickup] = useState(false);

  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.cart.items);

  const totalPrice = products.reduce((acum, item) => {
    return acum + item.total;
  }, 0);
  const discount = (totalPrice / 100) * 5;

  return (
    <div className="bg-[#CBCBCB]">
      <div className="lg:px-32 md:px-7 flex flex-col gap-6">
        <Breadcrumbs>
          <Link className="opacity-60" to="/">
            Главная
          </Link>
          <Link to="/order-form">Оформление заказа</Link>
        </Breadcrumbs>
        <div className="text-4xl text-start">Оформление заказа</div>
        <div className="flex bg-white px-6 py-6 gap-4">
          <div className=" flex-[2]">
            <div className=" mb-2 flex gap-16 text-[20px] font-normal-400">
              <Breadcrumbs>
                <Link className="opacity-60" to="/order-form">
                  Данные покупателя
                </Link>
                <Link to="/delivery-info">Доставка</Link>
                <Link className="opacity-60" to="/payment">
                  Оплата
                </Link>
              </Breadcrumbs>
            </div>
            <div className="flex w-[100%] flex-col gap-8 mb-4 ">
              <div className="flex flex-col gap-6">
                <p className="text-start text-2xl">
                  Выберите подходящий вам вариант доставки:
                </p>
                <div className="flex gap-[80px] text-[20px]">
                  <div className="flex items-center">
                    {pickup && <Checkbox onClick={() => setPickup(false)} />}
                    {!pickup && <Checkbox checked />}
                    Доставка курьером
                  </div>
                  <div>
                    {pickup && <Checkbox checked />}
                    {!pickup && <Checkbox onClick={() => setPickup(true)} />}
                    Самовывоз
                  </div>
                </div>
              </div>
              {!pickup ? (
                <div className="flex flex-col gap-6">
                  <b className="text-start">Введите адрес доставки</b>
                  <div className="flex gap-[100px]">
                    <div className="flex flex-col gap-8 flex-1">
                      <Input label="Город" />
                      <Input label="Улица" />
                      <Input label="Ближайшая дата доставки" />
                    </div>
                    <div className="flex flex-col flex-1 gap-8">
                      <Input label="Корпус" />
                      <div className="flex gap-2">
                        <Input label="Дом" />
                        <Input label="Квартира" />
                      </div>
                      <Input label="Сумма доставки" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  <b className="text-start">Выберите пункт доставки</b>
                  <div className="w-[50%]">
                    <Select label="виберите пункт из списка">
                      <Option>Москва, ул Первомайская 14</Option>
                      <Option>Душанбе, ул Алишер Навои 55</Option>
                      <Option>Худжанд, ул Чаббор Р 68</Option>
                      <Option>Истаравшан, ул Исмоили Сомони 10</Option>
                      <Option>Душанбе, ул Короче да</Option>
                    </Select>
                  </div>
                  <div className="text-start">
                    <p>Доставка бесплатно до пункта выдачи</p>
                    <p>
                      Дата доставки в пункт выдачи ориентировочно — 10 февраля.
                    </p>
                    <p>Срок хранения заказа 14 дней</p>
                  </div>
                </div>
              )}
              <Link
                to="/payment"
                className="w-[308px] h-[50px] flex justify-center items-center bg-[#212526] text-white"
              >
                ДАЛЕЕ
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center py-[30px] px-[30px] bg-[#212526] h-[212px] rounded text-white">
            <div className="flex flex-col gap-4 w-[250px] ">
              <div className="text-[20px] flex justify-between">
                <span>Итого</span>
                <span className="text-[#F05A00]">{totalPrice} ₽</span>
              </div>
              <div className=" flex justify-between">
                <span>{products.length} товаров</span>
                <span>{totalPrice} ₽</span>
              </div>
              <div className=" flex justify-between">
                <span>Скидка</span>
                <span>-{discount} ₽</span>
              </div>
              <div className=" flex justify-between">
                <span>Доставка</span>
                <span>Бесплатно</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
