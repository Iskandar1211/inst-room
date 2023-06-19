import React from "react";
import { Link } from "react-router-dom";

export const CardProductPage = () => {
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
          <Link to="/garden-inventory-page" className="text-[#8a8a8a]">
            Садово-огородный инвентарь /
          </Link>
          <Link to="/garden-inventory-page" className="text-[#000000]">
            Farbitex
          </Link>
        </div>
        <div className="flex ml-10  my-10  gap-24 ">
          <img
            className="w-[30vw]"
            src="cardProduct/card1.png"
            alt="cardProduct"
          />
          <span>
            <h1 className="text-2xl text-[#000000] ">
              Краска Farbitex Для садовых
            </h1>
            <h1 className="text-2xl text-[#000000] flex ml-3 ">деревьев</h1>
            <br />
            <p className="flex ml-3  text-[#126935]">В наличии</p>
            <br />
            <br />
            <p className="text-sm text-justify ml-2 text-[#8a8a8a]">
              Быстросохнущая, высокоукрывистая, защита от водорослей, мха,
              лишайника, защита от грибка, светостойкая, термостойкая, защита
              от вредителей
            </p>
            <div className="flex ml-2 my-4">
              <p className="text-black font-bold">500Р</p>
              <p className="text-sm">750p</p>
            </div>
            <p className="flex text-white bg-[#F05A00] w-[8vw] ml-2  ">
              <Link to="/cart">Корзина</Link>
            </p>
          </span>
        </div>

        <div className="flex gap-10">
          <img src="cardProduct/card2.png" alt="cardProduct" />
          <img src="cardProduct/card2.png" alt="cardProduct" />
          <img src="cardProduct/card2.png" alt="cardProduct" />
          <img src="cardProduct/card2.png" alt="cardProduct" />
          <img src="cardProduct/card2.png" alt="cardProduct" />
        </div>
        <div className="text-2xl mr-80">
          <h4>Характеристики</h4>
        </div>
        <div className="flex gap-28 items-center">
          <div>
            <p className="text-[#000000] text-xs flex  gap-2">
              Расход:
              <span className="text-[#8a8a8a]">от 0,15 до 0,18 кг/м2</span>
            </p>
            <p className="text-[#000000] text-xs flex  gap-2">
              Назначение:
              <span className="text-[#8a8a8a]">Для деревьев</span>
            </p>
            <p className="text-[#000000] text-xs flex  gap-2">
              Тип работ:
              <span className="text-[#8a8a8a]">Наружное</span>
            </p>
            <p className="text-[#000000] text-xs flex  gap-2">
              Упаковка:
              <span className="text-[#8a8a8a]">Ведро</span>
            </p>
            <p className="text-[#000000] text-xs flex  gap-2">
              Время высыхания:
              <span className="text-[#8a8a8a]">1ч</span>
            </p>
          </div>
          <div>
            <p className="text-[#000000] text-xs flex  gap-2">
              Расход:
              <span className="text-[#8a8a8a]">от 0,15 до 0,18 кг/м2</span>
            </p>
            <p className="text-[#000000] text-xs flex  gap-2">
              Назначение:
              <span className="text-[#8a8a8a]">Для деревьев</span>
            </p>
            <p className="text-[#000000] text-xs flex  gap-2">
              Тип работ:
              <span className="text-[#8a8a8a]">Наружное</span>
            </p>
            <p className="text-[#000000] text-xs flex  gap-2">
              Упаковка:
              <span className="text-[#8a8a8a]">Ведро</span>
            </p>
            <p className="text-[#000000] text-xs flex gap-2">
              Время высыхания:
              <span className="text-[#8a8a8a]">1ч</span>
            </p>
          </div>
        </div>
        <div className="flex text-2xl">
          <h2>Похожие товары</h2>
        </div>
        <div className="flex">
          <div className=" flex">
            <div className="relative ">
              <div className=" absolute  left-2 text-white top-2 text-start">
                <p className="bg-[#180A3E]">НОВИНКА</p>
              </div>

              <img
                className="my-10 mx-12 w-[15vw] h-[30vh] "
                src="cardProduct/card3.png"
                alt="cardProduct"
              />

              <div className="flex">
                <img
                  className="color-[#DEDBDB] w-[5vw]"
                  src="cardProduct/cardLine1.png"
                  alt="cardProduct"
                />
                <img
                  className="w-[5vw]"
                  src="cardProduct/cardLine2.png"
                  alt="cardProduct"
                />
                <img
                  className="color-[#DEDBDB w-[5vw]]"
                  src="cardProduct/cardLine3.png"
                  alt="cardProduct"
                />
                <img
                  className="color-[#DEDBDB w-[5vw]]"
                  src="cardProduct/cardLine4.png"
                  alt="cardProduct"
                />
              </div>
              <div className="flex font-medium w-[25vw]  ">
                <h1>
                  Эмаль Condor ПФ-115 жёлтая <p className="flex">1,8 кг</p>
                </h1>
              </div>
              <div className="flex font-bold gap-4">
                <div className="flex gap-3">
                  <h2>500 ₽</h2>
                  <span className="opacity-30  ">720 ₽</span>
                </div>
                <div className="flex gap-6 w-[20vw]">
                  <span className="flex text-[#126935] font-normal gap-2">
                    <img
                      className="w-[1vw] h-[2vh] my-2"
                      src="cardProduct/vector (01).png"
                      alt="cardProduct"
                    />
                    <span className="opacity-80 ">в наличии</span>
                  </span>
                  <div className=" flex relative right-4 w-[3vw]">
                    <span className="relative items-center">
                      <img
                        src="cardProduct/corzinaLine.png"
                        alt="cardProduct"
                      />
                    </span>
                    <span className="absolute ">
                      <img src="cardProduct/Vector (1).png" alt="cardProduct" />
                    </span>
                    <span className="absolute my-6 ml-3">
                      <img src="cardProduct/Vector (2).png" alt="cardProduct" />
                    </span>
                    <span className="absolute my-6 ml-5 ">
                      <img src="cardProduct/Vector (3).png" alt="cardProduct" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex">
            <div className="relative ">
              <div className=" absolute  left-2 text-white top-2 text-start">
                <p className="bg-[#180A3E]">НОВИНКА</p>
              </div>

              <img
                className="my-10 mx-12 w-[15vw] h-[30vh] "
                src="cardProduct/card4.png"
                alt="cardProduct"
              />

              <div className="flex">
                <img
                  className="color-[#DEDBDB] w-[5vw]"
                  src="cardProduct/cardLine1.png"
                  alt="cardProduct"
                />
                <img
                  className="w-[5vw]"
                  src="cardProduct/cardLine2.png"
                  alt="cardProduct"
                />
                <img
                  className="color-[#DEDBDB w-[5vw]]"
                  src="cardProduct/cardLine3.png"
                  alt="cardProduct"
                />
                <img
                  className="color-[#DEDBDB w-[5vw]]"
                  src="cardProduct/cardLine4.png"
                  alt="cardProduct"
                />
              </div>
              <div className="flex font-medium w-[25vw]  ">
                <h1>
                  Эмаль Condor ПФ-115 жёлтая <p className="flex">1,8 кг</p>
                </h1>
              </div>
              <div className="flex font-bold gap-4">
                <div className="flex gap-3">
                  <h2>500 ₽</h2>
                  <span className="opacity-30  ">720 ₽</span>
                </div>
                <div className="flex gap-6 w-[20vw]">
                  <span className="flex text-[#126935] font-normal gap-2">
                    <img
                      className="w-[1vw] h-[2vh] my-2"
                      src="cardProduct/vector (01).png"
                      alt="cardProduct"
                    />
                    <span className="opacity-80 ">в наличии</span>
                  </span>
                  <div className=" flex relative right-4 w-[3vw]">
                    <span className="relative items-center">
                      <img
                        src="cardProduct/corzinaLine.png"
                        alt="cardProduct"
                      />
                    </span>
                    <span className="absolute ">
                      <img src="cardProduct/Vector (1).png" alt="cardProduct" />
                    </span>
                    <span className="absolute my-6 ml-3">
                      <img src="cardProduct/Vector (2).png" alt="cardProduct" />
                    </span>
                    <span className="absolute my-6 ml-5 ">
                      <img src="cardProduct/Vector (3).png" alt="cardProduct" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex">
            <div className="relative ">
              <div className=" absolute  left-2 text-white top-2 text-start">
                <p className="bg-[#180A3E]">НОВИНКА</p>
              </div>

              <img
                className="my-10 mx-12 w-[15vw] h-[30vh] "
                src="cardProduct/card3.png"
                alt="cardProduct"
              />

              <div className="flex">
                <img
                  className="color-[#DEDBDB] w-[5vw]"
                  src="cardProduct/cardLine1.png"
                  alt="cardProduct"
                />
                <img
                  className="w-[5vw]"
                  src="cardProduct/cardLine2.png"
                  alt="cardProduct"
                />
                <img
                  className="color-[#DEDBDB w-[5vw]]"
                  src="cardProduct/cardLine3.png"
                  alt="cardProduct"
                />
                <img
                  className="color-[#DEDBDB w-[5vw]]"
                  src="cardProduct/cardLine4.png"
                  alt="cardProduct"
                />
              </div>
              <div className="flex font-medium w-[25vw]  ">
                <h1>
                  Эмаль Condor ПФ-115 жёлтая <p className="flex">1,8 кг</p>
                </h1>
              </div>
              <div className="flex font-bold gap-4">
                <div className="flex gap-3">
                  <h2>500 ₽</h2>
                  <span className="opacity-30  ">720 ₽</span>
                </div>
                <div className="flex gap-6 w-[20vw]">
                  <span className="flex text-[#126935] font-normal gap-2">
                    <img
                      className="w-[1vw] h-[2vh] my-2"
                      src="cardProduct/vector (01).png"
                      alt="cardProduct"
                    />
                    <span className="opacity-80 ">в наличии</span>
                  </span>
                  <div className=" flex relative right-4 w-[3vw]">
                    <span className="relative items-center">
                      <img
                        src="cardProduct/corzinaLine.png"
                        alt="cardProduct"
                      />
                    </span>
                    <span className="absolute ">
                      <img src="cardProduct/Vector (1).png" alt="cardProduct" />
                    </span>
                    <span className="absolute my-6 ml-3">
                      <img src="cardProduct/Vector (2).png" alt="cardProduct" />
                    </span>
                    <span className="absolute my-6 ml-5 ">
                      <img src="cardProduct/Vector (3).png" alt="cardProduct" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className=" flex">
            <div className="relative ">
              <div className=" absolute  left-2 text-white top-2 text-start">
                <p className="bg-[#180A3E]">НОВИНКА</p>
              </div>

              <img
                className="my-10 mx-12 w-[15vw] h-[30vh] "
                src="cardProduct/card4.png"
                alt="cardProduct"
              />

              <div className="flex">
                <img
                  className="color-[#DEDBDB] w-[5vw]"
                  src="cardProduct/cardLine1.png"
                  alt="cardProduct"
                />
                <img
                  className="w-[5vw]"
                  src="cardProduct/cardLine2.png"
                  alt="cardProduct"
                />
                <img
                  className="color-[#DEDBDB w-[5vw]]"
                  src="cardProduct/cardLine3.png"
                  alt="cardProduct"
                />
                <img
                  className="color-[#DEDBDB w-[5vw]]"
                  src="cardProduct/cardLine4.png"
                  alt="cardProduct"
                />
              </div>
              <div className="flex font-medium w-[25vw]  ">
                <h1>
                  Эмаль Condor ПФ-115 жёлтая <p className="flex">1,8 кг</p>
                </h1>
              </div>
              <div className="flex font-bold gap-4">
                <div className="flex gap-3">
                  <h2>500 ₽</h2>
                  <span className="opacity-30  ">720 ₽</span>
                </div>
                <div className="flex gap-6 w-[20vw]">
                  <span className="flex text-[#126935] font-normal gap-2">
                    <img
                      className="w-[1vw] h-[2vh] my-2"
                      src="cardProduct/vector (01).png"
                      alt="cardProduct"
                    />
                    <span className="opacity-80 ">в наличии</span>
                  </span>
                  <div className=" flex relative right-4 w-[3vw]">
                    <span className="relative items-center">
                      <img
                        src="cardProduct/corzinaLine.png"
                        alt="cardProduct"
                      />
                    </span>
                    <span className="absolute ">
                      <img src="cardProduct/Vector (1).png" alt="cardProduct" />
                    </span>
                    <span className="absolute my-6 ml-3">
                      <img src="cardProduct/Vector (2).png" alt="cardProduct" />
                    </span>
                    <span className="absolute my-6 ml-5 ">
                      <img src="cardProduct/Vector (3).png" alt="cardProduct" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex">
            <div className="relative ">
              <div className=" absolute  left-2 text-white top-2 text-start">
                <p className="bg-[#180A3E]">НОВИНКА</p>
              </div>

              <img
                className="my-10 mx-12 w-[15vw] h-[30vh] "
                src="cardProduct/card3.png"
                alt="cardProduct"
              />

              <div className="flex">
                <img
                  className="color-[#DEDBDB] w-[5vw]"
                  src="cardProduct/cardLine1.png"
                  alt="cardProduct"
                />
                <img
                  className="w-[5vw]"
                  src="cardProduct/cardLine2.png"
                  alt="cardProduct"
                />
                <img
                  className="color-[#DEDBDB w-[5vw]]"
                  src="cardProduct/cardLine3.png"
                  alt="cardProduct"
                />
                <img
                  className="color-[#DEDBDB w-[5vw]]"
                  src="cardProduct/cardLine4.png"
                  alt="cardProduct"
                />
              </div>
              <div className="flex font-medium w-[25vw]  ">
                <h1>
                  Эмаль Condor ПФ-115 жёлтая <p className="flex">1,8 кг</p>
                </h1>
              </div>
              <div className="flex font-bold gap-4">
                <div className="flex gap-3">
                  <h2>500 ₽</h2>
                  <span className="opacity-30  ">720 ₽</span>
                </div>
                <div className="flex gap-6 w-[20vw]">
                  <span className="flex text-[#126935] font-normal gap-2">
                    <img
                      className="w-[1vw] h-[2vh] my-2"
                      src="cardProduct/vector (01).png"
                      alt="cardProduct"
                    />
                    <span className="opacity-80 ">в наличии</span>
                  </span>
                  <div className=" flex relative right-4 w-[3vw]">
                    <span className="relative items-center">
                      <img
                        src="cardProduct/corzinaLine.png"
                        alt="cardProduct"
                      />
                    </span>
                    <span className="absolute ">
                      <img src="cardProduct/Vector (1).png" alt="cardProduct" />
                    </span>
                    <span className="absolute my-6 ml-3">
                      <img src="cardProduct/Vector (2).png" alt="cardProduct" />
                    </span>
                    <span className="absolute my-6 ml-5 ">
                      <img src="cardProduct/Vector (3).png" alt="cardProduct" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex">
            <div className="relative ">
              <div className=" absolute  left-2 text-white top-2 text-start">
                <p className="bg-[#180A3E]">НОВИНКА</p>
              </div>

              <img
                className="my-10 mx-12 w-[15vw] h-[30vh] "
                src="cardProduct/card4.png"
                alt="cardProduct"
              />

              <div className="flex">
                <img
                  className="color-[#DEDBDB] w-[5vw]"
                  src="cardProduct/cardLine1.png"
                  alt="cardProduct"
                />
                <img
                  className="w-[5vw]"
                  src="cardProduct/cardLine2.png"
                  alt="cardProduct"
                />
                <img
                  className="color-[#DEDBDB w-[5vw]]"
                  src="cardProduct/cardLine3.png"
                  alt="cardProduct"
                />
                <img
                  className="color-[#DEDBDB w-[5vw]]"
                  src="cardProduct/cardLine4.png"
                  alt="cardProduct"
                />
              </div>
              <div className="flex font-medium w-[25vw]  ">
                <h1>
                  Эмаль Condor ПФ-115 жёлтая <p className="flex">1,8 кг</p>
                </h1>
              </div>
              <div className="flex font-bold gap-4">
                <div className="flex gap-3">
                  <h2>500 ₽</h2>
                  <span className="opacity-30  ">720 ₽</span>
                </div>
                <div className="flex gap-6 w-[20vw]">
                  <span className="flex text-[#126935] font-normal gap-2">
                    <img
                      className="w-[1vw] h-[2vh] my-2"
                      src="cardProduct/vector (01).png"
                      alt="cardProduct"
                    />
                    <span className="opacity-80 ">в наличии</span>
                  </span>
                  <div className=" flex relative right-4 w-[3vw]">
                    <span className="relative items-center">
                      <img
                        src="cardProduct/corzinaLine.png"
                        alt="cardProduct"
                      />
                    </span>
                    <span className="absolute ">
                      <img src="cardProduct/Vector (1).png" alt="cardProduct" />
                    </span>
                    <span className="absolute my-6 ml-3">
                      <img src="cardProduct/Vector (2).png" alt="cardProduct" />
                    </span>
                    <span className="absolute my-6 ml-5 ">
                      <img src="cardProduct/Vector (3).png" alt="cardProduct" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className=" flex">
            <div className="relative ">
              <div className=" absolute  left-2 text-white top-2 text-start">
                <p className="bg-[#180A3E]">НОВИНКА</p>
              </div>

              <img
                className="my-10 mx-12 w-[15vw] h-[30vh] "
                src="cardProduct/card3.png"
                alt="cardProduct"
              />

              <div className="flex">
                <img
                  className="color-[#DEDBDB] w-[5vw]"
                  src="cardProduct/cardLine1.png"
                  alt="cardProduct"
                />
                <img
                  className="w-[5vw]"
                  src="cardProduct/cardLine2.png"
                  alt="cardProduct"
                />
                <img
                  className="color-[#DEDBDB w-[5vw]]"
                  src="cardProduct/cardLine3.png"
                  alt="cardProduct"
                />
                <img
                  className="color-[#DEDBDB w-[5vw]]"
                  src="cardProduct/cardLine4.png"
                  alt="cardProduct"
                />
              </div>
              <div className="flex font-medium w-[25vw]  ">
                <h1>
                  Эмаль Condor ПФ-115 жёлтая <p className="flex">1,8 кг</p>
                </h1>
              </div>
              <div className="flex font-bold gap-4">
                <div className="flex gap-3">
                  <h2>500 ₽</h2>
                  <span className="opacity-30  ">720 ₽</span>
                </div>
                <div className="flex gap-6 w-[20vw]">
                  <span className="flex text-[#126935] font-normal gap-2">
                    <img
                      className="w-[1vw] h-[2vh] my-2"
                      src="cardProduct/vector (01).png"
                      alt="cardProduct"
                    />
                    <span className="opacity-80 ">в наличии</span>
                  </span>
                  <div className=" flex relative right-4 w-[3vw]">
                    <span className="relative items-center">
                      <img
                        src="cardProduct/corzinaLine.png"
                        alt="cardProduct"
                      />
                    </span>
                    <span className="absolute ">
                      <img src="cardProduct/Vector (1).png" alt="cardProduct" />
                    </span>
                    <span className="absolute my-6 ml-3">
                      <img src="cardProduct/Vector (2).png" alt="cardProduct" />
                    </span>
                    <span className="absolute my-6 ml-5 ">
                      <img src="cardProduct/Vector (3).png" alt="cardProduct" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex">
            <div className="relative ">
              <div className=" absolute  left-2 text-white top-2 text-start">
                <p className="bg-[#180A3E]">НОВИНКА</p>
              </div>

              <img
                className="my-10 mx-12 w-[15vw] h-[30vh] "
                src="cardProduct/card4.png"
                alt="cardProduct"
              />

              <div className="flex">
                <img
                  className="color-[#DEDBDB] w-[5vw]"
                  src="cardProduct/cardLine1.png"
                  alt="cardProduct"
                />
                <img
                  className="w-[5vw]"
                  src="cardProduct/cardLine2.png"
                  alt="cardProduct"
                />
                <img
                  className="color-[#DEDBDB w-[5vw]]"
                  src="cardProduct/cardLine3.png"
                  alt="cardProduct"
                />
                <img
                  className="color-[#DEDBDB w-[5vw]]"
                  src="cardProduct/cardLine4.png"
                  alt="cardProduct"
                />
              </div>
              <div className="flex font-medium w-[25vw]  ">
                <h1>
                  Эмаль Condor ПФ-115 жёлтая <p className="flex">1,8 кг</p>
                </h1>
              </div>
              <div className="flex font-bold gap-4">
                <div className="flex gap-3">
                  <h2>500 ₽</h2>
                  <span className="opacity-30  ">720 ₽</span>
                </div>
                <div className="flex gap-6 w-[20vw]">
                  <span className="flex text-[#126935] font-normal gap-2">
                    <img
                      className="w-[1vw] h-[2vh] my-2"
                      src="cardProduct/vector (01).png"
                      alt="cardProduct"
                    />
                    <span className="opacity-80 ">в наличии</span>
                  </span>
                  <div className=" flex relative right-4 w-[3vw]">
                    <span className="relative items-center">
                      <img
                        src="cardProduct/corzinaLine.png"
                        alt="cardProduct"
                      />
                    </span>
                    <span className="absolute ">
                      <img src="cardProduct/Vector (1).png" alt="cardProduct" />
                    </span>
                    <span className="absolute my-6 ml-3">
                      <img src="cardProduct/Vector (2).png" alt="cardProduct" />
                    </span>
                    <span className="absolute my-6 ml-5 ">
                      <img src="cardProduct/Vector (3).png" alt="cardProduct" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex">
            <div className="relative ">
              <div className=" absolute  left-2 text-white top-2 text-start">
                <p className="bg-[#180A3E]">НОВИНКА</p>
              </div>

              <img
                className="my-10 mx-12 w-[15vw] h-[30vh] "
                src="cardProduct/card3.png"
                alt="cardProduct"
              />

              <div className="flex">
                <img
                  className="color-[#DEDBDB] w-[5vw]"
                  src="cardProduct/cardLine1.png"
                  alt="cardProduct"
                />
                <img
                  className="w-[5vw]"
                  src="cardProduct/cardLine2.png"
                  alt="cardProduct"
                />
                <img
                  className="color-[#DEDBDB w-[5vw]]"
                  src="cardProduct/cardLine3.png"
                  alt="cardProduct"
                />
                <img
                  className="color-[#DEDBDB w-[5vw]]"
                  src="cardProduct/cardLine4.png"
                  alt="cardProduct"
                />
              </div>
              <div className="flex font-medium w-[25vw]  ">
                <h1>
                  Эмаль Condor ПФ-115 жёлтая <p className="flex">1,8 кг</p>
                </h1>
              </div>
              <div className="flex font-bold gap-4">
                <div className="flex gap-3">
                  <h2>500 ₽</h2>
                  <span className="opacity-30  ">720 ₽</span>
                </div>
                <div className="flex gap-6 w-[20vw]">
                  <span className="flex text-[#126935] font-normal gap-2">
                    <img
                      className="w-[1vw] h-[2vh] my-2"
                      src="cardProduct/vector (01).png"
                      alt="cardProduct"
                    />
                    <span className="opacity-80 ">в наличии</span>
                  </span>
                  <div className=" flex relative right-4 w-[3vw]">
                    <span className="relative items-center">
                      <img
                        src="cardProduct/corzinaLine.png"
                        alt="cardProduct"
                      />
                    </span>
                    <span className="absolute ">
                      <img src="cardProduct/Vector (1).png" alt="cardProduct" />
                    </span>
                    <span className="absolute my-6 ml-3">
                      <img src="cardProduct/Vector (2).png" alt="cardProduct" />
                    </span>
                    <span className="absolute my-6 ml-5 ">
                      <img src="cardProduct/Vector (3).png" alt="cardProduct" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
