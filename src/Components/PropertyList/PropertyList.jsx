import React from "react";
import Container from "../../Utils/Container/Container";
import "./PropertyList.scss";

const PropertyList = () => {
  return (
    <div>
      <Container>
        <h2 className="pList__title">Browse by property type</h2>
        <div className="pList">
          <div className="pList__item">
            <img
              src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
              alt="Image"
              className="pList__img"
            />
            <div className="pList__titles">
              <h3 className="pList__name">Hotels</h3>
              <p className="pList__desc">233 hotels</p>
            </div>
          </div>
          <div className="pList__item">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
              alt="Image"
              className="pList__img"
            />
            <div className="pList__titles">
              <h3 className="pList__name">Apartments</h3>
              <p className="pList__desc">2331 hotels</p>
            </div>
          </div>
          <div className="pList__item">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
              alt="Image"
              className="pList__img"
            />
            <div className="pList__titles">
              <h3 className="pList__name">Resorts</h3>
              <p className="pList__desc">2331 hotels</p>
            </div>
          </div>
          <div className="pList__item">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
              alt="Image"
              className="pList__img"
            />
            <div className="pList__titles">
              <h3 className="pList__name">Villas</h3>
              <p className="pList__desc">2331 hotels</p>
            </div>
          </div>
          <div className="pList__item">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
              alt="Image"
              className="pList__img"
            />
            <div className="pList__titles">
              <h3 className="pList__name">Cabins</h3>
              <p className="pList__desc">2331 hotels</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PropertyList;
