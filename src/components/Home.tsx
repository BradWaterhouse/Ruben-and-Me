import * as React from "react";
import { ReactElement } from "react";
import { Helmet } from "react-helmet";

import "./../assets/scss/App.scss";
import "./../assets/scss/home.scss";

const Home = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>Ruben & Me | Home</title>
        <meta name="description" content="" />
      </Helmet>

      <header className="masthead">
        <div className="top-padding">
          <div className="columns is-multiline has-text-centered">
            <div className="column is-12">
              <h2 className="title">Ruben & Me.</h2>
              <h3 className="subtitle">personalisation done personally.</h3>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="columns is-multiline has-text-centered">
            <div className="column is-12">
              <div className="columns is-multiline is-mobile">
                <div className="column is-one-fifth-desktop is-12-mobile">
                  <code>is-one-quarter</code>
                </div>
                <div className="column is-one-fifth-desktop is-12-mobile">
                  <code>is-one-quarter</code>
                </div>
                <div className="column is-one-fifth-desktop is-12-mobile">
                  <code>is-one-quarter</code>
                </div>
                <div className="column is-one-fifth-desktop is-12-mobile">
                  <code>is-one-quarter</code>
                </div>
                <div className="column is-one-fifth-desktop is-12-mobile">
                  <code>is-one-quarter</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
