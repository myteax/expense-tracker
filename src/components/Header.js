import React from "react";
import Img from "../image/Component.png";

const Header = () => {
  return (
    <div className="row">
      <div className="col">
        <h1 id="header-c1" className="header-color1">
          Expense Tracker
          <img src={Img} id="imgge" />
          &nbsp;
        </h1>
      </div>
    </div>
  );
};

export default Header;
