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
      <div className="container mb-5">
        <hr />
        <div
          className="columns is-10 has-text-centered is-centered is-mobile"
          style={{ marginTop: 20 }}
        >
          <div
            className="column has-text-centered"
            style={{ marginLeft: 10, marginRight: 10 }}
          >
            <h3 className="subtitle mt-2">
              <b>Free</b> Gift Box.
            </h3>
            <small className="is-hidden-mobile">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </small>
            <small className="is-hidden-desktop is-hidden-tablet">
              Across all items.
            </small>
          </div>
          <div
            className="column has-text-centered"
            style={{ marginLeft: 10, marginRight: 10 }}
          >
            <h3 className="subtitle mt-2">
              <b>Free</b> Delivery.
            </h3>
            <small className="is-hidden-mobile">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </small>
            <small className="is-hidden-desktop is-hidden-tablet">
              On orders over £32.
            </small>
          </div>
        </div>
      </div>
      <hr />

      <header className="masthead">
        <div className="top-padding">
          <div className="columns is-multiline has-text-centered is-centered">
            <div className="column is-3 logo-border">
              <h2 className="title">Ruben & Me.</h2>
              <h3 className="subtitle">personalisation done personally.</h3>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container mb-5">
          <div className="gift-finder">
            <h2 className="title has-text-centered">
              Find the perfect gift for...
            </h2>
            <div className="columns is-multiline has-text-centered">
              <div className="column">
                <h3 className="gift-finder-button">New Baby</h3>
              </div>
              <div className="column">
                <h3 className="gift-finder-button">1st Birthday</h3>
              </div>
              <div className="column">
                <h3 className="gift-finder-button">Boys</h3>
              </div>
              <div className="column">
                <h3 className="gift-finder-button">Girls</h3>
              </div>
              <div className="column">
                <h3 className="gift-finder-button">All Occasions</h3>
              </div>
              <div className="column">
                <h3 className="gift-finder-button">Unisex</h3>
              </div>
            </div>
          </div>

          <hr />

          <h3 className="title mt-2 has-text-centered">Shop by category.</h3>
          <hr />

          <div className="columns is-multiline has-text-centered">
            <div className="column is-12">
              <div className="columns is-multiline is-mobile">
                <div className="column is-one-fifth-desktop is-12-mobile">
                  <div className="card">
                    <img
                      src="https://cdn.my1styears.com/media/wysiwyg/home/grid/ENewIn.jpg"
                      alt="Alps"
                    />
                    <div className="w3-container w3-center">
                      <h3>Some Product Titles</h3>
                    </div>
                  </div>
                </div>
                <div className="column is-one-fifth-desktop is-12-mobile">
                  <div className="card">
                    <img
                      src="https://cdn.my1styears.com/media/wysiwyg/home/grid/ESoftToys.jpg"
                      alt="Alps"
                    />
                    <div className="w3-container w3-center">
                      <h3>Some Product Titles</h3>
                    </div>
                  </div>
                </div>
                <div className="column is-one-fifth-desktop is-12-mobile">
                  <div className="card">
                    <img
                      src="https://cdn.my1styears.com/media/wysiwyg/home/grid/20_01_21_Homepage_Tile_Category_Block_Robes.jpg"
                      alt="Alps"
                    />
                    <div className="w3-container w3-center">
                      <h3>Some Product Titles</h3>
                    </div>
                  </div>
                </div>
                <div className="column is-one-fifth-desktop is-12-mobile">
                  <div className="card">
                    <img
                      src="https://cdn.my1styears.com/media/wysiwyg/home/grid/20_01_21_Homepage_Tile_Category_Block_GiftSets.jpg"
                      alt="Alps"
                    />
                    <div className="w3-container w3-center">
                      <h3>Some Product Titles</h3>
                    </div>
                  </div>
                </div>
                <div className="column is-one-fifth-desktop is-12-mobile">
                  <div className="card">
                    <img
                      src="https://cdn.my1styears.com/media/wysiwyg/home/grid/EBackpacks.jpg"
                      alt="Alps"
                    />
                    <div className="w3-container w3-center">
                      <h3>Some Product Titles</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="columns is-multiline has-text-centered">
            <div className="column is-12">
              <div className="columns is-multiline is-mobile">
                <div className="column is-one-fifth-desktop is-12-mobile">
                  <div className="card">
                    <img
                      src="https://cdn.my1styears.com/media/wysiwyg/home/grid/EBackpacks.jpg"
                      alt="Alps"
                    />
                    <div className="w3-container w3-center">
                      <h3>Some Product Titles</h3>
                    </div>
                  </div>
                </div>
                <div className="column is-one-fifth-desktop is-12-mobile">
                  <div className="card">
                    <img
                      src="https://cdn.my1styears.com/media/wysiwyg/home/grid/20_01_21_Homepage_Tile_Category_Block_Robes.jpg"
                      alt="Alps"
                    />
                    <div className="w3-container w3-center">
                      <h3>Some Product Titles</h3>
                    </div>
                  </div>
                </div>
                <div className="column is-one-fifth-desktop is-12-mobile">
                  <div className="card">
                    <img
                      src="https://cdn.my1styears.com/media/wysiwyg/home/grid/EWoodenToys.jpg"
                      alt="Alps"
                    />
                    <div className="w3-container w3-center">
                      <h3>Some Product Titles</h3>
                    </div>
                  </div>
                </div>
                <div className="column is-one-fifth-desktop is-12-mobile">
                  <div className="card">
                    <img
                      src="https://cdn.my1styears.com/media/wysiwyg/home/grid/EStorage.jpg"
                      alt="Alps"
                    />
                    <div className="w3-container w3-center">
                      <h3>Some Product Titles</h3>
                    </div>
                  </div>
                </div>
                <div className="column is-one-fifth-desktop is-12-mobile">
                  <div className="card">
                    <img
                      src="https://cdn.my1styears.com/media/wysiwyg/home/grid/ENewIn.jpg"
                      alt="Alps"
                    />
                    <div className="w3-container w3-center">
                      <h3>Some Product Titles</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <h3 className="title mt-2 has-text-centered">Our Story.</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <hr />
        </div>
      </main>
    </>
  );
};

export default Home;
