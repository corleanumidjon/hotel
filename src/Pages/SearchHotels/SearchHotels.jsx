import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../../Utils/Container/Container";
import Navbar from "../../Components/Header/Navbar/Navbar";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { Button, Input, InputNumber } from "antd";
import SearchItem from "../../Components/SearchItem/SearchItem";
import "./SearchHotels.scss";

const SearchHotels = () => {
  const location = useLocation();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  return (
    <>
      <div className="hotels__nav">
        <Container>
          <Navbar />
        </Container>
      </div>
      <Container>
        <div className="hotels__wrap">
          <div className="hotels__src">
            <h2 className="hotels__title">Search</h2>
            <div className="hotels__item">
              <label className="hotels__label">Destination</label>
              <Input
                className="hotels__input"
                placeholder={destination}
                type="text"
              />
            </div>
            <div className="hotels__item">
              <label className="hotels__label">Check-in Date</label>
              <span
                className="hotels__date"
                onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  className="hotels__input"
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="hotels__item">
              <label className="hotels__label">Options</label>
              <div className="hotels__opts">
                <div className="hotels__opt-item">
                  <span className="hotels__opt-text">
                    Min price <small>per night</small>
                  </span>
                  <InputNumber className="hotels__opt-input" />
                </div>
                <div className="hotels__opt-item">
                  <span className="hotels__opt-text">
                    Max price <small>per night</small>
                  </span>
                  <InputNumber className="hotels__opt-input" />
                </div>
                <div className="hotels__opt-item">
                  <span className="hotels__opt-text">Adult</span>
                  <InputNumber
                    min={1}
                    className="hotels__opt-input"
                    placeholder={options.adult}
                  />
                </div>
                <div className="hotels__opt-item">
                  <span className="hotels__opt-text">Children</span>
                  <InputNumber
                    min={0}
                    className="hotels__opt-input"
                    placeholder={options.children}
                  />
                </div>
                <div className="hotels__opt-item">
                  <span className="hotels__opt-text">Room</span>
                  <InputNumber
                    min={1}
                    className="hotels__opt-input"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <Button className="hotels__src-btn">Search</Button>
          </div>
          <div>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </Container>
    </>
  );
};

export default SearchHotels;
