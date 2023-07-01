import { Breadcrumbs, Option, Select } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "../components/UX-UI/cards/Card";
import { IProduct } from "../types/Model";

export const CatalogPage = () => {
  const { categories } = useParams();
  let categori: string = "";
  if (categories === "painting-supplies") {
    categori = "Малярные товары";
  } else if (categories === "electrical") {
    categori = "Электрооборудование";
  } else if (categories === "overalls") {
    categori = "Спецодежда";
  } else if (categories === "for-home-and-cottage") {
    categori = "Для дома и дачи";
  }

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:3009/products")
      .then((response) => response.json())
      .then((products) => setFilteredProducts(products));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3009/products")
      .then((response) => response.json())
      .then((products) => {
        const filtered = products.filter(
          (product: IProduct) => product.categories === categori
        );
        setProducts(filtered);
      });
    setSelectedItem(categori);
  }, [categories]);

  const onSortProducts = (value: string | undefined) => {
    if (value === "По убыванию цены") {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    } else if (value === "По возрастание цены") {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    } else if (value === "Сначала новые") {
      const sortedProducts = [...products].sort((a, b) =>
        a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1
      );
      setProducts(sortedProducts);
    } else if (value === "От А до Я") {
      const sortedProducts = [...products].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setProducts(sortedProducts);
    } else if (value === "От Я до А") {
      const sortedProducts = [...products].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      setProducts(sortedProducts);
    }
  };

  const [selectedItem, setSelectedItem] = useState<string>("");

  const onFilteredProducts = (item: string) => {
    setSelectedItem(item);
    const filter = filteredProducts.filter(
      (product) => product.categories === item
    );
    setProducts(filter);
  };

  return (
    <div>
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 flex flex-col gap-5">
        <Breadcrumbs className="mt-4">
          <Link className="opacity-60" to="/">
            Главная
          </Link>
          <Link to="/catalog">Каталог</Link>
        </Breadcrumbs>
        <div className="text-4xl text-start">Каталог</div>
        <div className="md:flex md:gap-4 ">
          <div className="flex-1 flex flex-col gap-6 mb-5">
            <div className="bg-[#212526] text-white">
              <ul className="md:block grid grid-cols-2">
                <li
                  onClick={() => onFilteredProducts("Малярные товары")}
                  className={`border border-gray-400 px-2 py-4 flex justify-between cursor-pointer ${
                    selectedItem === "Малярные товары" ? "bg-[#F05A00]" : ""
                  }`}
                >
                  Малярные товары
                </li>
                <li
                  onClick={() => onFilteredProducts("Электрооборудование")}
                  className={`border border-gray-400 px-2 py-4 flex justify-between cursor-pointer ${
                    selectedItem === "Электрооборудование" ? "bg-[#F05A00]" : ""
                  }`}
                >
                  Электроинструмент
                </li>
                <li
                  onClick={() => onFilteredProducts("Спецодежда")}
                  className={`border border-gray-400 px-2 py-4 flex justify-between cursor-pointer ${
                    selectedItem === "Спецодежда" ? "bg-[#F05A00]" : ""
                  }`}
                >
                  Спецодежда
                </li>
                <li
                  onClick={() => onFilteredProducts("Для дома и дачи")}
                  className={`border border-gray-400 px-2 py-4 flex justify-between cursor-pointer ${
                    selectedItem === "Для дома и дачи" ? "bg-[#F05A00]" : ""
                  }`}
                >
                  Для дома и дачи
                </li>
              </ul>
            </div>
            <div className="md:relative md:block hidden">
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
            <div className="md:relative md:block hidden">
              <div className="absolute left-5 top-5 text-white text-start">
                <p className="font-bold">Печи со скидкой</p>
                <p className="text-[12px]">до 30%</p>
              </div>
              <img className="w-[100%]" src="/oven.png" alt="new-arrival" />
            </div>
          </div>
          <div className="flex flex-col flex-[2.5] ">
            <div className="flex">
              <div className="flex items-center gap-1  ">
                <p className="font-bold">Сортировать:</p>
                <Select
                  label="Выбирите сортировку"
                  onChange={(value) => onSortProducts(value)}
                >
                  <Option value="По возрастание цены">
                    По возрастание цены
                  </Option>
                  <Option value="По убыванию цены">По убыванию цены</Option>
                  <Option value="Сначала новые">Сначала новые</Option>
                  <Option value="От А до Я">От А до Я</Option>
                  <Option value="От Я до А">От Я до А</Option>
                </Select>
              </div>
            </div>
            <div className="grid md:grid-cols-3 md:gap-3 gap-2 py-8 m-auto">
              {products.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
