import React from "react";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { SlSocialVkontakte } from "react-icons/sl";
import { RxInstagramLogo } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 h-[10vh] flex items-center justify-between">
        <div className="border flex hover:bg-[#F05A00] gap-3 border-[#F05A00] items-center w-fit px-2 rounded cursor-pointer py-2 text-white">
          <RiBarChartHorizontalFill className="text-3xl" />
          <p>Каталог товаров</p>
        </div>
        <div className="flex text-white gap-3">
          <Link to="/">О компании</Link>
          <Link to="/">Акции</Link>
          <Link to="/">Хиты сезона</Link>
          <Link to="/">Новинки</Link>
        </div>
        <div className="flex gap-2">
          <RxInstagramLogo className="bg-white cursor-pointer text-3xl rounded-full px-1" />
          <SlSocialVkontakte className="bg-white cursor-pointer text-3xl rounded-full px-1" />
          <FiFacebook className="bg-white cursor-pointer text-3xl rounded-full px-1" />
        </div>
        <div className="flex items-center w-[20rem]">
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
              type="text"
              className="bg-gray-50 border outline-none cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};
