import React from "react";
import { Link } from "react-router-dom";
import {
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosArrowRoundForward,
} from "react-icons/io";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
export const ListDirectoryPage = () => {
  return (
    <div>
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 flex flex-col gap-5 ">
        <div className="text-start text-[#8a8a8a] mt-4 flex gap-2">
          <Link className="text-[#8A8A8A]" to="/">
            Главная
          </Link>
          /
          <Link className="text-[#8A8A8A]" to="/catalog">
            Каталог
          </Link>
          /
          <Link className="text-[#8A8A8A]" to="/catalog">
            для дома и дачи
          </Link>
          /{" "}
          <Link to="/garden-inventory-page" className="text-[#000000]">
            Садово-огородный инвентарь
          </Link>
        </div>
        <div className="text-4xl text-start">Садово-огородный инвентарь</div>
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col gap-6 mb-5">
            <div className="bg-[#212526] text-white">
              <ul>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Малярные товары <IoIosArrowForward />
                </li>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Электроинструмент <IoIosArrowForward />
                </li>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Спецодежда <IoIosArrowForward />
                </li>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Сезонное <IoIosArrowForward />
                </li>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Для дома и дачи <IoIosArrowForward />
                </li>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Инструменты <IoIosArrowForward />
                </li>
              </ul>
            </div>
            <div className="bg-[#212526] text-white">
              <ul>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Цена, ₽ <IoIosArrowDown />
                </li>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Бренд <IoIosArrowDown />
                </li>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Старна производитель <IoIosArrowDown />
                </li>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Цвет <IoIosArrowDown />
                </li>
                <li className="border border-gray-400 px-2 py-4 flex justify-between">
                  Способ доставки <IoIosArrowDown />
                </li>
              </ul>
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
            <div className="relative ">
              <div className="absolute left-5 top-5 text-white text-start">
                <p className="font-bold">Печи со скидкой</p>
                <p className="text-[12px]">до 30%</p>
              </div>
              <img className="w-[100%]" src="/oven.png" alt="new-arrival" />
            </div>
          </div>
          <div className="flex flex-col flex-[2]  ">
            <div className="flex lg:px-32 md:px-7 max-sm:px-4 sm:px-6 ">
              <div className="flex ">
                <p className="font-bold">Сортировать:</p>
                <select className="bg-white">
                  <option
                    className="border-none"
                    value="По популярности"
                    label="По популярности"
                  />
                  <option
                    value="По возрастанию цены"
                    label="По возрастанию цены"
                  />
                  <option value="По убыванию цены" label="По убыванию цены" />
                  <option value="Сначала новые" label="Сначала новые" />
                  <option value="От А до Я" label="От А до Я" />
                  <option value="От Я до А" label="От Я до А" />
                </select>

                <div className="flex absolute right-0 justify-end gap-4 items-center  ">
                  <span>ВИД</span>
                  <span>
                    <AiOutlineMenu />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-10 ml-6 my-4 ">
              <img
                src="listDirectory/listDirectory 2.png"
                alt="listDirectory"
              />
              <div className="flex absolute right-0 justify-end  items-center">
                <img
                  className="absolute "
                  src="listDirectory/listDirectory 3.png"
                  alt="listDirectory"
                />
                <img
                  className="items-center relative"
                  src="listDirectory/Vector.png"
                  alt="listDirectory"
                />
              </div>
              <div>
                <h4 className="my-2">Эмаль Condor ПФ-115 жёлтая 1,8 кг</h4>

                <p className="text-xs">
                  Быстросохнущая, высокоукрывистая, защита <br />
                  от водорослей, мха, лишайника, защита от грибка
                </p>
                <div className=" flex items-center text-xs ml-0  text-[#126935] ">
                  <p>
                    <IoIosArrowDown />
                  </p>
                  <p>в наличии</p>
                  <AiOutlineShoppingCart />
                </div>
              </div>
            </div>

            <div className=" flex gap-10 ml-6 my-4 ">
              <img src="listDirectory/Rectangle 2.png" alt="listDirectory" />
              <div className="flex absolute right-0 justify-end  items-center">
                <img
                  className="absolute "
                  src="listDirectory/listDirectory 3.png"
                  alt="listDirectory"
                />
                <img
                  className="items-center relative"
                  src="listDirectory/Vector.png"
                  alt="listDirectory"
                />
              </div>
              <div>
                <h4 className="my-2">Эмаль Condor ПФ-115 жёлтая 1,8 кг</h4>

                <p className="text-xs">
                  Быстросохнущая, высокоукрывистая, защита <br />
                  от водорослей, мха, лишайника, защита от грибка
                </p>
                <div className=" flex items-center text-xs ml-0  text-[#126935] ">
                  <p>
                    <IoIosArrowDown />
                  </p>
                  <p>в наличии</p>
                  <AiOutlineShoppingCart />
                </div>
              </div>
            </div>

            <div className=" flex gap-10 ml-6 my-4 ">
              <img src="listDirectory/Rectangle 3.png" alt="listDirectory" />
              <div className="flex absolute right-0 justify-end  items-center">
                <img
                  className="absolute "
                  src="listDirectory/listDirectory 3.png"
                  alt="listDirectory"
                />
                <img
                  className="items-center relative"
                  src="listDirectory/Vector.png"
                  alt="listDirectory"
                />
              </div>
              <div>
                <h4 className="my-2">Эмаль Condor ПФ-115 жёлтая 1,8 кг</h4>

                <p className="text-xs">
                  Быстросохнущая, высокоукрывистая, защита <br />
                  от водорослей, мха, лишайника, защита от грибка
                </p>
                <div className=" flex items-center text-xs ml-0  text-[#126935] ">
                  <p>
                    <IoIosArrowDown />
                  </p>
                  <p>в наличии</p>
                  <AiOutlineShoppingCart />
                </div>
              </div>
            </div>

            <div className=" flex gap-10 ml-6 my-4 ">
              <img src="listDirectory/Rectangle 4.png" alt="listDirectory" />
              <div className="flex absolute right-0 justify-end  items-center">
                <img
                  className="absolute "
                  src="listDirectory/listDirectory 3.png"
                  alt="listDirectory"
                />
                <img
                  className="items-center relative"
                  src="listDirectory/Vector.png"
                  alt="listDirectory"
                />
              </div>
              <div>
                <h4 className="my-2">Эмаль Condor ПФ-115 жёлтая 1,8 кг</h4>

                <p className="text-xs">
                  Быстросохнущая, высокоукрывистая, защита <br />
                  от водорослей, мха, лишайника, защита от грибка
                </p>
                <div className=" flex items-center text-xs ml-0  text-[#126935] ">
                  <p>
                    <IoIosArrowDown />
                  </p>
                  <p>в наличии</p>
                  <AiOutlineShoppingCart />
                </div>
              </div>
            </div>

            <div className=" flex gap-10 ml-6 my-4 ">
              <img src="listDirectory/Rectangle 5.png" alt="listDirectory" />
              <div className="flex absolute right-0 justify-end  items-center">
                <img
                  className="absolute "
                  src="listDirectory/listDirectory 3.png"
                  alt="listDirectory"
                />
                <img
                  className="items-center relative"
                  src="listDirectory/Vector.png"
                  alt="listDirectory"
                />
              </div>
              <div>
                <h4 className="my-2">Эмаль Condor ПФ-115 жёлтая 1,8 кг</h4>

                <p className="text-xs">
                  Быстросохнущая, высокоукрывистая, защита <br />
                  от водорослей, мха, лишайника, защита от грибка
                </p>
                <div className=" flex items-center text-xs ml-0  text-[#126935] ">
                  <p>
                    <IoIosArrowDown />
                  </p>
                  <p>в наличии</p>
                  <AiOutlineShoppingCart />
                </div>
              </div>
            </div>

            <div className=" flex gap-10 ml-6 my-4 ">
              <img src="listDirectory/Rectangle 6.png" alt="listDirectory" />
              <div className="flex absolute right-0 justify-end  items-center">
                <img
                  className="absolute "
                  src="listDirectory/listDirectory 3.png"
                  alt="listDirectory"
                />
                <img
                  className="items-center relative"
                  src="listDirectory/Vector.png"
                  alt="listDirectory"
                />
              </div>
              <div>
                <h4 className="my-2">Эмаль Condor ПФ-115 жёлтая 1,8 кг</h4>

                <p className="text-xs">
                  Быстросохнущая, высокоукрывистая, защита <br />
                  от водорослей, мха, лишайника, защита от грибка
                </p>
                <div className=" flex items-center text-xs ml-0  text-[#126935] ">
                  <p>
                    <IoIosArrowDown />
                  </p>
                  <p>в наличии</p>
                  <AiOutlineShoppingCart />
                </div>
              </div>
            </div>

            <div className=" flex gap-10 ml-6 my-4 ">
              <img src="listDirectory/Rectangle 7.png" alt="listDirectory" />
              <div className="flex absolute right-0 justify-end  items-center">
                <img
                  className="absolute "
                  src="listDirectory/listDirectory 3.png"
                  alt="listDirectory"
                />
                <img
                  className="items-center relative"
                  src="listDirectory/Vector.png"
                  alt="listDirectory"
                />
              </div>
              <div>
                <h4 className="my-2">Эмаль Condor ПФ-115 жёлтая 1,8 кг</h4>

                <p className="text-xs">
                  Быстросохнущая, высокоукрывистая, защита <br />
                  от водорослей, мха, лишайника, защита от грибка
                </p>
                <div className=" flex items-center text-xs ml-0  text-[#126935] ">
                  <p>
                    <IoIosArrowDown />
                  </p>
                  <p>в наличии</p>
                  <AiOutlineShoppingCart />
                </div>
              </div>
            </div>

            <div className=" flex gap-10 ml-6 my-4 ">
              <img src="listDirectory/Rectangle 8.png" alt="listDirectory" />
              <div className="flex absolute right-0 justify-end  items-center">
                <img
                  className="absolute "
                  src="listDirectory/listDirectory 3.png"
                  alt="listDirectory"
                />
                <img
                  className="items-center relative"
                  src="listDirectory/Vector.png"
                  alt="listDirectory"
                />
              </div>
              <div>
                <h4 className="my-2">Эмаль Condor ПФ-115 жёлтая 1,8 кг</h4>

                <p className="text-xs">
                  Быстросохнущая, высокоукрывистая, защита <br />
                  от водорослей, мха, лишайника, защита от грибка
                </p>
                <div className=" flex items-center text-xs ml-0  text-[#126935] ">
                  <p>
                    <IoIosArrowDown />
                  </p>
                  <p>в наличии</p>
                  <AiOutlineShoppingCart />
                </div>
              </div>
            </div>

            <div className=" flex gap-10 ml-6 my-4 ">
              <img src="listDirectory/Rectangle 9.png" alt="listDirectory" />
              <div className="flex absolute right-0 justify-end  items-center">
                <img
                  className="absolute "
                  src="listDirectory/listDirectory 3.png"
                  alt="listDirectory"
                />
                <img
                  className="items-center relative"
                  src="listDirectory/Vector.png"
                  alt="listDirectory"
                />
              </div>
              <div>
                <h4 className="my-2">Эмаль Condor ПФ-115 жёлтая 1,8 кг</h4>

                <p className="text-xs">
                  Быстросохнущая, высокоукрывистая, защита <br />
                  от водорослей, мха, лишайника, защита от грибка
                </p>
                <div className=" flex items-center text-xs ml-0  text-[#126935] ">
                  <p>
                    <IoIosArrowDown />
                  </p>
                  <p>в наличии</p>
                  <AiOutlineShoppingCart />
                </div>
              </div>
            </div>

            <div className=" flex gap-10 ml-6 my-4 ">
              <img src="listDirectory/Rectangle 10.png" alt="listDirectory" />
              <div className="flex absolute right-0 justify-end  items-center">
                <img
                  className="absolute "
                  src="listDirectory/listDirectory 3.png"
                  alt="listDirectory"
                />
                <img
                  className="items-center relative"
                  src="listDirectory/Vector.png"
                  alt="listDirectory"
                />
              </div>
              <div>
                <h4 className="my-2">Эмаль Condor ПФ-115 жёлтая 1,8 кг</h4>

                <p className="text-xs">
                  Быстросохнущая, высокоукрывистая, защита <br />
                  от водорослей, мха, лишайника, защита от грибка
                </p>
                <div className=" flex items-center text-xs ml-0  text-[#126935] ">
                  <p>
                    <IoIosArrowDown />
                  </p>
                  <p>в наличии</p>
                  <AiOutlineShoppingCart />
                </div>
              </div>
            </div>

            <div className=" flex gap-10 ml-6 my-4 ">
              <img src="listDirectory/Rectangle 11.png" alt="listDirectory" />
              <div className="flex absolute right-0 justify-end  items-center">
                <img
                  className="absolute "
                  src="listDirectory/listDirectory 3.png"
                  alt="listDirectory"
                />
                <img
                  className="items-center relative"
                  src="listDirectory/Vector.png"
                  alt="listDirectory"
                />
              </div>
              <div>
                <h4 className="my-2">Эмаль Condor ПФ-115 жёлтая 1,8 кг</h4>

                <p className="text-xs">
                  Быстросохнущая, высокоукрывистая, защита <br />
                  от водорослей, мха, лишайника, защита от грибка
                </p>
                <div className=" flex items-center text-xs ml-0  text-[#126935] ">
                  <p>
                    <IoIosArrowDown />
                  </p>
                  <p>в наличии</p>
                  <AiOutlineShoppingCart />
                </div>
              </div>
            </div>

            <div className=" flex gap-10 ml-6 my-4 ">
              <img src="listDirectory/Rectangle 12.png" alt="listDirectory" />
              <div className="flex absolute right-0 justify-end  items-center">
                <img
                  className="absolute "
                  src="listDirectory/listDirectory 3.png"
                  alt="listDirectory"
                />
                <img
                  className="items-center relative"
                  src="listDirectory/Vector.png"
                  alt="listDirectory"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
