import React from "react";
import { Link } from "react-router-dom";
//  closeIcon from '../../icons/closeIcon.png';

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <Link to="/">
        <p>exit</p>
      </Link>
    </div>
  </div>
);

export default InfoBar;
