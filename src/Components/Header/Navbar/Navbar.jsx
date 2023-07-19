import React from "react";
import { Link } from "react-router-dom";
import { Buttons } from "../../../Utils/Components";
import { FaBed, FaCar, FaDharmachakra, FaPlane, FaTaxi } from "react-icons/fa";
import "../Header.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="header__nav">
        <div>
          <strong className="header__logo">Iamabooking</strong>
        </div>
        <div className="header__btns">
          <Link to="/register">
            <Buttons type={"light"} text={"Register"} />
          </Link>
          <Link to="/login">
            <Buttons type={"light"} text={"Login"} />
          </Link>
        </div>
      </div>
      <ul className="header__list">
        <li className="header__item">
          <FaBed />
          <p className="header__text">Stays</p>
        </li>
        <li className="header__item">
          <FaPlane />
          <p className="header__text">Flights</p>
        </li>
        <li className="header__item">
          <FaCar />
          <p className="header__text">Car rentals</p>
        </li>
        <li className="header__item">
          <FaDharmachakra />
          <p className="header__text">Attractions</p>
        </li>
        <li className="header__item">
          <FaTaxi />
          <p className="header__text">Airport taxis</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
