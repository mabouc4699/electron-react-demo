import React, { useState } from "react";
import "../Header.css";

const Header = () => {
  const [name, setName] = useState("");

  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  return (
    <div id="header">
      <nav>
        <a href="#">Temp Header Text</a>
        <input value={name} onChange={(e) => handleName(e)} />
      </nav>
    </div>
  );
};

export default Header;
