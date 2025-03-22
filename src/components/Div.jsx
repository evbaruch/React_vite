import React, { useState, useEffect } from "react";

export default function Div({ children, style, ...props }) {
  const [color, setColor] = useState("rgba(255, 255, 255, 0)"); // Initially transparent
  const [textColor, setTextColor] = useState("#000000");

  const isColorLight = (color) => {
    if (!/^#[0-9A-F]{6}$/i.test(color)) return true; // Default to light if invalid
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155;
  };

  useEffect(() => {
    const newTextColor = isColorLight(color) ? "#000000" : "#ffffff";
    console.log(`Background: ${color}, Text Color: ${newTextColor}`);
    setTextColor(newTextColor);
  }, [color]); // Recalculate text color when `color` changes

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor + "80"); // Add 50% opacity to the selected color
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: color, // Dynamically set background color
        color: textColor, // Ensure text color updates
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
      <p>Sample Text</p>
      {children}
    </div>
  );
}