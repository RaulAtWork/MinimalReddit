import React from "react";

function SwitchButton({ value, handleClick, label, className }) {
  return (
    <div className={`switch-container ${className}`}>
      {label}
      <button
        className={`switch ${value ? "on" : "off"}`}
        onClick={handleClick}
      >
        <span className="switch-handle" />
      </button>
    </div>
  );
}

export default SwitchButton;
