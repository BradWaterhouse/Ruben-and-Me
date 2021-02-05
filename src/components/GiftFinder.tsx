import React, { ReactElement } from "react";

interface Props {}

interface State {}

const GiftFinder = (): ReactElement => {
  return (
    <>
      <div className="gift-finder">
        <h2 className="title has-text-centered">
          Find the perfect gift for...
        </h2>
        <div className="columns is-multiline has-text-centered">
          <div className="column">
            <a style={{ color: "#757474" }} href="/category/new-baby">
              <h3 className="gift-finder-button">New Baby</h3>
            </a>
          </div>
          <div className="column">
            <a style={{ color: "#757474" }} href="/category/1st-birthday">
              <h3 className="gift-finder-button">1st Birthday</h3>
            </a>
          </div>
          <div className="column">
            <a style={{ color: "#757474" }} href="/category/boys">
              <h3 className="gift-finder-button">Boys</h3>
            </a>
          </div>
          <div className="column">
            <a style={{ color: "#757474" }} href="/category/girls">
              <h3 className="gift-finder-button">Girls</h3>
            </a>
          </div>
          <div className="column">
            <a style={{ color: "#757474" }} href="/category/all-occasions">
              <h3 className="gift-finder-button">All Occasions</h3>
            </a>
          </div>
          <div className="column">
            <a style={{ color: "#757474" }} href="/category/unisex">
              <h3 className="gift-finder-button">Unisex</h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftFinder;
