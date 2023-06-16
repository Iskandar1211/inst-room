import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IProduct, IProductAcord } from "../../../types/Model";

interface Props {
  id: number;
  open: number;
}

interface PropsAccordion {
  product: IProductAcord;
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

export default function AccordionHistoryBuy({ product }: PropsAccordion) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const total = product.purchases.reduce((acum, item) => {
    return acum + item.price;
  }, 0);
  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          <div className="flex justify-around w-[100%] items-center">
            <b>Заказ № {product.orderNumber}</b>
            <div className="flex gap-[12px] text-[#8A8A8A] font-normal">
              <p>Создан:</p>
              <p>{product.created}</p>
            </div>
            <div className="flex gap-[12px] text-[#8A8A8A] font-normal">
              <p>Получен:</p>
              <p>{product.received}</p>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody>
          {product.purchases.map((purchas) => (
            <div
              key={purchas.id}
              className="grid grid-cols-3 items-center px-3 bg-white py-3"
            >
              <div className="flex gap-2 items-center">
                <img
                  className="w-[60px] h-[60px]"
                  src={purchas.img}
                  alt={purchas.name}
                />
                <div>{purchas.detailed}</div>
              </div>
              <div>
                <div>
                  {purchas.price} ₽ X {purchas.quantity}
                </div>
              </div>
              <div className="flex justify-around">
                <div>{purchas.price * purchas.quantity} ₽</div>
              </div>
            </div>
          ))}
          <div className="text-black font-bold text-[20px] flex justify-between" style={{ borderTop: "1px solid black" }}>
            <b>Итого:</b> <b>{total} ₽</b>
          </div>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
