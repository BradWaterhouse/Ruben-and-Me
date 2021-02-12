import * as React from "react";
import { ReactElement } from "react";
import { Helmet } from "react-helmet";

import "./../assets/scss/App.scss";
import "./../assets/scss/home.scss";
import GiftFinder from "./GiftFinder";
import OurStory from "./OurStory";
import Categories from "./Categories";

const Home = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>Reuben & Me | Home</title>
        <meta name="description" content="" />
      </Helmet>

      <header className="masthead">
        <div className="top-padding">
          <div className="columns is-gapless is-multiline has-text-centered is-centered">
            <div className="column is-3">
              <h2 className="title" style={{ fontWeight: "lighter" }}>Reuben & Me.</h2>
              <h3 className="subtitle">personalisation done personally.</h3>
            </div>
          </div>
        </div>
      </header>
      <main className="main-content">
        <div className="container mb-5">
          <GiftFinder />
          <hr />
          <Categories />
          <hr />
          <OurStory />
          <hr />

          <h3 className="title mt-2 has-text-centered" style={{ fontWeight: "lighter" }}>Socials.</h3>
          <div className="elfsight-app-67841bb5-a9f7-476d-9a00-6235449c86a4" />

          <hr />
        </div>
      </main>
    </>
  );
};

export default Home;
