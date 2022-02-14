import React from "react";
import { restaurants } from "../../data/restaurant";
import ExploreSection from "../common/exploreSection";
import Filters from "../common/filters";
import "./delivery.css";
import DeliveryColection from "./deliveryColections";
import TopBrands from "./topBrands";

const deliveryFilter = [
  {
    id: 1,
    icon: <i class="fi fi-rr-settings-sliders"></i>,
    title: "Filter",
  },
  {
    id: 2,

    title: "Rating: 4.0+",
  },
  {
    id: 3,

    title: "Safe and Hygienic",
  },
  {
    id: 4,

    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i class="fi fi-rr-settings-sliders"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];
const restaurantList = restaurants;
const Delivery = () => {
  return (
    <div>
      <div className="Max-width">
        <Filters filterList={deliveryFilter} />
      </div>
      <DeliveryColection />
      <TopBrands />
      <ExploreSection
        list={restaurantList}
        collectionName="Delivery Restaurant in Bangalor"
      />
    </div>
  );
};

export default Delivery;
