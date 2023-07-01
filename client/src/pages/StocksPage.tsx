import { Breadcrumbs } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/UX-UI/cards/Card";
import { IProduct } from "../types/Model";

export const StocksPage = () => {
  const [stockProduct, setStockProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:3009/stocks-products")
      .then((response) => response.json())
      .then((product) => setStockProduct(product));
  }, []);

  return (
    <div className="bg-[#CBCBCB]">
      <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 flex flex-col gap-4 py-6">
        <Breadcrumbs className="mt-4">
          <Link className="opacity-60" to="/">
            Главная
          </Link>
          <Link to="/stocks-page">Акции</Link>
        </Breadcrumbs>
        <div className="text-4xl text-start">Акции</div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 m-auto">
          {stockProduct.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
