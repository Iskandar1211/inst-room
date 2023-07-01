import { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks/hooks";
import { RequestAcall } from "./UX-UI/dialog/RequestAcall";
import { Registration } from "./UX-UI/dialog/Registration";
import { Login } from "./UX-UI/dialog/Login";
import { LoginConfirm } from "./UX-UI/dialog/LoginConfirm";
import { IRegistration } from "../types/Model";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./UX-UI/sidebar/SideBar";

export const Header = () => {
  const products = useAppSelector((state) => state.cart.items);
  const favorites = useAppSelector((state) => state.favorites.items);
  const comparison = useAppSelector((state) => state.comparison.comparison);

  const totalPrice = products.reduce((acum, item) => {
    return acum + item.total;
  }, 0);

  const discount = Math.floor((totalPrice / 100) * 5);
  const resultBuy = totalPrice - discount;

  const [users, setUsers] = useState<IRegistration[]>();

  const user = users?.find((user) => user.role === "user");
  const admin = users?.find((user) => user.role === "admin");

  useEffect(() => {
    fetch("http://localhost:3009/get-users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  const [isRegistred, setIsRegistred] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoginConfirm, setIsLoginConfirm] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3009/get-users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, [isRegistred, isLogin, isLoginConfirm]);

  return (
    <div className="bg-[#212526] h-[10vh]">
      <div className="lg:px-32 md:px-7  px-4 h-[100%] flex justify-between items-center">
        <Link to="/" className="max-sm:w-1/4 md:w-1/8">
          <img src="logo.svg" alt="logo" />
        </Link>
        <div className="md:flex md:flex-col text-[#fff] hidden">
          <span>Время работы:</span> <span>10:00-20:00</span>
        </div>
        <div className="md:flex md:flex-col md:items-center hidden">
          <span className="text-white">+7 495 120-32-14</span>
          <RequestAcall />
        </div>
        <div className="md:h-[100%] md:flex md:gap-1 max-w-sm:fixed z-20">
          <div className="flex items-center fixed bottom-0 right-10 gap-1 md:flex md:flex-row md:relative md:top-0 md:gap-1 ">
            <Link
              to="/favorites"
              className="max-w-sm h-[60px] w-[70px] md:h-[100%] flex items-center justify-center text-4xl bg-[#3B3B3B] md:w-[5rem] relative cursor-pointer hover:bg-[#F05A00]"
            >
              <AiOutlineHeart className="text-white" />
              <span className="absolute text-[0.9rem] bg-[#F05A00] rounded-full px-1 h-3 flex items-center justify-center py-2 right-4 top-4 text-white ">
                {favorites.length}
              </span>
            </Link>
            <Link
              to="/dark-compair"
              className="max-w-sm h-[60px] w-[70px] md:h-[100%] flex items-center justify-center text-4xl bg-[#3B3B3B] md:w-[5rem] relative cursor-pointer hover:bg-[#F05A00]"
            >
              <FiBarChart2 className="text-white" />
              <span className="absolute text-[0.9rem] bg-[#F05A00] rounded-full px-1 h-3 flex items-center justify-center py-2 right-4 top-4 text-white">
                {comparison.length}
              </span>
            </Link>
            {isRegistred && (
              <Registration
                setIsLogin={setIsLogin}
                setIsRegistred={setIsRegistred}
              />
            )}
            {!isRegistred && !isLogin && (
              <Login setIsRegistred={setIsRegistred} setIsLogin={setIsLogin} />
            )}
            {!isRegistred && isLogin && !isLoginConfirm && (
              <LoginConfirm setIsLoginConfirm={setIsLoginConfirm} />
            )}
            {!isRegistred &&
              isLogin &&
              isLoginConfirm &&
              (admin && !user ? (
                <Link
                  to="/admin-page"
                  className="max-w-sm h-[60px] w-[70px] md:h-[100%] flex items-center justify-center text-4xl bg-[#3B3B3B] md:w-[5rem] relative cursor-pointer hover:bg-[#F05A00]"
                >
                  <FaRegUserCircle className="text-white" />
                </Link>
              ) : (
                <Link
                  to="/profile-page"
                  className="max-w-sm h-[60px] w-[70px] md:h-[100%] flex items-center justify-center text-4xl bg-[#3B3B3B] md:w-[5rem] relative cursor-pointer hover:bg-[#F05A00]"
                >
                  <FaRegUserCircle className="text-white" />
                </Link>
              ))}

            <Link
              to="/cart"
              className="max-w-sm h-[60px] w-[70px] md:h-[100%] flex items-center justify-center text-4xl bg-[#3B3B3B] md:w-[5rem] relative cursor-pointer hover:bg-[#F05A00]"
            >
              <SlBasket className="text-white" />
              <span className="absolute text-[0.9rem] bg-[#F05A00] rounded-full px-1 h-3 flex items-center justify-center py-2 right-4 top-4 text-white">
                {products.length}
              </span>
            </Link>
          </div>
          <div className="text-white md:flex md:flex-col gap-2 items-center justify-center ml-2 hidden">
            <p className="md:text-[16px]">Товаров на сумму</p>
            <p className="text-start">{resultBuy} &#8381;</p>
          </div>
          <RxHamburgerMenu
            onClick={() => setShowSidebar(!showSidebar)}
            className="text-white md:hidden text-4xl px-1 py-1 hover:bg-[#F05A00] hover:rounded-full hover:px-1 hover:py-1"
          />
          {showSidebar && (
            <Sidebar resultBuy={resultBuy} setShowSidebar={setShowSidebar} />
          )}
        </div>
      </div>
    </div>
  );
};
