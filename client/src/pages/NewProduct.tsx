import { Breadcrumbs } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/UX-UI/cards/Card";
import { IProduct } from "../types/Model";

export const NewProduct = () => {
  const [newProducts, setNewProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:3009/new-products")
      .then((response) => response.json())
      .then((product) => setNewProducts(product));
  }, []);

  return (
    <div className="bg-[#CBCBCB]">
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 flex flex-col gap-4 py-6">
        <Breadcrumbs className="mt-4">
          <Link className="opacity-60" to="/">
            Главная
          </Link>
          <Link to="/stocks-page">Новинки</Link>
        </Breadcrumbs>
        <div className="text-4xl text-start">Новинки</div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 m-auto">
          {newProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
