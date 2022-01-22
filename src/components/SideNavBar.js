import React, { useState } from "react";
import "../SideBarNav.css";
import MenuIcon from "@mui/icons-material/Menu";
import RefreshIcon from "@mui/icons-material/Refresh";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
const $ = require("jquery");

const SideNavBar = () => {
  const [show, setShow] = useState(false);

  const handleExpand = () => {
    setShow(!show);

    let color = show ? "lightgray" : "darkgrey";
    $("#sidebarnav > svg:nth-child(1)").attr("style", `color: ${color}`);
  };

  return (
    <div id="sidebarnav">
      <MenuIcon onClick={() => handleExpand()} />
      {show ? (
        <div>
          <a href="#">
            <RefreshIcon /> Default
          </a>
          <a href="#">
            <KeyboardIcon /> Keyboard Function
          </a>
          <a href="#">
            <SettingsEthernetIcon /> Macro
          </a>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SideNavBar;
