import React from "react";
import "./NewsLetter.scss";
import { FaEnvelope } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className="body-newsletter">
      <div className="container-newsletter">
        <form>
          <h1>THE FUTURE OF PLANTS</h1>
          <p>
            Blending the science of horticulture with the art of design. We
            don't want to sell you plants, we want to sell you on planting.
          </p>
          <div className="email-box">
            <div className="envelope">
              <FaEnvelope className="envelopy" />
            </div>
            <input
              className="tbox"
              type="email"
              placeholder="Enter your email..."
            />
            <button className="btnn" type="button">
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div className="banner"></div>
    </div>
  );
};

export default NewsLetter;
