import { Breadcrumbs } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { CardProductCarousel } from "../components/UX-UI/carousel/CardProducCarousel";
import { useAppDispatch } from "../store/hooks/hooks";
import { addToCart } from "../store/reducers/Cart";
import { addToFavorites } from "../store/reducers/Favorites";
import { IProduct } from "../types/Model";

export const CardProductPage = () => {
  const { id } = useParams();

  const [isAddFavorites, setIsAddFavorites] = useState(false);
  const [isAddComprison, setIsAddComprisson] = useState(false);
  const [selectProduct, setSelectProduct] = useState<IProduct[]>([]);
  const [similarProducts, setSimilarProducts] = useState<IProduct[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(`http://localhost:3009/products/${id}`)
      .then((response) => response.json())
      .then((product) => setSelectProduct([product]));
    fetch(`http://localhost:3009/products`)
      .then((response) => response.json())
      .then((products) => setSimilarProducts(products));
  }, [id]);

  const onAddProduct = () => {
    dispatch(addToCart(selectProduct[0]));
  };
  const onAddFavorites = () => {
    dispatch(addToFavorites(selectProduct[0]));
    setIsAddFavorites(true);
  };

  return (
    <div className="bg-[#CBCBCB]">
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 pb-[40px]">
        <div className="pt-[24px] pb-[40px]">
          <Breadcrumbs>
            <Link className="opacity-60" to="/">
              Главная
            </Link>
            <Link to={`/card-product/${id}`}>Карточка товара</Link>
          </Breadcrumbs>
        </div>
        {selectProduct.map((product) => (
          <div key={product.id} className="bg-white flex md:flex-row flex-col px-[40px] py-[30px]">
            <div className="flex-1 flex justify-center  items-center">
              <img
                className="w-[360px] h-[360px] "
                src={product.img}
                alt={product.name}
              />
            </div>
            <div className="flex-1 text-start flex flex-col gap-2">
              <p className="text-[30px] text-start">{product.name}</p>
              <div className="flex ">
                {product.inStock ? (
                  <span className="text-[#126935] text-start flex gap-2 items-center justify-center">
                    В наличии
                  </span>
                ) : (
                  <span className="text-red-500">под заказ</span>
                )}
              </div>
              <p>{product.detailed}</p>
              <div className="flex gap-2 text-[30px]">
                <p className="font-bold">{product.price} ₽</p>
                <p className="text-[#DEDBDB]  line-through text-[22px]">
                  {product.isNew === false &&
                    product.price + (product.price / 100) * 5}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={onAddProduct}
                  className="w-[154px] h-[50px] flex justify-center rounded items-center bg-[#F05A00] px-3 py-2 text-white"
                >
                  В КОРЗИНУ
                </button>
                <div className=" flex gap-2 text-5xl cursor-pointer">
                  {!isAddComprison ? (
                    <FiBarChart2 />
                  ) : (
                    <FiBarChart2 className="text-[#FC573B]" />
                  )}
                  <div>
                    {isAddFavorites ? (
                      <AiFillHeart className="text-[#FC573B]" />
                    ) : (
                      <AiOutlineHeart onClick={onAddFavorites} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div>
          <div className="w-[93%] m-auto">
            <CardProductCarousel
              title="Похожие товары"
              categories={selectProduct}
              products={similarProducts}
              slideToShow={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
