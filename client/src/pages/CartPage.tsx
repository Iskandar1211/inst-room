import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { GrClose } from "react-icons/gr";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../store/reducers/Cart";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Breadcrumbs } from "@material-tailwind/react";

export const CartPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cart.items);
  const totalPrice = products.reduce((acum, item) => {
    return acum + item.total;
  }, 0);
  const discount = (totalPrice / 100) * 5;

  return (
    <div>
      <div className=" lg:px-32 md:px-7 flex flex-col gap-6 max-sm:px-4 sm:px-6 py-6 bg-[#CBCBCB]">
        <Breadcrumbs>
          <Link className="opacity-60" to="/">
            Главная
          </Link>
          <Link to="/cart">Корзина</Link>
        </Breadcrumbs>
        <div className="text-4xl flex justify-between">
          Корзина
          <div className="w-fit px-2 py-1 border border-[#3B3B3B] text-[16px] cursor-pointer text-[#3B3B3B]">
            ПРОДОЛЖИТЬ ПОКУПКИ
          </div>
        </div>
        <div className="bg-white">
          <div className="grid grid-cols-4 border py-3 px-3 font-bold">
            <div>Название</div>
            <div>Стоимость</div>
            <div>Количество</div>
            <div>Итого</div>
          </div>
          {products.map((product) => (
            <div key={product.id} className="grid grid-cols-4 px-3 border py-3">
              <div className="flex gap-2">
                <img className="w-[60px] h-[60px]" src={product.img} alt="" />
                <div>{product.detailed}</div>
              </div>
              <div>
                <div>{product.price} ₽</div>
              </div>
              <div>
                <div className="flex items-center gap-2 justify-center">
                  <AiOutlineMinus
                    onClick={() => dispatch(decrementQuantity(product.id))}
                    className="text-[#DEDBDB] cursor-pointer text-2xl"
                  />
                  <div
                    className="px-2"
                    style={{
                      borderLeft: "1px solid #DEDBDB",
                      borderRight: "1px solid #DEDBDB",
                    }}
                  >
                    {product.quantity}
                  </div>
                  <AiOutlinePlus
                    onClick={() => dispatch(incrementQuantity(product.id))}
                    className="cursor-pointer text-2xl"
                  />
                </div>
              </div>
              <div className="flex justify-around">
                <div>{product.total} ₽</div>
                <div
                  onClick={() => dispatch(removeFromCart(product.id))}
                  className=" hover:bg-red-400 hover:rounded-full p-2 h-fit cursor-pointer"
                >
                  <GrClose />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-2">
          <div className="">
            <div
              className="flex justify-between py-2"
              style={{ borderBottom: "1px solid gray" }}
            >
              <span>Сумма</span>
              <span>{totalPrice} ₽</span>
            </div>
            <div
              className="flex justify-between py-2 text-[#8A8A8A]"
              style={{ borderBottom: "1px solid gray" }}
            >
              <span>Скидка</span>
              <span>— {discount} ₽</span>
            </div>
            <div className="flex justify-between text-[20px] py-2">
              <span>К оплате</span>
              <span className="text-[#F05A00]">{totalPrice} ₽</span>
            </div>
            <Link
              to="/order-form"
              className="w-[280px] h-[50px] bg-[#F05A00] text-white flex justify-center items-center"
            >
              ПЕРЕЙТИ К ОФОРМЛЕНИЮ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
