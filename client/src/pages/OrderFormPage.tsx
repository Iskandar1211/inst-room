import { Breadcrumbs, Input } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import {
  addOrderNumber,
  addToOrder,
  addToPurchases,
} from "../store/reducers/Order";
import { IHistoryOfOrder, IOrder } from "../types/Model";

export const OrderFormPage = () => {
  const navigate = useNavigate();
  const [HistoryProducts, setHistoryProducts] = useState<IHistoryOfOrder[]>([]);

  useEffect(() => {
    fetch("http://localhost:3009/history-of-orders")
      .then((response) => response.json())
      .then((historyBuys) => setHistoryProducts(historyBuys));
  }, []);
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

  const [message, setMessage] = useState("");

  const dispatch = useAppDispatch();

  const onAddOrders = () => {
    if (
      order.email !== "" &&
      order.lastName !== "" &&
      order.name !== "" &&
      order.phone !== ""
    ) {
      dispatch(addToPurchases(products));
      dispatch(addToOrder(order));
      dispatch(addOrderNumber(HistoryProducts.length + 1));
      navigate("/delivery-info");
    } else {
      setMessage("Поля не должен быть путимы");
    }
  };

  useEffect(() => {
    if (
      order.email.length > 0 ||
      order.lastName.length > 0 ||
      order.name.length > 0 ||
      order.phone.length > 0
    ) {
      setMessage("");
    }
  }, [order.email, order.lastName, order.name, order.phone]);

  return (
    <div className="bg-[#CBCBCB]">
      <div className="lg:px-32 md:px-7 flex flex-col gap-6 pt-4">
        <Breadcrumbs>
          <Link className="opacity-60" to="/">
            Главная
          </Link>
          <Link to="/order-form">Оформление заказа</Link>
        </Breadcrumbs>
        <div className="md:text-4xl text-2xl md:text-start text-center">
          Оформление заказа
        </div>
        <div className="flex md:flex-row flex-col bg-white px-6 py-6 gap-4">
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
              <div className="flex md:flex-row md:gap-[100px] flex-col gap-4">
                <div className="flex flex-col md:gap-8 gap-4 flex-1">
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
                <div className="flex flex-col flex-1 md:gap-8 gap-4">
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
              <p className="text-red-500">{message}</p>
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
