import React, { useState } from "react";
import SideNavBar from "./SideNavBar.js";
import "./SideNavBar.css";
const $ = require("jquery");

const SideNavBarContainer = ({ setReset }) => {
  const [show, setShow] = useState(false);

  const handleExpand = () => {
    setShow(!show);

    let color = show ? "lightgray" : "darkgrey";
    $("#sidebarnav > svg:nth-child(1)").attr("style", `color: ${color}`);
  };
  return (
    <>
      <SideNavBar setReset={setReset} show={show} handleExpand={handleExpand} />
    </>
  );
};

export default SideNavBarContainer;
