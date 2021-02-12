import * as React from "react";
import { ChangeEvent, ReactElement, useState } from "react";

import "./../assets/scss/App.scss";
import emailjs from "emailjs-com";

export const Footer = (): ReactElement => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = (event): void => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_n76czls",
        "template_90vlwae",
        event.target,
        "user_ml6uPKjNjSrf3bbqGWHJJ"
      )
      .then(
        (result) => {
          setSuccess(true);
          setEmail("");
          setName("");
        },
        (error) => {
          setError("Opps, something has gone wrong");
          setLoading(false);
        }
      );
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setName(event.target.value);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setEmail(event.target.value);

  const renderMarketing: JSX.Element = (
    <form onSubmit={handleSubmit}>
      <div className="sign-up">
        <div className="columns is-multiline has-text-centered is-centered">
          <div className="">
            <input
              className="input newsletter-input"
              id="name"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={handleNameChange}
              style={{ marginRight: 5 }}
              type="text"
              required
            />
          </div>
          <div className="">
            <input
              className="input newsletter-input"
              id="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={handleEmailChange}
              style={{ marginRight: 5 }}
              type="email"
              required
            />
          </div>
        </div>
        <button className="button" disabled={loading}>
          Submit
        </button>
      </div>
    </form>
  );

  const renderSuccess: ReactElement = (
    <div className="notification is-primary has-text-centered is-light">
      <h5>Thank you for signing up to our email list.</h5>{" "}
      <p>we will be in touch with exclusive offers.</p>
    </div>
  );

  return (
    <footer className="newsletter">
      <div className="content has-text-centered">
        <h3 style={{ fontWeight: "lighter" }}>Keep in touch with us.</h3>
        <h4
          className="subtitle"
          style={{ paddingBottom: 10, fontWeight: "lighter" }}
        >
          Sign up to our emails for news, competitions and exclusive discounts.
        </h4>
        {success ? renderSuccess : renderMarketing}
        <div className="copyright" style={{ marginTop: 20 }}>
          <h5 style={{ fontWeight: "lighter" }}>
            <strong>Reuben & Me</strong> <small> © 2020</small> created by
            <a href="/"> Brad Waterhouse</a>
          </h5>
        </div>
      </div>
    </footer>
  );
};
