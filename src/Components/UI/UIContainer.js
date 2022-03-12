import React, { useState, useEffect } from "react";
import { resetValues } from "../../Utils/handleFunctions";
import UI from "./UI";
import "./UI.css";

const UIContainer = ({ reset, setReset }) => {
  const [slideValue, setSlideValue] = useState(10);
  const [color, setColor] = useState("#fff");

  const handleChange = (e) => {
    setSlideValue(parseInt(e));
  };

  useEffect(() => {
    resetValues(setColor, setSlideValue);
    setReset(false);
  }, [reset]);

  return (
    <div className="slideContainer">
      <UI
        value={slideValue}
        handleChange={handleChange}
        color={color}
        setColor={setColor}
      />
    </div>
  );
};

export default UIContainer;
