import React from "react";
import "./Backdrop.scss";

const Backdrop = ({ show }) => {
  return (
    show && (
      <div className="backdrop">
        <h1>Backdrop</h1>
      </div>
    )
  );
};

export default Backdrop;
