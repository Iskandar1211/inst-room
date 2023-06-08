import React from "react";
import { AboutUs } from "../components/AboutUs";
import { Brands } from "../components/Brands";
import { FeaturedItems } from "../components/FeaturedItems";
import { News } from "../components/News";
import { Products } from "../components/Products";
import { Slider } from "../components/Slider";

export const HomePage = () => {
  return (
    <div>
      <Slider />
      <Products />
      <Brands />
      <AboutUs />
      <FeaturedItems />
      <News />
    </div>
  );
};
