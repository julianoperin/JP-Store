import React from "react";
import "./SideDrawer.scss";

const SideDrawer = ({ show }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <h1>SideDrawer</h1>
    </div>
  );
};

export default SideDrawer;
