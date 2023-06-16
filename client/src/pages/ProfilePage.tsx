import { Breadcrumbs, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { products } from "../components/Carousel/data";

interface Props {
  id: number;
  open: number;
}

export const ProfilePage = () => {
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

  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const totalPrice = products.reduce((acum, item) => {
    return acum + item.total;
  }, 0);

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
              <Fragment>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(1)}>
                    <div className="flex justify-around w-[100%] items-center">
                      <b>Заказ № 25463</b>
                      <div className="flex gap-[12px] text-[#8A8A8A] font-normal">
                        <p>Создан:</p>
                        <p>14.07.2022</p>
                      </div>
                      <div className="flex gap-[12px] text-[#8A8A8A] font-normal">
                        <p>Создан:</p>
                        <p>14.07.2022</p>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="grid grid-cols-3 items-center px-3 bg-white py-3"
                      >
                        <div className="flex gap-2 items-center">
                          <img
                            className="w-[60px] h-[60px]"
                            src={product.img}
                            alt={product.name}
                          />
                          <div>{product.detailed}</div>
                        </div>
                        <div>
                          <div>{product.price} ₽</div>
                        </div>
                        <div className="flex justify-around">
                          <div>{product.total} ₽</div>
                        </div>
                      </div>
                    ))}
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    <div className="flex justify-around w-[100%] items-center">
                      <b>Заказ № 25463</b>
                      <div className="flex gap-[12px] text-[#8A8A8A] font-normal">
                        <p>Создан:</p>
                        <p>14.07.2022</p>
                      </div>
                      <div className="flex gap-[12px] text-[#8A8A8A] font-normal">
                        <p>Создан:</p>
                        <p>14.07.2022</p>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="grid grid-cols-3 items-center px-3 bg-white py-3"
                      >
                        <div className="flex gap-2 items-center">
                          <img
                            className="w-[60px] h-[60px]"
                            src={product.img}
                            alt={product.name}
                          />
                          <div>{product.detailed}</div>
                        </div>
                        <div>
                          <div>{product.price} ₽</div>
                        </div>
                        <div className="flex justify-around">
                          <div>{product.total} ₽</div>
                        </div>
                      </div>
                    ))}
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(3)}>
                    <div className="flex justify-around w-[100%] items-center">
                      <b>Заказ № 25463</b>
                      <div className="flex gap-[12px] text-[#8A8A8A] font-normal">
                        <p>Создан:</p>
                        <p>14.07.2022</p>
                      </div>
                      <div className="flex gap-[12px] text-[#8A8A8A] font-normal">
                        <p>Создан:</p>
                        <p>14.07.2022</p>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="grid grid-cols-3 items-center px-3 bg-white py-3"
                      >
                        <div className="flex gap-2 items-center">
                          <img
                            className="w-[60px] h-[60px]"
                            src={product.img}
                            alt={product.name}
                          />
                          <div>{product.detailed}</div>
                        </div>
                        <div>
                          <div>{product.price} ₽</div>
                        </div>
                        <div className="flex justify-around">
                          <div>{product.total} ₽</div>
                        </div>
                      </div>
                    ))}
                  </AccordionBody>
                </Accordion>
              </Fragment>
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
                  <p className="text-[12px] text-[#8A8A8A] text-start">Пароль не менее 6 символов, содержит заглавные буквы (A-Z)</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
