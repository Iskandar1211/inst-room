import { Breadcrumbs, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import AccordionHistoryBuy from "../components/UX-UI/Accordion/AccordionHistoryBuy";
import moment from "moment";
import { IProductAcord } from "../types/Model";


export const ProfilePage = () => {
 

  const products: IProductAcord[] = [
    {
      id: crypto.randomUUID(),
      orderNumber:1,
      created: moment().subtract(10, "days").calendar(),
      received: moment().subtract(10, "days").calendar(),
      purchases: [
        {
          id: crypto.randomUUID(),
          name: "Emal Big",
          img: "/Painting-supplies/Emal-116-big.png",
          price: 500,
          inStock: true,
          detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
          isNew: true,
          total: 0,
          quantity: 1,
        },
        {
          id: crypto.randomUUID(),
          name: "Emal",
          img: "/Painting-supplies/Emal-116.png",
          price: 650,
          inStock: false,
          detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
          isNew: true,
          total: 0,
          quantity: 1,
        },
        {
          id: crypto.randomUUID(),
          name: "Emal Big",
          img: "/electric/nozzle.png",
          price: 500,
          inStock: true,
          detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
          isNew: true,
          total: 0,
          quantity: 2,
        },
        {
          id: crypto.randomUUID(),
          name: "Emal",
          img: "/electric/screwdriver.png",
          price: 650,
          inStock: false,
          detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
          isNew: true,
          total: 0,
          quantity: 1,
        },
        {
          id: crypto.randomUUID(),
          name: "Emal Big",
          img: "/electric/nozzle.png",
          price: 500,
          inStock: true,
          detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
          isNew: true,
          total: 0,
          quantity: 1,
        },
        {
          id: crypto.randomUUID(),
          name: "Emal",
          img: "/electric/screwdriver.png",
          price: 650,
          inStock: false,
          detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
          isNew: true,
          total: 0,
          quantity: 1,
        },
      ],
    },
  ];

  // const totalPrice = products.reduce((acum, item) => {
  //   return acum + item.total;
  // }, 0);

  const [userInfo, setUserInfo] = useState(false);

  const userLinksActive = !userInfo ? "text-[#F05A00]" : "text-white";
  const userInfoLinksActive = userInfo ? "text-[#F05A00]" : "text-white";
  const userLinksStyle = [
    "h-[72px] flex items-center cursor-pointer justify-center ",
    userLinksActive,
  ].join(" ");
  const userLinksStyleUserInfo = [
    "h-[72px] flex items-center cursor-pointer justify-center ",
    userInfoLinksActive,
  ].join(" ");

  return (
    <div className="bg-[#CBCBCB]">
      <div className="lg:px-32 md:px-7 flex flex-col gap-6 pt-4 pb-16">
        <Breadcrumbs>
          <Link className="opacity-60" to="/">
            Главная
          </Link>
          <Link to="/profile-page">Личный кабинет</Link>
        </Breadcrumbs>
        <div className="text-4xl text-start">Личный кабинет</div>
        <div className="flex gap-[20px]">
          <div className="flex-1 flex flex-col gap-[20px]">
            <div className="bg-[#212526] flex flex-col rounded-[5px]">
              <p
                onClick={() => setUserInfo(false)}
                className={userLinksStyle}
                style={{ borderBottom: "1px solid #3B3B3B" }}
              >
                История заказов
              </p>
              <p
                onClick={() => setUserInfo(true)}
                className={userLinksStyleUserInfo}
              >
                Личная информация
              </p>
            </div>
            <div className="relative ">
              <div className="absolute left-5 top-5 text-white text-start">
                <p className="font-bold">Новое поступление</p>
                <p className="text-[12px]">Успей покататься</p>
              </div>
              <img
                className="w-[100%]"
                src="/new-arrival.png"
                alt="new-arrival"
              />
            </div>
            <div className="relative">
              <div className="absolute left-5 top-5 text-white text-start">
                <p className="font-bold">Печи со скидкой</p>
                <p className="text-[12px]">до 30%</p>
              </div>
              <img className="w-[100%]" src="/oven.png" alt="new-arrival" />
            </div>
          </div>
          <div className="flex-[3] bg-white p-4">
            {!userInfo ? (
              products.map((product) => (
                <AccordionHistoryBuy product={product} />
              ))
            ) : (
              <div className="">
                <div className="text-start text-[20px] mb-[24px]">
                  <b>Личные данные</b>
                </div>
                <div className="flex gap-[80px]">
                  <div className="flex-1 flex flex-col gap-[20px]">
                    <Input label="Фамилия" />
                    <Input label="Имя" />
                    <Input label="Телефон" />
                    <Input label="Электронная почта" />
                  </div>
                  <div className="flex-1 flex flex-col gap-[20px]">
                    <Input label="Город" />
                    <Input label="Улица" />
                    <Input label="Корпус" />
                    <div className="flex gap-[20px]">
                      <Input label="Дом" />
                      <Input label="Квартира" />
                    </div>
                  </div>
                </div>
                <div className="w-[266px] h-[50px] bg-[#DEDBDB] mt-[20px] mb-[20px] text-white flex justify-center items-center">
                  СОХРАНИТЬ ИЗМЕНЕНИЯ
                </div>
                <div className="text-start text-[20px] mb-[24px]">
                  <b>Изменение пароля</b>
                </div>
                <div className="flex-1 flex flex-col gap-[20px] w-[340px]">
                  <Input label="Старый пароль" />
                  <Input label="Новый пароль" />
                  <Input label="Подтвердите новый пароль" />
                  <p className="text-[12px] text-[#8A8A8A] text-start">
                    Пароль не менее 6 символов, содержит заглавные буквы (A-Z)
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
