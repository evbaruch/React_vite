import React, { useState, useEffect } from "react";

export default function Div({ children, style, ...props }) {
  const [color, setColor] = useState("rgba(255, 255, 255, 0)"); // Initially transparent
  const [textColor, setTextColor] = useState("#000000");

  const isColorLight = (color) => {
    // Extract RGB values from the color
    const rgba = color.match(/rgba?\((\d+), (\d+), (\d+)(?:, (\d+(\.\d+)?))?\)/);
    if (rgba) {
      const r = parseInt(rgba[1], 10);
      const g = parseInt(rgba[2], 10);
      const b = parseInt(rgba[3], 10);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 155;
    }
    // Fallback for hex colors
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155;
  };

  useEffect(() => {
    setTextColor(isColorLight(color) ? "#000000" : "#ffffff");
  }, [color]); // Recalculate text color when `color` changes

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    const rgbaColor = hexToRgba(newColor, 0.5); // Convert hex to rgba with 50% opacity
    setColor(rgbaColor);
  };

  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: color, // Dynamically set background color
        color: textColor, // Now updated via useEffect
        transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        borderRadius: "10px",
        ...style,
      }}
      {...props}
    >
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        style={{
          position: "relative",
          top: "0px",
          right: "-140px",
          borderRadius: "5px",
          width: "25px",
          height: "25px",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
        }}
      />
      {children}
    </div>
  );
}
