import React from "react";
import "./Backdrop.scss";

const Backdrop = ({ show, click }) => {
  return (
    show && (
      <div className="backdrop" onClick={click}>
        <h1>Backdrop</h1>
      </div>
    )
  );
};

export default Backdrop;
