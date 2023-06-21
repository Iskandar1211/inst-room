import React from "react";
import { Link } from "react-router-dom";

export const DetalNewsPage = () => {
  return (
    <div className="w-[100vw] h[80-vh] ">
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6">
        <div className="flex gap-2">
          <span className="text-[#8A8A8A] flex">
            <Link to="/">Главная</Link>/ <Link to="/news"> Новости</Link>
          </span>

          <span className="flex ">
            Спрос на инструменты для домохозяйства вырос на 38% за год
          </span>
        </div>
        <div className="justify-items-start my-7 flex">
          <h1 className="justify-items-start text-2xl font-bold">
            Cпрос на инструменты для домохозяйств вырос <br />
            <p className="flex">на 38% за год</p>
          </h1>
        </div>
      </div>
      <div>
        <img className="w-[100%] " src="/detalNews/photo1.png" alt="news" />
      </div>
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 py-8 relative text-justify">
        <p>
          Онлайн — гипермаркет товаров для дома, дачи, строительства и ремонта
          проанализировал спрос на аккумуляторные, ручные и электроинструменты
          в октябре
          <br />
          2021 и сравнил эти цифры с аналогичным периодом 2020 года. Этой осенью
          товары данной категории россияне покупали чаще на 38%.
          <br />
          <br />
          «На рост спроса в категории инструментов могли повлиять несколько
          факторов. В 2021 году в России выросли объёмы ввода жилья почти
          на 30%, что привело к увеличению количества ремонтов в новых
          квартирах. Также в этом году россияне признались, что стали экономить
          на ремонте и по возможности проводить его самостоятельно. В связи
          с этим многим из них потребовался свой инструмент», — комментирует
          руководитель пресс-службы «Инструменты.ру» Сергей Денисенко
        </p>
        <div className=" justify-between py-10  flex col-auto  relative">
          <div className="w-[30vw] h-[60vh] text-xs bg-[#F05A00] px-10 py-28  ">
            <p className="text-white text-justify ">
              «На рост спроса в категории инструментов могли повлиять несколько
              факторов. В 2021 году в России выросли объёмы ввода жилья почти
              на 30%, что привело к увеличению количества ремонтов в новых
              квартирах. Также в этом году россияне признались, что стали
              экономить на ремонте и по возможности проводить
              его самостоятельно. В связи с этим многим из них потребовался свой
              инструмент», — комментирует руководитель пресс-службы
              «Инструменты.ру» Сергей Денисенко
            </p>
            <div className=" w-[35vw] py-10 justify-start  absolute left-0 text-justify  ">
              <p className="py-48  text-start ">
                Онлайн — гипермаркет товаров для дома, дачи, строительства
                и ремонта проанализировал спрос на аккумуляторные, ручные
                и электроинструменты в <br />
                 октябре 2021 и сравнил эти цифры с аналогичным периодом
                2020 года. <br />
                Этой осенью товары данной категории россияне покупали чаще
                на 38%.
              </p>
            </div>
          </div>
          <div className="w-[40vw] text-xs  max-w-6xl  text-justify ">
            <p className="px-6 py-8">
              Онлайн — гипермаркет товаров для дома, дачи, строительства
              и ремонта проанализировал спрос на аккумуляторные, ручные
              и электроинструменты в октябре 2021 и сравнил эти цифры
              с аналогичным периодом 2020 года. Этой осенью товары данной
              категории россияне покупали чаще на 38%. <br />
              <br />
              «На рост спроса в категории инструментов могли повлиять несколько
              факторов. В 2021 году в России выросли объёмы ввода жилья почти
              на 30%, что привело к увеличению количества ремонтов в новых
              квартирах. Также в этом году россияне признались, что стали
              экономить на ремонте и по возможности проводить
              его самостоятельно. В связи с этим многим из них потребовался свой
              инструмент», — комментирует руководитель пресс-службы
              «Инструменты.ру» Сергей Денисенко
            </p>
            <div
              style={{
                marginTop: "10vh",
                // position: "relative",
                // width: "60vw",
                // height: "30vh",
                // marginLeft: "370px",
                // right: "450px",
                // top: "50px",
                // alignContent: "flex-end",
                // display: "flex",
                // justifyItems: "end",
              }}
              //   className="w-[30vw] h-[30vh] ml-96 mx-24  "
            >
              <img src="/detalNews/photo2.png" alt="news" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl py-6 ml-44  ">
            Онлайн — гипермаркет проанализировал <br />
            спрос:
          </h2>
        </div>
        <div className="   text-xs ">
          <p className="text-[#373737] text-justify ml-44">
            — Заполненное и подписанное заявление о государственной регистрации
            прекращения деятельности физических лиц в качестве ИП — форма
            № R26001.; <br />
            — Документ об уплате госпошлины в размере 160 ₽;
            <br />
            — Документ, подтверждающий предоставление информации
            в территориальный орган ПФР.;
            <br />
            — Заполненное и подписанное заявление о государственной регистрации
            прекращения деятельности физических лиц в качестве ИП 
            <br />
            — форма № R26001.; — Документ об уплате госпошлины в размере 160 ₽;
            <br />
            — Документ, подтверждающий предоставление информации
            в территориальный орган ПФР.;
          </p>
        </div>
        <div className="w-[70%]">
          <h2 className="text-base py-4  color-[#000000]">
            Аналогичный взрывной рост показали материалы для соответстующих
            инструментов Компания активно расширяет своё присутствие <br />
            в регионах Сибири
          </h2>
          <p className="text-xs opacity-80">
            Онлайн — гипермаркет товаров для дома, дачи, строительства и ремонта
            «Инструменты» проанализировал спрос на аккумуляторные, ручные
            и электроинструменты в октябре 2021 и сравнил эти цифры
            с аналогичным периодом 2020 года. Этой осенью товары данной
            категории россияне покупали чаще на 38%. <br />
            <br />
            «На рост спроса в категории инструментов могли повлиять несколько
            факторов. В 2021 году в России выросли объёмы ввода жилья почти
            на 30%, что привело к увеличению количества ремонтов в новых
            квартирах. Также в этом году россияне признались, что стали
            экономить на ремонте и по возможности проводить его самостоятельно.
            В связи с этим многим из них потребовался свой инструмент», —
            комментирует руководитель пресс-службы «Инструменты.ру» Сергей
            Денисенко
          </p>
        </div>
        <div>
          <ul className="flex justify-between my-4">
            <li>Название</li>
            <li>1 колонка</li>
            <li>2 колонка</li>
            <li>3 колонка</li>
            <li>4 колонка</li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-between gap-8">
            <li className="w-[20%] text-xs">Название</li>
            <li className="w-[20%] text-xs">
              для фасадов, для стен, для потолков, для кухонных/ванных комнат,
              для детских комнат
            </li>
            <li className="w-[20%] text-xs">
              для окон и дверей, для металлических изделий, для деревянных
              изделий, для цоколей, для лоджий, для ограждений
            </li>
            <li className="w-[20%] text-xs">
              для металлических изделий, для деревянных изделий, для цоколей,
              для лоджий, для ограждений
            </li>
            <li className="w-[20%] text-xs">для фасадов, для стен</li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-between my-4 ">
            <li className="  text-xs">Тип работ</li>
            <li className="text-xs">внутренние, наружные</li>
            <li className="text-xs">внутренние, наружные</li>
            <li className="text-xs">внутренние</li>
            <li className="text-xs">наружные</li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-between my-4">
            <li>Основа</li>
            <li>акриловая</li>
            <li>акриловая</li>
            <li>акриловая</li>
            <li>-</li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-between  relative">
            <li>Разбавитель</li>
            <li className=" mr-12">вода</li>
            <li className=" mr-12">вода</li>
            <li className=" mr-8">вода</li>
            <li>вода</li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-between my-4">
            <li>Цвет</li>
            <li>Красный</li>
            <li>Красный</li>
            <li>Красный</li>
            <li>-</li>
          </ul>
          <div className="flex justify-between">
            <div className="w-[60vw] my-36">
              <img src="/detalNews/photo3.png" alt="news" />
            </div>
            <div className="w-[30vw] h-[69vh] text-xs bg-[#F05A00] px-10 py-20 overflow-hidden  ">
              <p className="text-white text-justify ">
                «На рост спроса в категории инструментов могли повлиять
                несколько факторов. В 2021 году в России выросли объёмы ввода
                жилья почти на 30%, что привело к увеличению количества ремонтов
                в новых квартирах. Также в этом году россияне признались,
                что стали экономить на ремонте и по возможности проводить
                его самостоятельно. <br />
                <br />
                В связи с этим многим из них потребовался свой инструмент», —
                комментирует руководитель пресс-службы «Инструменты.ру» Сергей
                Денисенко
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
