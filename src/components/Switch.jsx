import { positions } from "@mui/system";
import React from "react";
import "./Switch.css";

const Switch = ({ isOn, handleToggle }) => {
  return (
    <div
      className="customised-toggle"
      style={{
        display: "flex",
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <p style={{ marginRight: "0.5rem" }}>Silly</p>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && "#363031" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
      <p style={{ marginLeft: "1rem" }}>mobility</p>
    </div>
  );
};

export default Switch;
