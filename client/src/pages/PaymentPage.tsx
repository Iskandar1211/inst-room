import { Breadcrumbs, Checkbox } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { IPayment } from "../types/Model";
import { BsCheckCircleFill } from "react-icons/bs";
import { addTopPayments, clearOrder } from "../store/reducers/Order";
import { clearCart } from "../store/reducers/Cart";

export const PaymentPage = () => {
  const [complited, setComplited] = useState(false);
  const [addingOrder, setAddingOrder] = useState(false);

  const dispatch = useAppDispatch();
  const productsFromCart = useAppSelector((state) => state.cart.items);

  const order = useAppSelector((state) => state.order.order);

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

  const addPayment = () => {
    dispatch(addTopPayments(payment));
    setAddingOrder(true);
  };

  const addOrder = () => {
    if (order.payments.length > 0) {
      fetch("http://localhost:3009/create-history-order", {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((status) => {
        if (status.ok) {
          dispatch(clearOrder());
          dispatch(clearCart());
        }
      });
      setComplited(true);
    }
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
          <div className="flex md:flex-row flex-col bg-white px-6 py-6 gap-4">
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
                  {!addingOrder ? (
                    <button
                      onClick={() => addPayment()}
                      className="w-[308px] h-[50px] flex justify-center items-center bg-black text-white"
                    >
                      ДАЛЕЕ
                    </button>
                  ) : (
                    <button
                      onClick={() => addOrder()}
                      className="w-[308px] h-[50px] flex justify-center items-center bg-[#F05A00] text-white"
                    >
                      ПОДТВЕРДИТЬ ЗАКАЗ
                    </button>
                  )}

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
        <div className="py-16">
          <div className="flex flex-col bg-white rounded-[5px] w-[422px] h-[400px] m-auto gap-10 justify-center px-4 items-center">
            <b className="text-[20px]">Ваш заявка принята</b>
            <BsCheckCircleFill className="text-[50px] text-[#F05A00] " />
            <p>Спасибо за заявку! Мы свяжемся с вами в ближайщее время</p>
            <Link
              to="/"
              className="w-[170px] h-[48px] py-[14px] px-[32px] flex justify-center items-center text-white bg-[#F05A00]"
            >
              НА ГЛАВНУЮ
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
