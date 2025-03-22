import React, { useState } from "react";
import Div from "./Div";

// this is a component that will display an alert bar 
// the alert bar will have a header and a message with
// a button to switch to a different alert 

const alertMessages = [
  {
    header: "Warning",
    message: "This is a warning message",
  },
  {
    header: "Error",
    message: "This is an error message",
  },
  {
    header: "Success",
    message: "This is a success message",
  },
  {
    header: "Info",
    message: "This is an informational message",
  },
  {
    header: "Alert",
    message: "This is an alert message",
  },
  {
    header: "Notice",
    message: "This is a notice message",
  },
  {
    header: "Critical",
    message: "This is a critical message",
  },
  {
    header: "Update",
    message: "This is an update message",
  },
  {
    header: "Reminder",
    message: "This is a reminder message",
  },
  {
    header: "Announcement",
    message: "This is an announcement message",
  },
];

const AlertBar = () => {
  const [alertIndex, setAlertIndex] = useState(0);

  const handleNextAlert = () => {
    setAlertIndex((prevIndex) => (prevIndex + 1) % alertMessages.length);
  };

  return (
    <Div style={{ display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "20px", borderRadius: "10px", marginBottom: "20px", transition: "all 0.3s ease-in-out", width: "100%" }}>
      <h2 style={{marginBottom: "10px", transition: "color 0.3s ease-in-out" }}>{alertMessages[alertIndex].header}</h2>
      <p style={{marginBottom: "20px", transition: "color 0.3s ease-in-out" }}>{alertMessages[alertIndex].message}</p>
      <button onClick={handleNextAlert} style={{ padding: "10px 20px", borderRadius: "5px", border: "none", backgroundColor: "#007BFF", color: "white", cursor: "pointer", transition: "background-color 0.3s ease-in-out" }}>
        Next Alert
      </button>
    </Div>
  );
};

export default AlertBar;