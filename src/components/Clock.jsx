import React from "react";
import Div from "./Div";

// this is a component that will display the current time
// it will update every second
// it will be displayed in a clock format on a round clock face

export default function Clock() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  const hourDegrees = ((hours % 12 + minutes / 60) / 12) * 360;

  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <Div style={{ display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "20px", borderRadius: "10px", width: "100%" }}>
      <h2>Clock Component</h2>
      <div style={{ position: "relative", width: "200px", height: "200px", borderRadius: "50%", border: "2px solid black" }}>
        {numbers.map((number) => {
          const angle = (number / 12) * 360;
          const x = 50 + 40 * Math.cos((angle - 90) * (Math.PI / 180));
          const y = 50 + 40 * Math.sin((angle - 90) * (Math.PI / 180));
          return (
            <div
              key={number}
              style={{
                position: "absolute",
                top: `${y}%`,
                left: `${x}%`,
                transform: "translate(-50%, -50%)",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {number}
            </div>
          );
        })}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "black",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "2px",
            height: "45%",
            backgroundColor: "red",
            transformOrigin: "bottom",
            transform: `translate(-50%, -100%) rotate(${secondDegrees}deg)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "4px",
            height: "35%",
            backgroundColor: "black",
            transformOrigin: "bottom",
            transform: `translate(-50%, -100%) rotate(${minuteDegrees}deg)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "6px",
            height: "25%",
            backgroundColor: "black",
            transformOrigin: "bottom",
            transform: `translate(-50%, -100%) rotate(${hourDegrees}deg)`,
          }}
        />
      </div>
    </Div>
  );
}