import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../cards/Card";

interface IsrcImg {
  id: string;
  img: string;
}

interface Props {
  products: IsrcImg[];
  slideToShow: number;
}

export const BrandSlides = ({ products, slideToShow }: Props) => {
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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-2 w-[90%] m-auto">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="ml-4 cursor-pointer ">
            <img className="bg-white rounded" src={product.img} alt="бренды" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
