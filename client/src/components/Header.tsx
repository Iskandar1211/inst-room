import { AiOutlineHeart } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks/hooks";

export const Header = () => {
  const products = useAppSelector((state) => state.cart.items);
  const favorites = useAppSelector((state) => state.favorites.items);
  const totalPrice = products.reduce((acum, item) => {
    return acum + item.price;
  }, 0);
  return (
    <div className="bg-[#212526] h-[10vh]">
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 h-[100%] flex justify-between items-center">
        <div className="max-sm:w-1/4 md:w-1/8">
          <img src="logo.svg" alt="logo" />
        </div>
        <div className="max-sm:flex max-sm:flex-col text-[#fff] sm:flex sm:gap-2">
          <span>Время работы:</span> <span>10:00-20:00</span>
        </div>
        <div className="flex flex-col max-sm:hidden">
          <span className="text-white">+7 495 120-32-14</span>
          <a href="g" className="text-[#FC573B]">
            Заказать звонок
          </a>
        </div>
        <div className="h-[100%] flex gap-1 max-sm:hidden ">
          <Link
            to="/favorites"
            className="h-[100%] flex items-center justify-center text-4xl bg-[#3B3B3B] w-[5rem] relative cursor-pointer hover:bg-[#F05A00]"
          >
            <AiOutlineHeart className="text-white" />
            <span className="absolute text-[0.9rem] bg-[#F05A00] rounded-full px-1 h-3 flex items-center justify-center py-2 right-4 top-4 text-white ">
              {favorites.length}
            </span>
          </Link>
          <Link to='/dark-compair' className="h-[100%] flex items-center justify-center text-4xl bg-[#3B3B3B] w-[5rem] relative cursor-pointer hover:bg-[#F05A00]">
            <FiBarChart2 className="text-white" />
            <span className="absolute text-[0.9rem] bg-[#F05A00] rounded-full px-1 h-3 flex items-center justify-center py-2 right-4 top-4 text-white">
              0
            </span>
          </Link>
          <div className="h-[100%] flex items-center justify-center text-4xl bg-[#3B3B3B] w-[5rem] relative cursor-pointer hover:bg-[#F05A00]">
            <FaRegUserCircle className="text-white" />
          </div>
          <Link
            to="/cart"
            className="h-[100%] flex items-center justify-center text-4xl bg-[#3B3B3B] w-[5rem] relative cursor-pointer hover:bg-[#F05A00]"
          >
            <SlBasket className="text-white" />
            <span className="absolute text-[0.9rem] bg-[#F05A00] rounded-full px-1 h-3 flex items-center justify-center py-2 right-4 top-4 text-white">
              {products.length}
            </span>
          </Link>
          <div className="text-white flex flex-col justify-center ml-2">
            <p>Товаров на сумму</p>
            <p className="text-start">{totalPrice} &#8381;</p>
          </div>
        </div>
      </div>
    </div>
  );
};