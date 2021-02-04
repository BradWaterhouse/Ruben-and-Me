import * as React from "react";
import { ReactElement, useState } from "react";
import { Helmet } from "react-helmet";

import { Button } from "./Button";
import "./../assets/scss/App.scss";

const renderSuccess: ReactElement = (
  <div className="notification is-primary">
    Thank you for your enquiry. I&apos;ll get back to you shortly!
  </div>
);

const Contact = (): ReactElement => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccessful] = useState<boolean>(false);

  const handleSubmit = (event): void => {
    event.preventDefault();
    setLoading(true);
    fetch("https://localhost", {
      body: new URLSearchParams(new FormData(event.target) as URLSearchParams),
      method: "POST",
    })
      .then((response: Response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response: Response) => response.json())
      .then((json: string | boolean) => {
        if (json === true) {
          setSuccessful(true);
        } else {
          setError(json as string);
        }
        setLoading(true);
      })
      .catch(() =>
        setError("There was an error sending your email, please try again.")
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
            readOnly={loading}
          />
        </div>
      </div>
      {error === "" ? null : (
        <div className="notification is-danger">{error}</div>
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
