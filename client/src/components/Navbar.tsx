import React, { useState, useEffect } from "react";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { SlSocialVkontakte } from "react-icons/sl";
import { RxInstagramLogo } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { Search } from "./Search";
import { IProduct } from "../types/Model";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

export const Navbar = () => {
  const [isSearch, setIsSearch] = useState(false);
  const widthFroSeacrchContainer = !isSearch
    ? "md:w-[35rem] w-[6rem]"
    : "md:w-[40rem] w-[35rem]";
  const widthFroSeacrchButton = !isSearch ? "hidden" : "md:w-[40rem] w-[100%]";
  const styleForSearchContainer = [
    "flex items-center transition-all",
    widthFroSeacrchContainer,
  ].join(" ");

  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const onSearchMessages = (e: any) => {
    let value = e.target.value;
    setSearchValue(value);
    if (value === "") {
      setFilteredProducts([]);
    } else {
      setFilteredProducts(
        products.filter((product) => product.name.toLowerCase().includes(value))
      );
    }
  };

  useEffect(() => {
    fetch("http://localhost:3009/products")
      .then((response) => response.json())
      .then((product) => setProducts(product));
  }, []);

  return (
    <div className="bg-black ">
      <div className="lg:px-32 md:px-7 px-4  h-[10vh] md:flex md:items-center md:justify-between flex gap-2 justify-between items-center">
        <Menu>
          <MenuHandler>
            <Button className="flex bg-transparent gap-4 items-center hover:bg-[#F05A00] border-[#F05A00]">
              <RiBarChartHorizontalFill className="text-3xl" /> Каталог товаров{" "}
            </Button>
          </MenuHandler>
          <MenuList>
            <Link to={`/catalog/${"painting-supplies"}`}>
              <MenuItem>Малярные товары</MenuItem>
            </Link>
            <Link to={`/catalog/${"electrical"}`}>
              <MenuItem>Электрооборудование</MenuItem>
            </Link>
            <Link to={`/catalog/${"overalls"}`}>
              <MenuItem>Спецодежда</MenuItem>
            </Link>
            <Link to={`/catalog/${"for-home-and-cottage"}`}>
              <MenuItem>Для дома и дачи</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <div className="md:flex md:text-white md:gap-3 hidden">
          <Link className="hover:text-[#F05A00]" to="/about">
            О компании
          </Link>
          <Link className="hover:text-[#F05A00]" to="/stocks-page">
            Акции
          </Link>
          <Link className="hover:text-[#F05A00]" to="/new-product">
            Новинки
          </Link>
        </div>
        <div className="md:flex md:gap-2 hidden">
          <RxInstagramLogo className="bg-white cursor-pointer text-3xl rounded-full px-1 hover:text-[#D52574]" />
          <SlSocialVkontakte className="bg-white cursor-pointer text-3xl rounded-full px-1 hover:text-[#0272F1]" />
          <FiFacebook className="bg-white cursor-pointer text-3xl rounded-full px-1 hover:text-[#6781B8]" />
        </div>
        <div className={styleForSearchContainer}>
          <label className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              onClick={() => setIsSearch(!isSearch)}
              onChange={onSearchMessages}
              type="text"
              value={searchValue}
              className=" border outline-none cursor-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-50"
              placeholder="Search"
              required
            />
            {filteredProducts.length !== 0 && (
              <div className="absolute top-8 z-10">
                {isSearch && (
                  <div>
                    <div className="bg-white max-h-[500px] gap-4 overflow-auto w-full z-10 p-2 nav-filter">
                      <div
                        onClick={() => {
                          setIsSearch(false);
                          setSearchValue("");
                        }}
                        className="md:w-full md:flex md:flex-col md:items-center"
                      >
                        {filteredProducts.map((product) => (
                          <Search key={product.id} filterProduct={product} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <Link
                  onClick={() => setIsSearch(false)}
                  to={`/catalog/${"painting-supplies"}`}
                  className={`bg-[#3B3B3B] z-10 flex justify-center items-center text-2xl cursor-pointer text-white h-[60px]  rounded-lg ${widthFroSeacrchButton}`}
                >
                  Показать все
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
