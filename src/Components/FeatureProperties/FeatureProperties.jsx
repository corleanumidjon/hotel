import React from "react";
import Container from "../../Utils/Container/Container";
import { Button } from "antd";
import "./FeatureProperties.scss";

const FeatureProperties = () => {
  return (
    <div>
      <Container>
        <h2 className="fp__title">Homes guests love</h2>
        <div className="fp">
          <div className="fp__item">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/351072016.jpg?k=285441458d495d3c3cd30a7eeb934ab87eadceff9f2843523903c8ccf44b4616&o=&hp=1"
              alt="Image"
              className="fp__img"
            />
            <div className="fp__titles">
              <span className="fp__name">Aparthotel Stare Miasto</span>
              <span className="fp__city">Madrid</span>
              <span className="fp__price">Starting from $120</span>
              <div className="fp__rating">
                <Button className="fp__rating-btn">8.9</Button>
                <span className="fp__rating-desc">Excellent</span>
              </div>
            </div>
          </div>
          <div className="fp__item">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
              alt="Image"
              className="fp__img"
            />
            <div className="fp__titles">
              <span className="fp__name">Comfort Suites Airport</span>
              <span className="fp__city">Austin</span>
              <span className="fp__price">Starting from $140</span>
              <div className="fp__rating">
                <Button className="fp__rating-btn">9.3</Button>
                <span className="fp__rating-desc">Exceptional</span>
              </div>
            </div>
          </div>
          <div className="fp__item">
            <img
              src="https://images.squarespace-cdn.com/content/v1/549d41a3e4b003c6ce131926/1485439554840-BZT2O12EMY727MUIUV49/image-asset.jpeg?format=1500w"
              alt="Image"
              className="fp__img"
            />
            <div className="fp__titles">
              <span className="fp__name">Four Seasons Hotel</span>
              <span className="fp__city">Lisbon</span>
              <span className="fp__price">Starting from $99</span>
              <div className="fp__rating">
                <Button className="fp__rating-btn">8.8</Button>
                <span className="fp__rating-desc">Excellent</span>
              </div>
            </div>
          </div>
          <div className="fp__item">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
              alt="Image"
              className="fp__img"
            />
            <div className="fp__titles">
              <span className="fp__name">Hilton Garden Inn</span>
              <span className="fp__city">Berlin</span>
              <span className="fp__price">Starting from $105</span>
              <div className="fp__rating">
                <Button className="fp__rating-btn">8.9</Button>
                <span className="fp__rating-desc">Excellent</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeatureProperties;
