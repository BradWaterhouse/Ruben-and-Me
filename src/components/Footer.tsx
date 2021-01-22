import * as React from "react";
import { ReactElement } from "react";

import "./../assets/scss/App.scss";

export const Footer = (): ReactElement => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <h3>Keep in touch with us.</h3>
        <h4 style={{paddingBottom: 10}}>
          Sign up to our emails for news, competitions and exclusive discounts.
        </h4>
        <div className="sign-up">
          <div className="columns is-multiline has-text-centered is-centered">
            <div className="">
              <input
                className="input footer-input"
                placeholder="Your name"
                style={{ marginRight: 5 }}
                type="text"
              />
            </div>
            <div className="">
              <input
                className="input footer-input"
                placeholder="Your email"
                style={{ marginRight: 5 }}
                type="text"
              />
            </div>
          </div>
          <button className="button">Submit</button>
        </div>
        <div className="copyright" style={{ marginTop: 20 }}>
          <p>
            <strong>Ruben & Me</strong> created by{" "}
            <a href="/">Brad Waterhouse</a>
            <p>© 2020</p>
          </p>
        </div>
      </div>
    </footer>
  );
};
