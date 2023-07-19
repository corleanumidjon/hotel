import React from "react";
import { Button } from "antd";

const Buttons = ({ type, text }) => {
  return (
    <Button className={type == "light" ? "btn__light" : "btn__dark"}>
      {text}
    </Button>
  );
};

export { Buttons };
