import {
  Breadcrumbs,
  Checkbox,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { addToDeliveryInfo } from "../store/reducers/Order";
import { IDelivery } from "../types/Model";

export const DeliveryInfoPage = () => {
  const [pickup, setPickup] = useState(false);
  const dispath = useAppDispatch();
  const navigate = useNavigate();

  const [courierDelivery, setCourierDelivery] = useState<IDelivery>({
    id: crypto.randomUUID(),
    city: "",
    street: "",
    house: "",
    apartment: "",
    delivery: true,
    pickupAddress: "",
  });

  const [message, setMessage] = useState("");

  const addDelivery = () => {
    if (
      courierDelivery.city !== "" &&
      courierDelivery.street !== "" &&
      courierDelivery.house !== "" &&
      courierDelivery.apartment !== ""
    ) {
      dispath(addToDeliveryInfo(courierDelivery));
      navigate("/payment");
    } else if (
      courierDelivery.city === "" &&
      courierDelivery.street === "" &&
      courierDelivery.house === "" &&
      courierDelivery.apartment === "" &&
      courierDelivery.pickupAddress !== ""
    ) {
      dispath(addToDeliveryInfo(courierDelivery));
      navigate("/payment");
    } else {
      setMessage("Поля не должны быть пустимы");
    }
  };

  const products = useAppSelector((state) => state.cart.items);

  const totalPrice = products.reduce((acum, item) => {
    return acum + item.total;
  }, 0);
  const discount = (totalPrice / 100) * 5;

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
        <div className="flex md:flex-row flex-col bg-white px-6 py-6 gap-4">
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
                <p className="text-start md:text-2xl text-xl">
                  Выберите подходящий вам вариант:
                </p>
                <div className="flex md:flex-row md:gap-[80px] md:text-[20px] flex-col">
                  <div className="flex items-center">
                    {pickup && (
                      <Checkbox
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          setCourierDelivery({
                            ...courierDelivery,
                            delivery: isChecked,
                          });
                        }}
                        onClick={() => setPickup(false)}
                      />
                    )}
                    {!pickup && <Checkbox defaultChecked />}
                    Доставка курьером
                  </div>
                  <div>
                    {pickup && <Checkbox defaultChecked />}
                    {!pickup && (
                      <Checkbox
                        onChange={(e) => {
                          setCourierDelivery({
                            ...courierDelivery,
                            delivery: false,
                          });
                        }}
                        onClick={() => setPickup(true)}
                      />
                    )}
                    Самовывоз
                  </div>
                </div>
              </div>
              {!pickup ? (
                <div className="flex flex-col gap-6">
                  <b className="text-start">Введите адрес доставки</b>
                  <div className="flex md:flex-row flex-col gap-2 md:gap-[100px]">
                    <div className="flex flex-col md:gap-8 gap-2 flex-1">
                      <Input
                        onChange={(e) =>
                          setCourierDelivery({
                            ...courierDelivery,
                            city: e.target.value,
                          })
                        }
                        label="Город"
                      />
                      <Input
                        onChange={(e) =>
                          setCourierDelivery({
                            ...courierDelivery,
                            street: e.target.value,
                          })
                        }
                        label="Улица"
                      />
                    </div>
                    <div className="flex flex-col flex-1 gap-8">
                      <div className="flex md:flex-row flex-col gap-2">
                        <Input
                          onChange={(e) =>
                            setCourierDelivery({
                              ...courierDelivery,
                              house: e.target.value,
                            })
                          }
                          label="Дом"
                        />
                        <Input
                          onChange={(e) =>
                            setCourierDelivery({
                              ...courierDelivery,
                              apartment: e.target.value,
                            })
                          }
                          label="Квартира"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  <b className="text-start">Выберите пункт доставки</b>
                  <div className="md:w-[50%]">
                    <Select
                      label="виберите пункт из списка"
                      onChange={(selectValue) => {
                        setCourierDelivery({
                          ...courierDelivery,
                          pickupAddress: selectValue,
                        });
                      }}
                    >
                      <Option value="Дашанбе, ул Мушфики 14">
                        Дашанбе, ул Мушфики 14
                      </Option>
                      <Option value="Душанбе, ул Алишер Навои 55">
                        Душанбе, ул Алишер Навои 55
                      </Option>
                      <Option value="Худжанд, ул Чаббор Р 68">
                        Худжанд, ул Чаббор Р 68
                      </Option>
                      <Option value="Истаравшан, ул Исмоили Сомони 10">
                        Истаравшан, ул Исмоили Сомони 10
                      </Option>
                      <Option value="Душанбе, Саъдии Шерози">
                        Душанбе, Саъдии Шерози
                      </Option>
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
              <div
                onClick={addDelivery}
                className="w-[308px] h-[50px] flex justify-center items-center bg-[#212526] text-white"
              >
                ДАЛЕЕ
              </div>
              <p className="text-red-500">{message}</p>
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
