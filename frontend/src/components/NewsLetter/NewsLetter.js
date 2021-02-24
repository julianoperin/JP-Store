import React from "react";
import "./NewsLetter.scss";
import { FaEnvelope } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className="body-newsletter">
      <div className="container-newsletter">
        <form>
          <h1>Join Our Newsletter</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
            pariatur.
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
