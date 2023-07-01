import { Breadcrumbs, Option, Select } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CardFavorites } from "../components/UX-UI/cards/CardFavorites";
import {  useAppSelector } from "../store/hooks/hooks";
import { IProduct } from "../types/Model";

export const FavoritesPage = () => {
  const favorites = useAppSelector((state) => state.favorites.items);

  const [sortFavorite, setSortFavorite] = useState<IProduct[]>(favorites);

  const sortFavorites = (value: string | undefined) => {
    if (value === "По убыванию цены") {
      const sortedFavorites = [...sortFavorite].sort(
        (a, b) => b.price - a.price
      );
      setSortFavorite(sortedFavorites);
    } else if (value === "По возрастание цены") {
      const sortedFavorites = [...sortFavorite].sort(
        (a, b) => a.price - b.price
      );
      setSortFavorite(sortedFavorites);
    } else if (value === "Сначала новые") {
      const sortedFavorites = [...sortFavorite].sort((a, b) =>
        a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1
      );
      setSortFavorite(sortedFavorites);
    } else if (value === "От А до Я") {
      const sortedFavorites = [...sortFavorite].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setSortFavorite(sortedFavorites);
    } else if (value === "От Я до А") {
      const sortedFavorites = [...sortFavorite].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      setSortFavorite(sortedFavorites);
    }
  };

  return (
    <div className=" lg:px-32 md:px-7 flex flex-col gap-6 max-sm:px-4 sm:px-6 py-6 bg-[#CBCBCB]">
      <Breadcrumbs className="mt-4">
        <Link className="opacity-60" to="/">
          Главная
        </Link>
        <Link to="/favorites">Избранное</Link>
      </Breadcrumbs>
      <div className="text-4xl text-start">Избранное</div>
      <div className="flex md:flex-row flex-col">
        <div className="flex-1 md:text-start text-center my-4 font-bold">
          {favorites.length} товаров
        </div>
        <div className="flex flex-[2] justify-start">
          <div className="flex gap-1 items-center">
            <p className="font-bold">Сортировать:</p>
            <Select
              label="Выбирите сортировку"
              onChange={(value) => sortFavorites(value)}
            >
              <Option value="По возрастание цены">По возрастание цены</Option>
              <Option value="По убыванию цены">По убыванию цены</Option>
              <Option value="Сначала новые">Сначала новые</Option>
              <Option value="От А до Я">От А до Я</Option>
              <Option value="От Я до А">От Я до А</Option>
            </Select>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-3 grid-cols-1 m-auto">
        {sortFavorite.map((favorite) => (
          <CardFavorites key={favorite.id} favorite={favorite} />
        ))}
      </div>
    </div>
  );
};
