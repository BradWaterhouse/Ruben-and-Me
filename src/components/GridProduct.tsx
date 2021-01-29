import React, { ReactElement } from "react";

interface Props {
  image: string;
  price: string:
}

interface State {}

const GridProduct = (props: Props): ReactElement => {
  return (
    <div className="column is-one-quarter-desktop is-12-mobile">
      <div className="card">
        <img src={props.image} alt="Alps" />
        <div className="w3-container w3-center">
          <h3>Some Product Title</h3>
          <b>£{props.price}</b>
          <br />
          <button
            className="button"
            style={{ marginTop: 10, backgroundColor: "#faefdf" }}
          >
            Shop Now on Etsy
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridProduct;
