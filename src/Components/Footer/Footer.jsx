import React from "react";
import Container from "../../Utils/Container/Container";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footer__lists">
          <ul className="footer__list">
            <li className="footer__item">Countries</li>
            <li className="footer__item">Regions</li>
            <li className="footer__item">Cities</li>
            <li className="footer__item">Districts</li>
            <li className="footer__item">Airports</li>
            <li className="footer__item">Hotels</li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">Homes </li>
            <li className="footer__item">Apartments </li>
            <li className="footer__item">Resorts </li>
            <li className="footer__item">Villas</li>
            <li className="footer__item">Hostels</li>
            <li className="footer__item">Guest houses</li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">Unique places to stay </li>
            <li className="footer__item">Reviews</li>
            <li className="footer__item">Unpacked: Travel articles </li>
            <li className="footer__item">Travel communities </li>
            <li className="footer__item">Seasonal and holiday deals </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">Car rental </li>
            <li className="footer__item">Flight Finder</li>
            <li className="footer__item">Restaurant reservations </li>
            <li className="footer__item">Travel Agents </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">Curtomer Service</li>
            <li className="footer__item">Partner Help</li>
            <li className="footer__item">Careers</li>
            <li className="footer__item">Sustainability</li>
            <li className="footer__item">Press center</li>
            <li className="footer__item">Safety Resource Center</li>
            <li className="footer__item">Investor relations</li>
            <li className="footer__item">Terms & conditions</li>
          </ul>
        </div>
        <div className="footer__text">Copyright © 2022 Lamabooking.</div>
      </Container>
    </div>
  );
};

export default Footer;
