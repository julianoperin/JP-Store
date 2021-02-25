import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="left-side"></div>
        <div className="right-side">
          <div id="wrapper">
            <form action="" class="form">
              <p class="field required half">
                <label class="label required" for="name">
                  Name
                </label>
                <input
                  class="text-input"
                  id="name"
                  name="name"
                  required
                  type="text"
                />
              </p>
              <p class="field required half">
                <label class="label" for="email">
                  E-mail
                </label>
                <input
                  class="text-input"
                  id="email"
                  name="email"
                  required
                  type="email"
                />
              </p>
              <p class="field">
                <label class="label" for="message">
                  Message
                </label>
                <textarea
                  class="textarea"
                  cols="50"
                  id="message"
                  name="message"
                  required
                  rows="4"
                />
              </p>
              <p class="field">
                <input class="button" type="submit" value="Send message" />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
