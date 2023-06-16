import { Breadcrumbs, Checkbox, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { IPayment } from "../types/Model";
import { BsCheckCircleFill, BsArrowBarRight } from "react-icons/bs";

export const PaymentPage = () => {
  const [complited, setComplited] = useState(false);

  const dispatch = useAppDispatch();
  const productsFromCart = useAppSelector((state) => state.cart.items);
  const totalPrice = productsFromCart.reduce((acum, item) => {
    return acum + item.total;
  }, 0);
  const discount = (totalPrice / 100) * 5;

  const [payment, setPayment] = useState<IPayment>({
    id: crypto.randomUUID(),
    paymentUponReceipt: false,
    cash: false,
    bankСard: false,
    onlinePayment: false,
  });

  const addAll = () => {
    fetch("http://localhost:3009/create-history-of-orders", {
      method: "POST",
      body: JSON.stringify(productsFromCart),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const addProductsFromCart = () => {
    fetch("http://localhost:3009/create-product-from-cart", {
      method: "POST",
      body: JSON.stringify(productsFromCart),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const addDelivery = () => {
    fetch("http://localhost:3009/create-payment", {
      method: "POST",
      body: JSON.stringify(payment),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          addAll();
          setComplited(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    addProductsFromCart();
  };

  return (
    <div className="bg-[#CBCBCB]">
      {!complited ? (
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
                  <Link className="opacity-60" to="/order-form">
                    Данные покупателя
                  </Link>
                  <Link className="opacity-60" to="/delivery-info">
                    Доставка
                  </Link>
                  <Link to="/payment">Оплата</Link>
                </Breadcrumbs>
              </div>
              <div className="flex w-[100%] flex-col gap-8 mb-4 ">
                <div className="flex flex-col gap-6">
                  <p className="text-start text-2xl">
                    Выберите подходящий вам вариант доставки:
                  </p>
                  <div className="flex gap-[80px] text-[20px]">
                    <div className="text-start">
                      <div>
                        <Checkbox
                          onChange={(e) => {
                            const isChecked = e.target.checked;
                            setPayment({
                              ...payment,
                              paymentUponReceipt: isChecked,
                            });
                          }}
                        />
                        Оплата при получении
                      </div>
                      <div className="pl-10">
                        <div>
                          <Checkbox
                            onChange={(e) => {
                              const isChecked = e.target.checked;
                              setPayment({
                                ...payment,
                                cash: isChecked,
                              });
                            }}
                          />
                          наличными
                        </div>
                        <div>
                          <Checkbox
                            onChange={(e) => {
                              const isChecked = e.target.checked;
                              setPayment({
                                ...payment,
                                bankСard: isChecked,
                              });
                            }}
                          />
                          банковской картой
                        </div>
                      </div>
                    </div>
                    <div>
                      <Checkbox
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          setPayment({
                            ...payment,
                            onlinePayment: isChecked,
                          });
                        }}
                      />
                      Оплата онлайн
                    </div>
                  </div>
                </div>
                <div className="text-start">
                  <button
                    onClick={() => addDelivery()}
                    className="w-[308px] h-[50px] flex justify-center items-center bg-[#F05A00] text-white"
                  >
                    ПОДТВЕРДИТЬ ЗАКАЗ
                  </button>
                  <p className="w-[308px] text-[12px]">
                    Нажимая на кнопку вы соглашаетесь на обработку ваших
                    персональных данных
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center py-[30px] px-[30px] bg-[#212526] h-[212px] rounded text-white">
              <div className="flex flex-col gap-4 w-[250px] ">
                <div className="text-[20px] flex justify-between">
                  <span>Итого</span>
                  <span className="text-[#F05A00]">{totalPrice} ₽</span>
                </div>
                <div className=" flex justify-between">
                  <span>{productsFromCart.length} товаров</span>
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
      ) : (
        <div className="flex flex-col gap-10 justify-center p-32 items-center">
          <Link
            className="text-2xl text-red-700 flex gap-4 items-center"
            to="/"
          >
            <BsArrowBarRight className="text-3xl" /> Возвращаться на главную
          </Link>
          <BsCheckCircleFill className="text-[250px] text-[#F05A00] " />
          <p className="text-4xl">
            Заказ успешно подтвержден и оплата завершена!
          </p>
        </div>
      )}
    </div>
  );
};
