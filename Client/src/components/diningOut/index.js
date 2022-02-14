import React from "react";
import { diningOut } from "../../data/diningOut";
import Collection from "../common/collection";
import ExploreSection from "../common/exploreSection";
import Filters from "../common/filters";
import "./diningOut.css";

const collectionList = [
  {
    id: 1,
    title: "Live Sports Screenings",
    cover:
      "https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
    places: "12 Places",
  },
  {
    id: 2,
    title: "Newly Opened",
    cover:
      "https://b.zmtcdn.com/data/collections/25b0494ade2359d4e6d90e1c73ea6672_1582082248.jpg",
    places: "12 Places",
  },
  {
    id: 3,
    title: "Veggie Friendly",
    cover:
      "https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
    places: "12 Places",
  },
  {
    id: 4,
    title: "Trending This Week",
    cover:
      "https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
    places: "12 Places",
  },
  {
    id: 5,
    title: "Best of Bengaluru",
    cover:
      "https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
    places: "12 Places",
  },
];

const diningFilter = [
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
const diningList = diningOut;
const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={diningFilter} />
      </div>
      <ExploreSection
        list={diningList}
        collectionName="dine-Put Restaurant in Lucknow"
      />
    </div>
  );
};

export default DiningOut;
