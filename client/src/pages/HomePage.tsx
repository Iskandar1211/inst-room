import React from "react";
import { Products } from "../components/Products";
import { Slider } from "../components/Slider";

export const HomePage = () => {
  return (
    <div>
      <Slider />
      <Products/>
    </div>
  );
};
