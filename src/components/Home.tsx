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
        <div className="container mb-5">
          <hr />
          <h3 className="title mt-2">Our Story.</h3>
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
          <h3 className="title mt-2">Shop by category.</h3>
          <hr />

          <div className="columns is-multiline has-text-centered">
            <div className="column is-12">
              <div className="columns is-multiline is-mobile">
                <div className="column is-one-fifth-desktop is-12-mobile">
                  <div className="card">
                    <img
                      src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg"
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
                      src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg"
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
                      src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg"
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
                      src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg"
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
                      src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg"
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
                      src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg"
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
                      src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg"
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
                      src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg"
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
                      src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg"
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
                      src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg"
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
        </div>
      </main>
    </>
  );
};

export default Home;
