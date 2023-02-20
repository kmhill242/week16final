import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these CAMPGROUNDS!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-10.jpg"
              text="A Quiet Campground in the Heart of Acadia National Park"
              label="Blackwoods"
              path="/services"
            />
            <CardItem
              src="images/img-11.jpg"
              text="A Campground Nestled in the Woods of Yosemite National Park"
              label="Lower Pine"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-12.jpg"
              text="Sleep Among the Giant Redwoods"
              label="Mill Creek"
              path="/services"
            />
            <CardItem
              src="images/img-13.jpg"
              text="Experience the Tetons Like Never Before!"
              label="Jenny Lake"
              path="/products"
            />
            <CardItem
              src="images/img-14.jpg"
              text="The Ultimate View Of Denali From Your Front Door"
              label="Savage River"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
