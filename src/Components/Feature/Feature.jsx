import React from "react";
import Container from "../../Utils/Container/Container";
import "./Feature.scss";

const Feature = () => {
  return (
    <div>
      <Container>
        <div className="feature">
          <div className="feature__item">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt="Image"
              className="feature__img"
            />
            <div className="feature__titles">
              <h2 className="feature__title">Dublin</h2>
              <h4 className="feature__text">123 properties</h4>
            </div>
          </div>
          <div className="feature__item">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt="Image"
              className="feature__img"
            />
            <div className="feature__titles">
              <h2 className="feature__title">Reno</h2>
              <h4 className="feature__text">533 properties</h4>
            </div>
          </div>
          <div className="feature__item">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt="Image"
              className="feature__img"
            />
            <div className="feature__titles">
              <h2 className="feature__title">Austin</h2>
              <h4 className="feature__text">532 properties</h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Feature;
