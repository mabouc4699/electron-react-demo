import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import RefreshIcon from "@mui/icons-material/Refresh";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";

const SideNavBar = ({ show, handleExpand, setReset }) => {
  return (
    <div id="sidebarnav">
      <MenuIcon onClick={() => handleExpand()} />
      {show ? (
        <div>
          <a href="#" onClick={() => setReset(true)}>
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
