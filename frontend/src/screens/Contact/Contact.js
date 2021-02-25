import React from "react";
import "./Contact.scss";

import img from "../../Assets/contact.jpg";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="left-side">
          <img src={img} alt="contact-image" />
          <div className="hide-photo-filterr"></div>
        </div>

        <div className="right-side">
          <div id="wrapper">
            <form action="" className="form">
              <h2 style={{ textAlign: "center", color: "#004C40" }}>
                {" "}
                BE IN TOUCH
              </h2>

              <p className="field required half">
                <input
                  placeholder="Name"
                  className="text-input"
                  id="name"
                  name="name"
                  required
                  type="text"
                />
              </p>

              <p className="field required half">
                <input
                  placeholder="E-mail"
                  className="text-input"
                  id="email"
                  name="email"
                  required
                  type="email"
                />
              </p>

              <p className="field">
                <textarea
                  placeholder="Message"
                  className="textarea"
                  cols="50"
                  id="message"
                  name="message"
                  required
                  rows="4"
                />
              </p>
              <p className="field">
                <input
                  className="button"
                  type="submit"
                  value="Send message"
                  //   style={{ borderRadius: "10px", BackgroundColor: "#004C40" }}
                />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
