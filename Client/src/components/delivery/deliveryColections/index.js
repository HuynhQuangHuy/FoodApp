import React from "react";
import Slider from "react-slick";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import "./deliveryColection.css";
import DeliveryItem from "./deliveryItem";

const deliveryItems = [
  {
    id: 1,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/homepage_dish_data/4/7cf2db5ec261a0fa27a502d3196a6f60.png",
  },
  {
    id: 2,
    title: "Burger",
    cover:
      "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
  },
  {
    id: 3,
    title: "Rolls",
    cover:
      "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
  },
  {
    id: 4,
    title: "Cake",
    cover:
      "https://b.zmtcdn.com/data/homepage_dish_data/2/78261817faa51e9456cfab592c189a62.png",
  },
  {
    id: 5,
    title: "Biryani",
    cover:
      "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
  },
  {
    id: 6,
    title: "Chaat",
    cover:
      "https://b.zmtcdn.com/data/homepage_dish_data/4/d9452952b432b35d1019ada01cedce7f.png?output-format=webp",
  },
];

const settings = {
  className: "",
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  adaptiveHeight: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DeliveryColection = () => {
  return (
    <div className="delivery-collection">
      <div className="max-width">
        <div className="collection-title">Eat what make you happy</div>
        <Slider {...settings}>
          {deliveryItems.map((item) => {
            return (
              <div style={{ width: 285 }}>
                <DeliveryItem item={item} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryColection;
