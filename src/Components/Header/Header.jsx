import React from "react";
import Container from "../../Utils/Container/Container";
import Navbar from "./Navbar/Navbar";
import { Buttons } from "../../Utils/Components";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Navbar />
        <div>
          <h1 className="header__title">
            A lifetime of discounts? It's Genius.
          </h1>
          <p className="header__desc">
            Get rewarded for your travels – unlock instant savings of 10% or
            more with a free Lamabooking account
          </p>
          <Buttons type={"dark"} text={"Sign in / Register"} />
        </div>
      </Container>
    </div>
  );
};

export default Header;
