import * as React from "react";
import { ReactElement, useState } from "react";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";

import { Button } from "./Button";
import "./../assets/scss/App.scss";

const renderSuccess: ReactElement = (
  <div className="notification is-primary has-text-centered is-light">
    Thank you for your enquiry. We will get back to you shortly!
  </div>
);

const Contact = (): ReactElement => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccessful] = useState<boolean>(false);

  const handleSubmit = (event): void => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_n76czls",
        "template_x4z7kwr",
        event.target,
        "user_ml6uPKjNjSrf3bbqGWHJJ"
      )
      .then(
        (result) => {
          setSuccessful(true);
        },
        (error) => {
          setError("Opps, something has gone wrong");
          setLoading(false);
        }
      );
  };

  const renderForm: JSX.Element = (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name" className="label">
          Name
        </label>
        <div className="control">
          <input
            id="name"
            className="input"
            type="text"
            placeholder="Name&hellip;"
            name="name"
            required
            disabled={loading}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="email" className="label">
          Email
        </label>
        <div className="control">
          <input
            id="email"
            className="input"
            type="email"
            placeholder="Email address&hellip;"
            name="email"
            required
            disabled={loading}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="phone" className="label">
          Telephone
        </label>
        <div className="control">
          <input
            id="phone"
            className="input"
            type="tel"
            placeholder="Telephone number&hellip;"
            name="phone"
            required
            disabled={loading}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message" className="label">
          Message
        </label>
        <div className="control">
          <textarea
            id="message"
            className="textarea"
            placeholder="Enquiry&hellip;"
            name="message"
            required
            readOnly={loading}
          />
        </div>
      </div>
      {error === "" ? null : (
        <div className="notification is-danger is-light">{error}</div>
      )}
      <div className="field">
        <div className="control ">
          <Button text="SEND" disabled={loading} />
        </div>
      </div>
    </form>
  );

  return (
    <>
      <Helmet>
        <title>Reuben & Me | Contact</title>
        <meta name="description" content="Contact" />
      </Helmet>

      <main className="main-content">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12 has-text-centered">
              <h2 className="title">Get in Touch</h2>
              <p>For enquiries, please use the form below.</p>
            </div>
            <div className="column is-8 is-offset-2">
              {success ? renderSuccess : renderForm}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
