import React from "react";
import Container from "../../Utils/Container/Container";
import { Input } from "antd";
import { Buttons } from "../../Utils/Components";
import "./MailList.scss";

const MailList = () => {
  return (
    <div className="mail">
      <Container>
        <div className="mail__wrap">
          <h1 className="mail__title">Save time, save money!</h1>
          <span className="mail__text">
            Sign up and we'll send the best deals to you
          </span>
          <div className="mail__box">
            <Input
              className="mail__input"
              type="text"
              placeholder="Your Email"
            />
            <Buttons type={"dark"} text={"Subscribe"} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MailList;
