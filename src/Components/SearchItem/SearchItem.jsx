import React from "react";
import { Buttons } from "../../Utils/Components";
import { Button } from "antd";
import "./SearchItem.scss";

const SearchItem = () => {
  return (
    <div className="src__item">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt="Image"
        className="src__img"
      />
      <div className="src__desc">
        <h2 className="src__title">Tower Street Apartments</h2>
        <span className="src__distance">500m from center</span>
        <span className="src__taxi">Free airport taxi</span>
        <span className="src__subtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="src__features">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="src__cancel">Free cancellation </span>
        <span className="src__cancel-subtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="src__details">
        <div className="src__rating">
          <span className="src__rating-txt">Excellent</span>
          <Button className="src__rating-btn">8.9</Button>
        </div>
        <div className="src__detail-txts">
          <span className="src__price">$112</span>
          <span className="src__tax">Includes taxes and fees</span>
          <Buttons
            className="src__check-btn"
            type={"dark"}
            text={"See availability"}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
