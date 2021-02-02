import * as React from "react";
import { ReactElement } from "react";
import { Helmet } from "react-helmet";

import "./../assets/scss/App.scss";
import "./../assets/scss/home.scss";
import GiftFinder from "./GiftFinder";
import Categories from "./Categories";
import OurStory from "./OurStory";

const Home = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>Ruben & Me | Home</title>
        <meta name="description" content="" />
      </Helmet>

      <header className="masthead">
        <div className="top-padding">
          <div className="columns is-gapless is-multiline has-text-centered is-centered">
            <div className="column is-3">
              <h2 className="title">Reuben & Me.</h2>
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
        </div>
      </main>
    </>
  );
};

export default Home;
