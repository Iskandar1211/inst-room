import { Breadcrumbs, Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { IOrder } from "../types/Model";

export const OrderFormPage = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cart.items);
  const totalPrice = products.reduce((acum, item) => {
    return acum + item.total;
  }, 0);
  const discount = (totalPrice / 100) * 5;

  const [order, setOrder] = useState<IOrder>({
    id: crypto.randomUUID(),
    name: "",
    lastName: "",
    phone: "",
    email: "",
  });

  

  const onAddOrders = () => {
    fetch("http://localhost:3009/create-order", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/delivery-info");
  };

  return (
    <div className="bg-[#CBCBCB]">
      <div className="lg:px-32 md:px-7 flex flex-col gap-6 pt-4">
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
                <Link to="/order-form">Данные покупателя</Link>
                <Link className="opacity-60" to="/delivery-info">
                  Доставка
                </Link>
                <Link className="opacity-60" to="/payment">
                  Оплата
                </Link>
              </Breadcrumbs>
            </div>
            <div className="flex w-[100%] flex-col gap-8 mb-4 ">
              <div className="flex gap-[100px]">
                <div className="flex flex-col gap-8 flex-1">
                  <Input
                    onChange={(e) =>
                      setOrder({ ...order, lastName: e.target.value })
                    }
                    size="lg"
                    label="Фамилия"
                    value={order.lastName}
                  />
                  <Input
                    onChange={(e) =>
                      setOrder({ ...order, phone: e.target.value })
                    }
                    label="Телефон"
                    value={order.phone}
                  />
                </div>
                <div className="flex flex-col flex-1 gap-8">
                  <Input
                    onChange={(e) =>
                      setOrder({ ...order, name: e.target.value })
                    }
                    label="Имя"
                    value={order.name}
                  />
                  <Input
                    onChange={(e) =>
                      setOrder({ ...order, email: e.target.value })
                    }
                    label="Электронная почта"
                    value={order.email}
                  />
                </div>
              </div>
              <div
                onClick={() => onAddOrders()}
                className="w-[308px] h-[50px] flex justify-center items-center cursor-pointer bg-[#212526] text-white"
              >
                ДАЛЕЕ
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center py-[30px] px-[30px] bg-[#212526] h-[212px] rounded text-white">
            <div className="flex flex-col gap-4 w-[250px]">
              <div className="text-[20px] flex justify-between">
                <span>Итого</span>
                <span className="text-[#F05A00]">{totalPrice} ₽</span>
              </div>
              <div className="flex justify-between">
                <span>{products.length} товаров</span>
                <span>{totalPrice} ₽</span>
              </div>
              <div className="flex justify-between">
                <span>Скидка</span>
                <span>-{discount} ₽</span>
              </div>
              <div className="flex justify-between">
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
