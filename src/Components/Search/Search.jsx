import React, { useState } from "react";
import Container from "../../Utils/Container/Container";
import { FaBed, FaCalendarAlt, FaUser } from "react-icons/fa";
import { Button, Input } from "antd";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Buttons } from "../../Utils/Components";
import "./Search.scss";

const Search = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div>
      <Container>
        <div className="search">
          <div className="search__item">
            <FaBed className="search__icon" style={{ fontSize: "30px" }} />
            <Input
              type="text"
              placeholder="Where are you going?"
              className="search__input"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="search__item">
            <FaCalendarAlt className="search__icon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="search__text">{`${format(
              date[0].startDate,
              "MM/dd/yyyy"
            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="search__date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="search__item">
            <FaUser className="search__icon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="search__text">{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
            {openOptions && (
              <div className="option">
                <div className="option__item">
                  <span className="option__text">Adult</span>
                  <div className="option__count">
                    <Button
                      disabled={options.adult <= 1}
                      className="option__count-btn"
                      onClick={() => handleOption("adult", "d")}>
                      -
                    </Button>
                    <span className="option__count-num">{options.adult}</span>
                    <Button
                      className="option__count-btn"
                      onClick={() => handleOption("adult", "i")}>
                      +
                    </Button>
                  </div>
                </div>
                <div className="option__item">
                  <span className="option__text">Children</span>
                  <div className="option__count">
                    <Button
                      disabled={options.children <= 0}
                      className="option__count-btn"
                      onClick={() => handleOption("children", "d")}>
                      -
                    </Button>
                    <span className="option__count-num">
                      {options.children}
                    </span>
                    <Button
                      className="option__count-btn"
                      onClick={() => handleOption("children", "i")}>
                      +
                    </Button>
                  </div>
                </div>
                <div className="option__item">
                  <span className="option__text">Room</span>
                  <div className="option__count">
                    <Button
                      disabled={options.room <= 1}
                      className="option__count-btn"
                      onClick={() => handleOption("room", "d")}>
                      -
                    </Button>
                    <span className="option__count-num">{options.room}</span>
                    <Button
                      className="option__count-btn"
                      onClick={() => handleOption("room", "i")}>
                      +
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="search__item">
            <Link to="/srchotels">
              <Buttons type={"dark"} text={"Search"} />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Search;
