import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../Card";
import { IProduct } from "../../types/Model";

interface Props {
  title?: string;
  products: IProduct[];
  slideToShow: number;
}

export const Carousel = ({ title, products, slideToShow}: Props) => {
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
    <div className={`lg:w-[47%] py-4 w-[77%] m-auto`}>
      <h2 className="text-4xl m-3 text-start"> {title} </h2>
      <Slider {...settings}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
};
