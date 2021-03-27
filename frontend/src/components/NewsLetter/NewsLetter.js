import React, { useState } from "react";
import "./NewsLetter.scss";
import { FaEnvelope } from "react-icons/fa";

const NewsLetter = () => {
  const [subscribe, setSubscribe] = useState(false);
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(false);

  const handleSubscribe = () => {
    if (email === "") {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    } else {
      setSubscribe(!subscribe);
    }
  };

  return (
    <div className="body-newsletter">
      <div className="container-newsletter">
        <form>
          <h1>THE FUTURE OF PLANTS</h1>
          <p>
            Blending the science of horticulture with the art of design. We
            don't want to sell you plants, we want to sell you on planting.
          </p>

          {subscribe ? (
            <h2>Thanks for Subscribing!"</h2>
          ) : (
            <div className="email-box">
              <div className="envelope">
                <FaEnvelope className="envelopy" />
              </div>
              <input
                className="tbox"
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="btnn" type="button" onClick={handleSubscribe}>
                Subscribe
              </button>
            </div>
          )}
          <h4
            style={{ marginTop: ".5rem", color: "red" }}
            className="alert-email"
          >
            {alert ? "Please enter a valid email!" : ""}
          </h4>
        </form>
      </div>
      <div className="banner"></div>
    </div>
  );
};

export default NewsLetter;
