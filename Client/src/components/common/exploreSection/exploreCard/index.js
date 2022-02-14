import React from "react";
import "./exploreCard.css";
const ExploreCard = ({ restaurant }) => {
  // 2:28:20
  const name = restaurant?.info?.name ?? "";
  const coverImg = restaurant?.info?.image?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);

  const bottomContainers = restaurant?.bottomContainers;
  // console.log("sdd: " + bottomContainers.length);
  const goldOff = restaurant?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.lenght === 1
      ? offers[0].text
      : null;
  return (
    <div className="explore-card cur-po">
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className="explore-card-image" />
        <div className="delivery-time">{deliveryTime}</div>
        {proOff && <div className="pro-off">{proOff} </div>}
        {goldOff && <div className="gold-off absolure-center">{goldOff} </div>}
        {discount && <div className="discount absolure-center">{discount}</div>}
      </div>
      <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && (
          <div className="res-rating absolute-center">
            {rating} <i class="fi fi-rr-star absolute-center"></i>
          </div>
        )}
      </div>
      {/* 2:50:00 cuisines.length */}
      <div className="res-row">
        {cuisines && (
          <div className="res-cuisine">
            {cuisines.map((item, i) => {
              return (
                <span className="res-cuisine-tag" key={i}>
                  {item} {i !== cuisines.lenght - 1 && ","}
                </span>
              );
            })}
          </div>
        )}
        {/* 3:01:20 */}
        {approxPrice && <div className="res-price">{approxPrice}</div>}
      </div>
      {/* bottomContainers.lenght > 0 */}
      {bottomContainers && (
        <div>
          <div className="card-separator"></div>
          <div className="explore-bottom">
            <img
              src={bottomContainers[0]?.image?.url}
              style={{ height: "18px" }}
              alt={bottomContainers[0]?.text}
            />
            <div className="res-bottom-text">{bottomContainers[0]?.text}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreCard;
