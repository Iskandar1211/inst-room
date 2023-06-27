import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IHistoryOfOrder, IProduct, IProductAcord } from "../../../types/Model";

interface Props {
  id: number;
  open: number;
}

interface PropsAccordion {
  product: IHistoryOfOrder;
}

function Icon({ id, open }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function AccordionHistoryBuyAdmin({ product }: PropsAccordion) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const total = product.purchases.reduce((acum, item) => {
    return acum + item.total;
  }, 0);

  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          <div className="flex justify-around w-[100%] items-center">
            <b>Заказ № {product.orderNumber}</b>
            <div className="flex md:flex-row md:gap-[12px] md:text-[18px] text-[14px] flex-col text-[#8A8A8A] font-normal">
              <p>Создан:</p>
              <p>{product.created}</p>
            </div>
            <div className="flex md:gap-[12px] md:flex-row md:text-[18px] text-[14px] flex-col text-[#8A8A8A] font-normal">
              <p>Получен:</p>
              <p>{product.received}</p>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody>
          {product.purchases.map((purchas) => (
            <div
              key={purchas.id}
              className="grid md:grid-cols-3 grid-cols-1 md:border-none border items-center px-3 bg-white py-3"
            >
              <div className="flex gap-2 items-center">
                <img
                  className="w-[60px] h-[60px]"
                  src={purchas.img}
                  alt={purchas.name}
                />
                <div>{purchas.name}</div>
              </div>
              <div>
                <div className="md:text-center">
                  {purchas.price} ₽ X {purchas.quantity}
                </div>
              </div>
              <div className="flex justify-around">
                <div>{purchas.price * purchas.quantity} ₽</div>
              </div>
            </div>
          ))}
          <div
            className="text-black font-bold text-[20px] flex justify-between"
            style={{ borderTop: "1px solid black" }}
          >
            <b>Итого:</b> <b>{total} ₽</b>
          </div>
          <div>
            <div className="text-3xl">Заказал:</div>
            <div>
              {product.orders.map((order) => (
                <div className="text-start">
                  <div>Фамилия: {order.lastName}</div>
                  <div>Имя: {order.name}</div>
                  <div>Телефон: {order.phone}</div>
                  <div>Email: {order.email}</div>
                </div>
              ))}
            </div>

            {product.deliveryInfo.map((delivery) => {
              if (delivery.pickupAddress === "") {
                return (
                  <div className="text-start">
                    <div className="text-3xl">С доставков</div>
                    <div>город: {delivery.city}</div>
                    <div>улица: {delivery.street}</div>
                    <div>квартира: {delivery.apartment}</div>
                    <div>дом: {delivery.house}</div>
                  </div>
                );
              } else {
                return (
                  <div className="text-start">
                    <div className="text-3xl">Самовывоз</div>
                    <div className="text-xl flex gap-3">
                      Адрес самовывоза:
                      <span className="text-[16px]">
                        {delivery.pickupAddress}
                      </span>
                    </div>
                  </div>
                );
              }
            })}
            <div className="text-3xl">Способ оплаты</div>
            {product.payments.map((pay) => (
              <div className="text-start">
                <div>{pay.cash && "Оплата при получении"}</div>
                <div>{pay.cash && "наличными"}</div>
                <div>{pay.bankСard && "банковской картой"}</div>
                <div>{pay.onlinePayment && "Оплата онлайн"}</div>
              </div>
            ))}
          </div>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
