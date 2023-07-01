import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../cards/Card";
import { IProduct } from "../../../types/Model";
import { Link } from "react-router-dom";

interface Props {
  title?: string;
  products: IProduct[];
  slideToShow: number;
}

export const Carousel = ({ title, products, slideToShow }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
    initialSlide: 0,
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
  let titleLink: string = "";
  if (title === "Малярные товары") {
    titleLink = "painting-supplies";
  } else if (title === "Электрооборудование") {
    titleLink = "electrical";
  } else if (title === "Спецодежда") {
    titleLink = "overalls";
  } else if (title === "Для дома и дачи") {
    titleLink = "for-home-and-cottage";
  }
  return (
    <div className={`lg:w-[47%] py-4 w-[77%] m-auto flex flex-col gap-3`}>
      <Link
        to={`/catalog/${titleLink}`}
        className="md:text-4xl text-2xl m-3 text-start hover:text-[#F05A00]"
      >
        {title}
      </Link>
      <Slider {...settings}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
};
