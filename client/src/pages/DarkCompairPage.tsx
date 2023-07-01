import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks/hooks";
import { News } from "../components/News";
import { CompairCard } from "../components/UX-UI/cards/CompairCard";
import { Breadcrumbs } from "@material-tailwind/react";

export const DarkCompairPage = () => {
  const comparison = useAppSelector((state) => state.comparison.comparison);

  return (
    <div className="bg-[#212526] py-5">
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 flex flex-col gap-3">
        <Breadcrumbs className="mt-4 bg-[black]">
          <Link className="opacity-60 text-white" to="/">
            Главная
          </Link>
          <Link to="/dark-compair" className="text-white">
            Сравнение
          </Link>
        </Breadcrumbs>
        <div className="text-4xl text-white flex justify-between">
          <div>Сравнение товаров</div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 px-4 gap-3 text-white py-2">
          {comparison.map((product) => (
            <CompairCard key={product.id} product={product} />
          ))}
        </div>
        <News />
      </div>
    </div>
  );
};
