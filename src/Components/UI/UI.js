import React from "react";
import { SketchPicker } from "react-color";

const UI = ({ value, handleChange, color, setColor }) => {
  return (
    <>
      <div className="sliderContainer">
        <label htmlFor="slider">Slider: {value}</label>
        <input
          name="slider"
          type="range"
          min="1"
          max="100"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>

      <div style={{ margin: "auto" }}>
        <SketchPicker color={color} onChange={(pick) => setColor(pick)} />
      </div>

      <div className="knob"></div>
    </>
  );
};

export default UI;
