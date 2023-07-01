import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../cards/Card";
import { IProduct } from "../../../types/Model";

interface Props {
  title?: string;
  products: IProduct[];
  slideToShow: number;
  categories: IProduct[];
}

export const CardProductCarousel = ({
  title,
  products,
  slideToShow,
  categories,
}: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const categoriesSelect = categories
    .map((product) => product.categories)
    .join("");

  return (
    <div className={`w-[100%] py-4`}>
      <h2 className="text-4xl m-3 text-start"> {title} </h2>
      <Slider {...settings}>
        {products.map((product) => {
          if (product.categories === categoriesSelect) {
            return <Card key={product.id} product={product} />;
          }
        })}
      </Slider>
    </div>
  );
};
